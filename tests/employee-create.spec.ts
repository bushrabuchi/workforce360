import { test, expect, type Page } from '@playwright/test';

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  status: string;
  joinDate: string;
  avatar: string;
}

const token = 'employee-create-test-token';

async function fillEmployeeForm(page: Page): Promise<void> {
  await page.getByLabel('First Name', { exact: true }).fill('Amina');

  await page.getByLabel('Last Name', { exact: true }).fill('Test');

  await page.getByLabel('Email', { exact: true }).fill('amina.test@example.com');

  // Angular Material select: click the control, then an option.
  await page
    .getByRole('combobox', {
      name: 'Department',
      exact: true,
    })
    .click();

  await page
    .getByRole('option', {
      name: 'Engineering',
      exact: true,
    })
    .click();

  await page.getByLabel('Position', { exact: true }).fill('Frontend Developer');

  // Status already defaults to Active in your component.

  await page.getByLabel('Join Date', { exact: true }).fill('2026-10-28');
}

test.describe('Add Employee', () => {
  test.beforeEach(async ({ page }) => {
    // Start this employee-focused test with a simulated session.
    await page.addInitScript((savedToken) => {
      sessionStorage.setItem('workforce360_access_token', savedToken);
    }, token);

    // Block any API request that this test has not mocked.
    await page.route('**/api/**', async (route) => {
      await route.abort();
    });

    // Allow the Angular route guard to verify our test session.
    await page.route('**/api/auth/me', async (route) => {
      const authorization = route.request().headers()['authorization'];

      if (authorization !== `Bearer ${token}`) {
        await route.fulfill({
          status: 401,
          json: { detail: 'Authentication required' },
        });

        return;
      }

      await route.fulfill({
        status: 200,
        json: {
          id: 101,
          name: 'Test User',
          email: 'tester@example.com',
        },
      });
    });
  });

  test('rejects an empty employee form', async ({ page }) => {
    const createRequests: string[] = [];

    page.on('request', (request) => {
      if (/\/api\/employees\/?$/.test(request.url()) && request.method() === 'POST') {
        createRequests.push(request.url());
      }
    });

    await page.goto('/employees/add');

    await page
      .getByRole('button', {
        name: /save employee/i,
      })
      .click();

    await expect(
      page.getByText('First name is required', {
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByText('Last name is required', {
        exact: true,
      }),
    ).toBeVisible();

    await expect(page).toHaveURL(/\/employees\/add$/);

    expect(createRequests).toHaveLength(0);
  });

  test('creates an employee and displays it after refresh', async ({ page }) => {
    // Each test gets its own independent mock data.
    const employees: Employee[] = [];

    await page.route(/\/api\/employees\/?$/, async (route) => {
      const request = route.request();

      if (request.method() === 'GET') {
        await route.fulfill({
          status: 200,
          json: employees,
        });

        return;
      }

      if (request.method() === 'POST') {
        const submitted = request.postDataJSON() as Omit<Employee, 'id'>;

        const created: Employee = {
          ...submitted,
          id: 501,
        };

        employees.push(created);

        await route.fulfill({
          status: 201,
          json: created,
        });

        return;
      }

      await route.fulfill({
        status: 405,
        json: { detail: 'Method not allowed in this test' },
      });
    });

    await page.goto('/employees/add');

    await fillEmployeeForm(page);

    // Register before clicking so we cannot miss the request.
    const createRequestPromise = page.waitForRequest(
      (request) => /\/api\/employees\/?$/.test(request.url()) && request.method() === 'POST',
    );

    await page
      .getByRole('button', {
        name: /save employee/i,
      })
      .click();

    const createRequest = await createRequestPromise;

    expect(createRequest.postDataJSON()).toEqual({
      name: 'Amina Test',
      email: 'amina.test@example.com',
      department: 'Engineering',
      position: 'Frontend Developer',
      status: 'Active',
      joinDate: '2026-10-28',
      avatar: '',
    });

    await expect(page).toHaveURL(/\/employees$/);

    const employeeRow = page.getByRole('row').filter({
      hasText: 'amina.test@example.com',
    });

    await expect(employeeRow).toHaveCount(1);
    await expect(employeeRow).toContainText('Amina Test');
    await expect(employeeRow).toContainText('Engineering');
    await expect(employeeRow).toContainText('Frontend Developer');

    await page.reload();

    await expect(employeeRow).toHaveCount(1);
    await expect(employeeRow).toContainText('Amina Test');
  });
  test('shows a save error and preserves entered data', async ({ page }) => {
    await page.route(/\/api\/employees\/?$/, async (route) => {
      if (route.request().method() === 'POST') {
        await route.fulfill({
          status: 500,
          json: {
            detail: 'Simulated server error',
          },
        });

        return;
      }

      await route.abort();
    });

    await page.goto('/employees/add');

    await fillEmployeeForm(page);

    await page
      .getByRole('button', {
        name: 'Save Employee',
        exact: true,
      })
      .click();

    // The user can see what went wrong.
    await expect(page.getByRole('alert')).toHaveText('Unable to create employee.');

    // Failed submission should not navigate away.
    await expect(page).toHaveURL(/\/employees\/add$/);

    // Previously entered values remain available.
    await expect(page.getByLabel('First Name', { exact: true })).toHaveValue('Amina');

    await expect(page.getByLabel('Email', { exact: true })).toHaveValue('amina.test@example.com');

    // Loading has ended, allowing another attempt.
    await expect(
      page.getByRole('button', {
        name: 'Save Employee',
        exact: true,
      }),
    ).toBeEnabled();
  });
  test('cancels without creating an employee', async ({ page }) => {
    const createRequests: string[] = [];

    await page.route(/\/api\/employees\/?$/, async (route) => {
      if (route.request().method() === 'POST') {
        createRequests.push(route.request().url());

        await route.fulfill({
          status: 500,
          json: {
            detail: 'Cancel must not submit',
          },
        });

        return;
      }

      await route.fulfill({
        status: 200,
        json: [],
      });
    });

    await page.goto('/employees/add');

    await fillEmployeeForm(page);

    await page
      .getByRole('button', {
        name: 'Cancel',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL(/\/employees$/);

    await expect(
      page.getByRole('heading', {
        name: 'Employees',
        exact: true,
      }),
    ).toBeVisible();

    expect(createRequests).toHaveLength(0);
  });
});
