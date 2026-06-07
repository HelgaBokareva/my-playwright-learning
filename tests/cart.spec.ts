import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { USERS } from "../test-data/users";

test.describe("Cart", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.open();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
  });

  test("cart badge shows 1 after adding a product", async () => {
    await inventoryPage.addToCart("sauce-labs-backpack");
    await expect(
      inventoryPage.cartBadge,
      "Cart badge should show 1 after adding a product"
    ).toHaveText("1");
  });

  test("cart badge disappears after removing a product", async () => {
    await inventoryPage.addToCart("sauce-labs-backpack");
    await inventoryPage.removeFromCart("sauce-labs-backpack");
    await expect(
      inventoryPage.cartBadge,
      "Cart badge should not be visible after removing product"
    ).not.toBeVisible();
  });

  test("cart badge shows 2 after adding two products", async () => {
    await inventoryPage.addToCart("sauce-labs-backpack");
    await inventoryPage.addToCart("sauce-labs-bike-light");
    await expect(
      inventoryPage.cartBadge,
      "Cart badge should show 2 after adding two products"
    ).toHaveText("2");
  });

  test("cart page shows name of added product", async () => {
    await inventoryPage.addToCart("sauce-labs-backpack");
    await inventoryPage.openCart();
    await expect(
      inventoryPage.page.getByTestId("inventory-item-name"),
      "Cart page should show the name of the added product"
    ).toHaveText("Sauce Labs Backpack");
  });
});