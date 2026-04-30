const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures');
const { Given, When, Then } = createBdd(test);

const { Logout } = require('../pages/logoutpage');
const { expect } = require('@playwright/test');

let logoutPage;

When("Click on menu button", async ({ page }) => {
    logoutPage = new Logout(page);
    await logoutPage.clickMenu();
});

When("Click on logout button", async ({}) => {
    await logoutPage.clickLogout();
});

Then("User should be logged out {string}", async ({}, message) => {
    await expect(logoutPage.loginLogo).toContainText(message);
});