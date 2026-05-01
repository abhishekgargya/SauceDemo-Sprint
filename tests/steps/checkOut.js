const { Given, When, Then } = require('@cucumber/cucumber');
const CheckoutPage = require('../pages/CheckoutPage');
const { expect } = require('@playwright/test');

let checkoutPage;

Given('I click the cart icon', async function () {
  const page = this.page;
  await page.locator('.shopping_cart_link').click();
  checkoutPage = new CheckoutPage(page);
});

When('I click the checkout button', async function () {
  const page = this.page;
  await page.locator('[data-test="checkout"]').click();
});

When('I enter checkout first name {string}', async function (firstname) {
  if (firstname) {
    await checkoutPage.enterFirstName(firstname);
  }
});

When('I enter checkout last name {string}', async function (lastname) {
  if (lastname) {
    await checkoutPage.enterLastName(lastname);
  }
});

When('I enter checkout zip code {string}', async function (zipcode) {
  if (zipcode) {
    await checkoutPage.enterZipCode(zipcode);
  }
});

When('I click the continue button', async function () {
  await checkoutPage.clickContinue();
});

Then('I should see {string}', async function (expectedResult) {
  if (expectedResult === 'order summary page') {
    expect(await checkoutPage.isSummaryVisible()).toBe(true);
  } else {
    const errorMsg = await checkoutPage.getErrorMessage();
    expect(errorMsg).toContain(expectedResult);
  }
});

Then('I should see the item total', async function () {
  expect(await checkoutPage.isItemTotalVisible()).toBe(true);
});

Then('I should see the tax amount', async function () {
  expect(await checkoutPage.isTaxVisible()).toBe(true);
});

Then('I should see the order total', async function () {
  expect(await checkoutPage.isOrderTotalVisible()).toBe(true);
});