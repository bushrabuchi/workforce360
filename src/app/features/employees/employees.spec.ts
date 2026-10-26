import { test, expect } from '@playwright/test';

test('should open the Employees page after login', async ({ page }) => {
  const token = 'employee-test-token';

  // Prevent unexpected API requests from reaching the real backend.
  await page.route('**/api/**', async (route) => {
    await route.abort();
  });

  // 1. Simulate a successful login response.
  await page.route('**/api/auth/login', async (route) => {
    await route.fulfill({
      status: 200,
      json: {
        access_token: token,
        token_type: 'bearer',
      },
    });
  });

  // 2. Return the authenticated user for login and route guards.
  await page.route('**/api/auth/me', async (route) => {
    const authorization = route.request().headers()['authorization'];

    if (authorization !== `Bearer ${token}`) {
      await route.fulfill({
        status: 401,
        json: {
          detail: 'Authentication required',
        },
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

  // 3. Return an empty employee list.
  // Matches the collection endpoint with or without a trailing slash.
  await page.route(/\/api\/employees\/?$/, async (route) => {
    await route.fulfill({
      status: 200,
      json: [],
    });
  });

  // 4. Open Login and complete the form.
  await page.goto('/login');

  await page.getByLabel('Email address', { exact: true }).fill('tester@example.com');

  await page.getByLabel('Password', { exact: true }).fill('ExamplePassword123!');

  await page
    .getByRole('button', {
      name: 'Sign in',
      exact: true,
    })
    .click();

  // 5. Confirm login navigation finished.
  await expect(page).toHaveURL(/\/dashboard$/);

  // 6. Open Employees from the sidebar.
  const navigation = page.getByRole('navigation', {
    name: 'Main navigation',
  });

  await navigation
    .getByRole('link', {
      name: /employees/i,
    })
    .click();

  // 7. Verify the destination and visible page content.
  await expect(page).toHaveURL(/\/employees$/);

  await expect(
    page.getByRole('heading', {
      name: 'Employees',
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', {
      name: 'No employees found',
      exact: true,
    }),
  ).toBeVisible();
});
