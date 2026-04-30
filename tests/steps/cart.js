const {CartPage} = require('../pages/validateCartpage')
const {Login} = require('../pages/loginpage')
const {expect} = require('@playwright/test')
const {Given, When, Then} = require('@cucumber/cucumber')

Given('I am logged in as {string} with password {string}', async function (username, password) {
  this.loginPage = new Login(this.page)
  await this.loginPage.launchURL('https://www.saucedemo.com/')
  await this.loginPage.enterUsername(username)
  await this.loginPage.enterPassword(password)
  await this.loginPage.clickSubmit()
})

When('I add {string} to the cart', async function (product) {
  this.cartPage = this.cartPage || new CartPage(this.page)
  await this.cartPage.addProduct(product)
})
Then('the cart badge should show {string}', async function (count) {
  const cartCount = await this.cartPage.getCartCount()
  expect(cartCount).toBe(count)
})



