import { test, expect } from '@playwright/test';

test('Workforce360 dashboard loads', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('app-root')).toBeVisible();

  console.log('Dashboard URL:', page.url());
});
