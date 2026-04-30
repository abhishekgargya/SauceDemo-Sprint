const {Login} = require('../pages/loginpage')
const {expect} = require('@playwright/test')
const {Given, When, Then} = require('@cucumber/cucumber')

Given('navigate to {string}', async function (url) {
    this.loginPage = new Login(this.page)
    await this.loginPage.launchURL(url)
})
When('Enter username as {string}', async function (username) {
    await this.loginPage.enterUsername(username)
})
When('Enter password as {string}', async function (password) {
    await this.loginPage.enterPassword(password)
})
When('Click on submit button', async function () {
    await this.loginPage.clickSubmit()
})
Then('Login should be successful {string}', async function (message) {
    await expect(this.loginPage.successMSG).toContainText(message)
})