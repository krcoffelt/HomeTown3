import { expect, test } from '@playwright/test';

const baseUrl = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:3005';

test.describe('Hometown Editorial Flow', () => {
  test('opens and closes the menu with keyboard support', async ({ page }) => {
    await page.goto(baseUrl);

    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('dialog', { name: 'Main menu' })).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Main menu' })).toBeHidden();
  });

  test('navigates from home to programs to a program detail page', async ({ page }) => {
    await page.goto(baseUrl);

    await page.getByRole('link', { name: 'Explore Programs' }).click();
    await expect(page).toHaveURL(/\/programs$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Programs');

    await page.getByRole('link', { name: 'Website Launch' }).first().click();
    await expect(page).toHaveURL(/\/programs\/website-launch$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Website Launch');
  });

  test('navigates from home to case studies and opens a case detail', async ({ page }) => {
    await page.goto(baseUrl);

    await page.getByRole('link', { name: 'Explore', exact: true }).first().click();
    await expect(page).toHaveURL(/\/case-studies$/);

    await page.getByRole('link', { name: 'Artisan bakery' }).first().click();
    await expect(page).toHaveURL(/\/case-studies\/artisan-bakery$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Artisan bakery');
  });

  test('renders core home layout in mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(baseUrl);

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Explore Programs' })).toBeVisible();
  });
});
