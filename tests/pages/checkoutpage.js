class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.zipCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.confirmationHeader = page.locator('.complete-header');
    this.itemTotal = page.locator('.summary_subtotal_label');
    this.taxAmount = page.locator('.summary_tax_label');
    this.orderTotal = page.locator('.summary_total_label');
    this.summaryContainer = page.locator('.checkout_summary_container');
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async enterFirstName(name) {
    await this.firstNameInput.fill('');
    await this.firstNameInput.fill(name);
  }

  async enterLastName(name) {
    await this.lastNameInput.fill('');
    await this.lastNameInput.fill(name);
  }

  async enterZipCode(zip) {
    await this.zipCodeInput.fill('');
    await this.zipCodeInput.fill(zip);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async getErrorMessage() {
    const text = await this.errorMessage.textContent();
    return text ? text.trim() : '';
  }

  async getConfirmationMessage() {
    const text = await this.confirmationHeader.textContent();
    return text ? text.trim() : '';
  }

  async isSummaryVisible() {
    await this.summaryContainer.waitFor({ state: 'visible' });
    return await this.summaryContainer.isVisible();
  }

  async isItemTotalVisible() {
    return await this.itemTotal.isVisible();
  }

  async isTaxVisible() {
    return await this.taxAmount.isVisible();
  }

  async isOrderTotalVisible() {
    return await this.orderTotal.isVisible();
  }
}

module.exports = CheckoutPage;