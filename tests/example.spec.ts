import { test, expect } from '@playwright/test';     // importing the test and expect functions

test('has title', async ({ page }) => {              // test to check if the page has the correct title
  await page.goto('https://playwright.dev/');        // navigating to the Playwright website
        
  await expect(page).toHaveTitle(/Playwright/);      // checking if the title of the page contains the word "Playwright"
});

test('get started link', async ({ page }) => {       // test to check if the "Get started" link works correctly
page.goto('https://playwright.dev/');       // navigating to the Playwright website

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
