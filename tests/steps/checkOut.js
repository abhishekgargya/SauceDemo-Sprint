const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures');
const { Given, When, Then } = createBdd(test);
const CheckoutPage = require('../pages/CheckoutPage');
const { expect } = require('@playwright/test');

let checkoutPage;

Given('I am logged in as {string} with password {string}', async ({ page }, username, password) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();
});

Given('I add {string} to the cart', async ({ page }, product) => {
  await page.locator(`text=${product}`).click();
  await page.locator('button:has-text("Add to cart")').click();
});

Given('I click the cart icon', async ({ page }) => {
  await page.locator('.shopping_cart_link').click();
  checkoutPage = new CheckoutPage(page);
});

When('I click the checkout button', async ({ page }) => {
  await page.locator('[data-test="checkout"]').click();
});

When('I enter checkout first name {string}', async ({}, firstname) => {
  if (firstname) {
    await checkoutPage.enterFirstName(firstname);
  }
});

When('I enter checkout last name {string}', async ({}, lastname) => {
  if (lastname) {
    await checkoutPage.enterLastName(lastname);
  }
});

When('I enter checkout zip code {string}', async ({}, zipcode) => {
  if (zipcode) {
    await checkoutPage.enterZipCode(zipcode);
  }
});

When('I click the continue button', async ({}) => {
  await checkoutPage.clickContinue();
});

Then('I should see {string}', async ({}, expectedResult) => {
  if (expectedResult === 'order summary page') {
    expect(await checkoutPage.isSummaryVisible()).toBe(true);
  } else {
    const errorMsg = await checkoutPage.getErrorMessage();
    expect(errorMsg).toContain(expectedResult);
  }
});

Then('I should see the item total', async ({}) => {
  expect(await checkoutPage.isItemTotalVisible()).toBe(true);
});

Then('I should see the tax amount', async ({}) => {
  expect(await checkoutPage.isTaxVisible()).toBe(true);
});

Then('I should see the order total', async ({}) => {
  expect(await checkoutPage.isOrderTotalVisible()).toBe(true);
});