// const { createBdd } = require("playwright-bdd");
// const { test } = require("../fixtures");
const { Given, When, Then } = require('@cucumber/cucumber');
const { Login } = require("../pages/loginpage");
const { Inventory } = require("../pages/inventorypage");
const { expect } = require("@playwright/test");
let inventoryPage;

Given(
  "User is logged in as {string} with password {string}",
  async function (username, password) {
    const loginPage = new Login(this.page);
    await loginPage.launchURL("https://www.saucedemo.com");
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickSubmit();
    inventoryPage = new Inventory(this.page);
  },
);

When("Open the Inventory Page", async function () {
  await inventoryPage.verifyPageLoaded();
});
When("Name - A to Z", async function () {
  await inventoryPage.sortByNameAtoZ();
});
When("Name - Z to A", async function () {
  await inventoryPage.sortByNameZtoA();
});
When("Price - low to high", async function () {
  await inventoryPage.sortByPriceLowToHigh();
});
When("Price - high to low", async function () {
  await inventoryPage.sortByPriceHighToLow();
});

Then("Should see all the products", async function () {
  const count = await inventoryPage.getProductCount();
  expect(count).toBeGreaterThan(0);
});
Then("The products should be sorted alphabetically from A to Z", async function () {
  const result = await inventoryPage.isSortedAtoZ();
  expect(result).toBe(true);
});
Then("The products should be sorted alphabetically from Z to A", async function () {
  const result = await inventoryPage.isSortedZtoA();
  expect(result).toBe(true);
});
Then("The products should be sorted by Price low to high", async function () {
  const result = await inventoryPage.isSortedLowToHigh();
  expect(result).toBe(true);
});
Then("The products should be sorted by Price high to low", async function () {
  const result = await inventoryPage.isSortedHighToLow();
  expect(result).toBe(true);
});
