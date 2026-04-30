const {createBdd} = require('playwright-bdd')
const {test} = require('../fixtures')
const {Given, When, Then} = createBdd(test)
const {CartPage} = require('../pages/validateCartpage')
const {Login} = require('../pages/loginpage')
const {expect} = require('@playwright/test')

let cartPage, loginPage
Given("I am logged in as {string} with password {string}", async({page}, username, password) => {
  loginPage = new Login(page)
  await loginPage.launchURL('https://www.saucedemo.com/')
  await loginPage.enterUsername(username)
  await loginPage.enterPassword(password)
  await loginPage.clickSubmit()
})

When("I add {string} to the cart", async({}, product) => {
  cartPage = new CartPage(loginPage.page)
  await cartPage.addProduct(product)
})
Then("the cart badge should show {string}", async({}, count) => {
  const cartCount = await cartPage.getCartCount()
  expect(cartCount).toBe(count)
})



