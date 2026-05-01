# SauceDemo End-to-End Test Suite

A comprehensive Cucumber + Playwright automation suite for testing the [SauceDemo](https://www.saucedemo.com/) e-commerce application. The suite covers login, inventory, cart, checkout, and logout workflows with end-to-end scenario coverage.

## 🎯 Project Overview

This project demonstrates:
- **Behavior-Driven Development (BDD)** with Cucumber and Gherkin syntax
- **Page Object Model** for maintainable UI automation
- **End-to-End testing** across multiple user journeys
- **Comprehensive reporting** with screenshots and HTML reports
- **Scenario tagging** for flexible test execution
- **Data-driven testing** with Scenario Outline and Examples tables

## 📁 Project Structure

```
SauceDemo/
├── tests/
│   ├── features/           # Gherkin feature files
│   │   ├── login.feature
│   │   ├── logout.feature
│   │   ├── cart.feature
│   │   ├── checkout.feature
│   │   ├── inventory.feature
│   │   └── e2e.feature          # End-to-end journey scenarios
│   ├── steps/              # Step definitions (Cucumber hooks)
│   │   ├── login.js
│   │   ├── logout.js
│   │   ├── cart.js
│   │   ├── checkOut.js
│   │   └── inventory.js
│   ├── pages/              # Page Object Model classes
│   │   ├── loginpage.js
│   │   ├── logoutpage.js
│   │   ├── validateCartpage.js
│   │   ├── CheckoutPage.js
│   │   └── inventorypage.js
│   ├── fixtures.js         # Test fixtures (deprecated; hooks.js used instead)
│   └── support/
│       └── hooks.js        # Cucumber lifecycle hooks (BeforeAll, Before, After, AfterAll)
├── playwright-report/      # Generated reports and screenshots
│   ├── index.html
│   ├── cucumber-report.html
│   └── screenshots/        # Full-page screenshots per scenario
├── cucumber.json           # Cucumber configuration
├── playwright.config.js    # Playwright configuration
├── package.json
└── README.md               # This file
```

## 🚀 Installation

### Prerequisites
- Node.js 16+ and npm
- Git

### Setup Steps

```bash
# Clone the repository
git clone <repo-url>
cd SauceDemo

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium
```

### Dependencies

The project uses:
- **@cucumber/cucumber@^12.8.2** – BDD framework for scenario execution
- **@playwright/test@^1.59.1** – Browser automation library
- **playwright-bdd@^8.5.0** – Integration layer (for config generation)

## ▶️ Running Tests

### Run All Tests
```bash
npx cucumber-js
```

### Run Specific Tag
```bash
# Run only cart tests
npx cucumber-js --tags "@cart"

# Run only checkout tests
npx cucumber-js --tags "@checkout"

# Run only end-to-end scenarios
npx cucumber-js --tags "@e2e"

# Run multiple tags (AND logic)
npx cucumber-js --tags "@e2e and @checkout"

# Run multiple tags (OR logic)
npx cucumber-js --tags "@login or @cart"
```

### Run a Single Feature File
```bash
npx cucumber-js tests/features/cart.feature
```

### Run with Specific Formatter
```bash
# Generate detailed HTML report
npx cucumber-js --format html:cucumber-report.html

# Progress bar formatter (default)
npx cucumber-js --format progress-bar
```

## 📊 Test Artifacts & Reports

After running tests, reports are generated in `playwright-report/`:

- **`index.html`** – Playwright's default HTML report
- **`cucumber-report.html`** – Cucumber JSON report with formatted scenarios
- **`screenshots/`** – Full-page PNG screenshots for each scenario

### Viewing Reports

```bash
# Open Cucumber report in browser
start playwright-report/cucumber-report.html    # Windows
open playwright-report/cucumber-report.html     # macOS
xdg-open playwright-report/cucumber-report.html # Linux
```

Screenshots are automatically captured after each scenario and stored with descriptive names:
```
Checkout_completes_or_shows_validation_errors_1777615136176.png
Products_can_be_added_to_the_cart_and_counted_correctly_1777615128455.png
User_can_log_out_after_checkout_flow_1777615147352.png
```

## 🏗️ Architecture

### Hooks Lifecycle (`tests/support/hooks.js`)

```javascript
BeforeAll()   // Launch browser once for entire test suite
Before()      // Create fresh context & page for each scenario
After()       // Capture screenshot, close context
AfterAll()    // Close browser
```

### Page Object Model

Each page class encapsulates UI interactions:

```javascript
// Example: CartPage
class CartPage {
  constructor(page) { this.page = page; }
  async addProduct(productName) { /* locate & click */ }
  async getCartCount() { /* read badge text */ }
}
```

Step definitions use page objects to keep tests readable:

```javascript
When('I add {string} to the cart', async function (product) {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.addProduct(product);
});
```

### Scenario Outline (Data-Driven Testing)

Feature files use `Scenario Outline` with `Examples` tables:

```gherkin
Scenario Outline: Add products and validate cart count
  Given I am logged in as "<username>" with password "<password>"
  When I add "<product1>" to the cart
  Then the cart badge should show "<count>"

  Examples:
    | username       | password     | product1            | count |
    | standard_user  | secret_sauce | Sauce Labs Backpack | 1     |
```

## 📋 Available Scenarios

### Login (`@Login`)
Tests authentication with valid and invalid credentials.

### Logout (`@Logout`)
Tests logout flow after successful login.

### Cart (`@cart`)
Tests adding 1, 2, or 3 products and validates cart badge count.

### Inventory (`@inventory`)
Tests inventory page loading and sorting (A–Z, Z–A, price filters).

### Checkout (`@checkout`)
Tests checkout with happy-path and validation error cases (missing first name, last name, zip).

### End-to-End (`@e2e`)
Comprehensive journey combining login → inventory → cart → checkout → logout.

## 🛠️ Adding New Tests

### 1. Create a Feature File
```gherkin
Feature: New Feature
  @newtag
  Scenario: Test case description
    Given some precondition
    When I perform an action
    Then I verify the result
```

### 2. Add Step Definitions
```javascript
const { Given, When, Then } = require('@cucumber/cucumber');

Given('some precondition', async function () {
  // Implement step
});
```

### 3. Create Page Object (if needed)
```javascript
class MyPage {
  constructor(page) {
    this.page = page;
    this.element = page.locator('selector');
  }

  async myMethod() {
    // Implement action
  }
}
```

### 4. Run Tests
```bash
npx cucumber-js --tags "@newtag"
```

## 🐛 Troubleshooting

### Tests not running
- Verify `tests/features/` contains `.feature` files
- Check `cucumber.json` has correct `paths` and `require` entries
- Ensure all step definitions are in `tests/steps/`

### Screenshots not captured
- Verify `playwright-report/` directory exists (auto-created on first run)
- Check `tests/support/hooks.js` has `After` hook defined
- Ensure file system write permissions in the workspace

### Duplicate step definition error
- Check if step text exists in multiple files under `tests/steps/`
- Refactor duplicate steps into shared helper or rename one variant

### Playwright browser not launching
- Run `npx playwright install chromium`
- Check if port 9000+ is available for browser communication

## 📈 Metrics

Current test coverage:
- **13 scenarios** across all modules
- **127 steps** total
- ~35 seconds execution time (headless mode is faster)

## 🤝 Contributing

When adding new tests:
1. Use descriptive Gherkin syntax (readable by non-technical stakeholders)
2. Follow Page Object Model pattern
3. Keep step definitions DRY (Don't Repeat Yourself)
4. Add meaningful tags for filtering
5. Commit with clear messages

## 📝 Configuration Files

### `cucumber.json`
Configures feature paths, step definitions, and report formats:
```json
{
  "default": {
    "paths": ["tests/features/**/*.feature"],
    "require": ["tests/support/hooks.js", "tests/steps/**/*.js"],
    "format": ["progress-bar", "html:playwright-report/cucumber-report.html"]
  }
}
```

### `playwright.config.js`
Legacy config for Playwright-BDD integration (kept for reference).

## 🔗 Resources

- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [Playwright Documentation](https://playwright.dev/)
- [SauceDemo Application](https://www.saucedemo.com/)
- [Gherkin Syntax Guide](https://cucumber.io/docs/gherkin/)

## 📄 License

This project is for educational purposes as part of a QA automation portfolio.

---

**Last Updated:** May 1, 2026  
**Maintainer:** QA Automation Team
