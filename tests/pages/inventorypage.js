class Inventory {
  constructor(page) {
    this.page = page;
    this.filterBTN = page.locator(".product_sort_container");
    this.productItems = page.locator(".inventory_item");
    this.productNames = page.locator(".inventory_item_name");
    this.productPrices = page.locator(".inventory_item_price");
  }
  async verifyPageLoaded() {
    await this.productItems.first().waitFor({ state: "visible" });
  }
  async getProductCount() {
    return await this.productItems.count();
  }
  async sortByNameAtoZ() {
    await this.filterBTN.selectOption("az");
  }
  async sortByNameZtoA() {
    await this.filterBTN.selectOption("za");
  }
  async sortByPriceLowToHigh() {
    await this.filterBTN.selectOption("lohi");
  }
  async sortByPriceHighToLow() {
    await this.filterBTN.selectOption("hilo");
  }
  async getProductNames() {
    return await this.productNames.allTextContents();
  }
  async getProductPrices() {
    const priceTexts = await this.productPrices.allTextContents();
    return priceTexts.map((p) => parseFloat(p.replace("$", "")));
  }
  async isSortedAtoZ() {
    const names = await this.getProductNames();
    const sorted = [...names].sort();
    return JSON.stringify(names) === JSON.stringify(sorted);
  }
  async isSortedZtoA() {
    const names = await this.getProductNames();
    const sorted = [...names].sort().reverse();
    return JSON.stringify(names) === JSON.stringify(sorted);
  }
  async isSortedLowToHigh() {
    const prices = await this.getProductPrices();
    return prices.every((p, i) => i === 0 || prices[i - 1] <= p);
  }
  async isSortedHighToLow() {
    const prices = await this.getProductPrices();
    return prices.every((p, i) => i === 0 || prices[i - 1] >= p);
  }
}
module.exports = { Inventory };
