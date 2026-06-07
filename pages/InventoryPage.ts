import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async addToCart(productTestId: string) {
    await this.page.getByTestId(`add-to-cart-${productTestId}`).click();
  }

  async removeFromCart(productTestId: string) {
    await this.page.getByTestId(`remove-${productTestId}`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}