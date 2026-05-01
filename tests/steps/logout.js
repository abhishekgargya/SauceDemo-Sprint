// const { createBdd } = require('playwright-bdd');
// const { test } = require('../fixtures');
// const { Given, When, Then } = createBdd(test);

// const { Logout } = require('../pages/logoutpage');
// const { expect } = require('@playwright/test');

// let logoutPage;

// When("Click on menu button", async ({ page }) => {
//     logoutPage = new Logout(page);
//     await logoutPage.clickMenu();
// });

// When("Click on logout button", async ({}) => {
//     await logoutPage.clickLogout();
// });

// Then("User should be logged out {string}", async ({}, message) => {
//     await expect(logoutPage.loginLogo).toContainText(message);
// });



const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { Logout } = require('../pages/logoutpage');

let logoutPage;

When('Click on menu button', async function () {
    logoutPage = new Logout(this.page);
    await logoutPage.clickMenu();
});

When('Click on logout button', async function () {
    await logoutPage.clickLogout();
});

Then('User should be logged out {string}', async function (message) {
    await expect(logoutPage.loginLogo).toContainText(message);
});