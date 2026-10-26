import { test, expect, type Page } from '@playwright/test';

const testAccount = {
  email: 'tester@example.com',
  password: 'ExamplePassword123!',
};

const mockUser = {
  id: 101,
  name: 'Test User',
  email: testAccount.email,
};

const mockToken = 'playwright-test-token';

// Simulate successful authentication.
// These responses never reach the real backend.
async function mockSuccessfulLogin(page: Page): Promise<void> {
  await page.route('**/api/auth/login', async (route) => {
    await route.fulfill({
      status: 200,
      json: {
        access_token: mockToken,
        token_type: 'bearer',
      },
    });
  });

  await page.route('**/api/auth/me', async (route) => {
    const authorization = route.request().headers()['authorization'];

    if (authorization !== `Bearer ${mockToken}`) {
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
      json: mockUser,
    });
  });
}

// Reusable browser actions for signing in.
async function signIn(page: Page): Promise<void> {
  await page.goto('/login');

  await page.getByLabel('Email address', { exact: true }).fill(testAccount.email);

  await page.getByLabel('Password', { exact: true }).fill(testAccount.password);

  await page
    .getByRole('button', {
      name: 'Sign in',
      exact: true,
    })
    .click();

  await expect(page).toHaveURL(/\/dashboard$/);
}

test.describe('Workforce360 authentication', () => {
  test.beforeEach(async ({ page }) => {
    // Prevent unmatched API calls from reaching a real backend.
    // More specific routes registered in a test take precedence.
    await page.route('**/api/**', async (route) => {
      await route.abort();
    });
  });

  test('redirects a signed-out visitor to login', async ({ page }) => {
    await page.goto('/dashboard');

    await expect(page).toHaveURL(/\/login\?returnUrl=%2Fdashboard/);

    await expect(
      page.getByRole('heading', {
        name: 'Welcome back',
        exact: true,
      }),
    ).toBeVisible();

    await expect(page.locator('app-sidebar')).toHaveCount(0);
  });

  test('shows required-field errors for an empty form', async ({ page }) => {
    await page.goto('/login');

    await page
      .getByRole('button', {
        name: 'Sign in',
        exact: true,
      })
      .click();

    await expect(
      page.getByText('Email address is required.', {
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByText('Password is required.', {
        exact: true,
      }),
    ).toBeVisible();

    await expect(page).toHaveURL(/\/login$/);
  });

  test('shows an error for an invalid email format', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Email address', { exact: true }).fill('not-an-email');

    await page.getByLabel('Password', { exact: true }).fill(testAccount.password);

    await page
      .getByRole('button', {
        name: 'Sign in',
        exact: true,
      })
      .click();

    await expect(
      page.getByText('Enter a valid email address.', {
        exact: true,
      }),
    ).toBeVisible();

    await expect(page).toHaveURL(/\/login$/);
  });

  test('shows and hides the password', async ({ page }) => {
    await page.goto('/login');

    const passwordInput = page.getByLabel('Password', {
      exact: true,
    });

    await passwordInput.fill(testAccount.password);

    await expect(passwordInput).toHaveAttribute('type', 'password');

    await page
      .getByRole('button', {
        name: 'Show password',
        exact: true,
      })
      .click();

    await expect(passwordInput).toHaveAttribute('type', 'text');

    await page
      .getByRole('button', {
        name: 'Hide password',
        exact: true,
      })
      .click();

    await expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('shows an error when login is rejected', async ({ page }) => {
    await page.route('**/api/auth/login', async (route) => {
      await route.fulfill({
        status: 401,
        json: {
          detail: 'Invalid email or password',
        },
      });
    });

    await page.goto('/login');

    await page.getByLabel('Email address', { exact: true }).fill(testAccount.email);

    await page.getByLabel('Password', { exact: true }).fill('IncorrectPassword123!');

    await page
      .getByRole('button', {
        name: 'Sign in',
        exact: true,
      })
      .click();

    await expect(page.getByRole('alert')).toHaveText('Invalid email or password.');

    await expect(
      page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      }),
    ).toBeEnabled();

    await expect(page).toHaveURL(/\/login$/);
  });

  test('logs in and restores the session after refresh', async ({ page }) => {
    await mockSuccessfulLogin(page);

    // Register the listener before triggering the request.
    const loginRequestPromise = page.waitForRequest(
      (request) => request.url().endsWith('/api/auth/login') && request.method() === 'POST',
    );

    await signIn(page);

    const loginRequest = await loginRequestPromise;

    expect(loginRequest.postDataJSON()).toEqual(testAccount);

    await expect(page.locator('app-dashboard')).toBeVisible();

    await expect(page.locator('app-sidebar')).toBeVisible();

    await page.reload();

    await expect(page).toHaveURL(/\/dashboard$/);

    await expect(page.locator('app-dashboard')).toBeVisible();
  });

  test('logs out and blocks access to dashboard', async ({ page }) => {
    await mockSuccessfulLogin(page);

    await signIn(page);

    await page
      .getByRole('button', {
        name: 'Profile',
        exact: true,
      })
      .click();

    // Accept the window.confirm dialog used by your header.
    page.once('dialog', async (dialog) => {
      await dialog.accept();
    });

    await page
      .getByRole('button', {
        name: 'Sign Out',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL(/\/login$/);

    const savedToken = await page.evaluate(() =>
      sessionStorage.getItem('workforce360_access_token'),
    );

    expect(savedToken).toBeNull();

    await page.goto('/dashboard');

    await expect(page).toHaveURL(/\/login\?returnUrl=%2Fdashboard/);
  });
});
