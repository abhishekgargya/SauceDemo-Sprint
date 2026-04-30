// const {createBdd} = require('playwright-bdd')
// const {test} = require('../fixtures')
// const {Given, When, Then} = createBdd(test)
// const {Login} = require('../pages/checkoutpage')
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
//     await expect(loginPage.successMSG).toContainText(message)
// })