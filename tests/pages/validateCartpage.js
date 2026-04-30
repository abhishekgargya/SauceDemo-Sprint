class CartPage {
  constructor(page) {
    this.page = page;
  }

  // From this we add product to cart
  async addProduct(productName) {
    if (!productName || productName.trim() === "") {
      return; // No product specified in this example row — skip
    }

    const product = this.page.locator('.inventory_item').filter({
      hasText: productName,
    });

    const count = await product.count();
    if (count === 0) {
      throw new Error(`Product not found: ${productName}`);
    }

    await product.locator('button').click();
  }

  // From this we get cart badge count
  async getCartCount() {
    const badge = this.page.locator('.shopping_cart_badge');
    if (await badge.isVisible()) {
      return await badge.innerText();
    }
    return "0";
  }
  async launchURL() {
    await this.page.goto("https://www.saucedemo.com/");
  }
}
module.exports = { CartPage };