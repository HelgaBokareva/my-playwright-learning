import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { USERS } from "../test-data/users";

test.describe("Checkout", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    await loginPage.open();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
  });

  test("user can complete checkout and see success message", async ({ page }) => {
    await test.step("Add product to cart", async () => {
      await inventoryPage.addToCart("sauce-labs-backpack");
      await inventoryPage.openCart();
    });

    await test.step("Start checkout", async () => {
      await cartPage.checkout();
    });

    await test.step("Fill in shipping info", async () => {
      await checkoutPage.fillInfo("Jane", "Doe", "12345");
    });

    await test.step("Verify product on overview page", async () => {
      await expect(
        page.getByTestId("inventory-item-name"),
        "Overview should show the selected product"
      ).toHaveText("Sauce Labs Backpack");
    });

    await test.step("Finish order and verify success", async () => {
      await checkoutPage.finish();
      await expect(
        checkoutPage.successMessage,
        "Success message should be visible after completing order"
      ).toBeVisible();
    });
  });
});