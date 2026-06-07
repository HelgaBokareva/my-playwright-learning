# Final Project — Playwright Test Suite

## Test target
SauceDemo (https://www.saucedemo.com)

## Covered user journey
Login → product selection → cart → checkout

## Test cases
- Valid user can log in and sees inventory page
- Locked user cannot log in and sees error message
- Wrong password shows error message
- Empty form shows validation error
- Cart badge shows correct count after adding a product
- Cart badge disappears after removing a product
- Adding two products shows badge count "2"
- Cart page shows name of added product
- User can complete full checkout and see success message

## Project structure
- `pages/` — Page Object classes (LoginPage, InventoryPage, CartPage, CheckoutPage)
- `tests/` — test specs (login.spec.ts, cart.spec.ts, checkout.spec.ts)
- `test-data/` — credentials and test inputs
- `playwright.config.ts` — configuration

## How to run
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Notes
- No hard waits (`waitForTimeout`) are used
- Tests use semantic locators (`getByRole`, `getByTestId`, `getByPlaceholder`)
- Test data is stored separately from test logic in `test-data/users.ts`

## Known limitations
- Suite covers the main happy path and key negative scenarios
- Does not cover all edge cases