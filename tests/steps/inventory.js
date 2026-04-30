const { createBdd } = require("playwright-bdd");
const { test } = require("../fixtures");
const { Given, When, Then } = createBdd(test);
const { Login } = require("../pages/loginpage");
const { Inventory } = require("../pages/inventorypage");
const { expect } = require("@playwright/test");
let inventoryPage;

Given(
  "User is logged in as {string} with password {string}",
  async ({ page }, username, password) => {
    const loginPage = new Login(page);
    await loginPage.launchURL("https://www.saucedemo.com");
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickSubmit();
    inventoryPage = new Inventory(page);
  },
);

When("Open the Inventory Page", async () => {
  await inventoryPage.verifyPageLoaded();
});
When("Name - A to Z", async () => {
  await inventoryPage.sortByNameAtoZ();
});
When("Name - Z to A", async () => {
  await inventoryPage.sortByNameZtoA();
});
When("Price - low to high", async () => {
  await inventoryPage.sortByPriceLowToHigh();
});
When("Price - high to low", async () => {
  await inventoryPage.sortByPriceHighToLow();
});


Then("Should see all the products", async () => {
  const count = await inventoryPage.getProductCount();
  expect(count).toBeGreaterThan(0);
});
Then("The products should be sorted alphabetically from A to Z", async () => {
  const result = await inventoryPage.isSortedAtoZ();
  expect(result).toBe(true);
});
Then("The products should be sorted alphabetically from Z to A", async () => {
  const result = await inventoryPage.isSortedZtoA();
  expect(result).toBe(true);
});
Then("The products should be sorted by Price low to high", async () => {
  const result = await inventoryPage.isSortedLowToHigh();
  expect(result).toBe(true);
});
Then("The products should be sorted by Price high to low", async () => {
  const result = await inventoryPage.isSortedHighToLow();
  expect(result).toBe(true);
});
