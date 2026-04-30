// const {createBdd} = require('playwright-bdd')
// const {test} = require('../fixtures')        
// const {Given, When, Then} = createBdd(test) 
// const {Login} = require('../pages/loginpage')   
// const {expect} = require('@playwright/test')    

// let loginPage
// Given("navigate to {string}", async({page}, url) => {
//     loginPage = new Login(page)
//     await loginPage.launchURL(url)
// })
// When("Enter username as {string}", async({}, username) => {
//     await loginPage.enterUsername(username)
// })
// When("Enter password as {string}", async({}, password) => {
//     await loginPage.enterPassword(password)
// })
// When("Click on submit button", async({}) => {
//     await loginPage.clickSubmit()
// })
// Then("Login should be successful {string}", async({}, message) => {
//     if (message === "Swag Labs") {
//         await expect(loginPage.successMSG).toContainText(message);
//     } else {
//         await expect(loginPage.errorMSG).toContainText(message);
//     }
// })


const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { Login } = require('../pages/loginpage');

let loginPage;

Given('navigate to {string}', async function (url) {
    loginPage = new Login(this.page);
    await loginPage.launchURL(url);
});

When('Enter username as {string}', async function (username) {
    await loginPage.enterUsername(username);
});

When('Enter password as {string}', async function (password) {
    await loginPage.enterPassword(password);
});

When('Click on submit button', async function () {
    await loginPage.clickSubmit();
});

Then('Login should be successful {string}', async function (message) {
    if (message === 'Swag Labs') {
        await expect(loginPage.successMSG).toContainText(message);
    } else {
        await expect(loginPage.errorMSG).toContainText(message);
    }
});
