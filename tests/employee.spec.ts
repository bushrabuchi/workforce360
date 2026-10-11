import { test, expect } from '@playwright/test';

test('should open the Employees page', async ({ page }) => {
  await page.goto('/');

  // Click the Employees navigation link.
  await page.getByRole('link', { name: /employees/i }).click();

  // Verify that the Employees page opens.
  await expect(page).toHaveURL(/employees/);

  console.log('Employees page URL:', page.url());
});
