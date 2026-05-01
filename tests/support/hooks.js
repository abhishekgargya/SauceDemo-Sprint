
const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const fs = require('fs').promises;
const path = require('path');

let browser;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

// After each scenario: take a screenshot, attach to Cucumber report and save file
After(async function (scenario) {
  try {
    if (this.page) {
      const screenshotBuffer = await this.page.screenshot({ fullPage: true });
      // attach to Cucumber report (embedded)
      if (this.attach) {
        await this.attach(screenshotBuffer, 'image/png');
      }

      // Save screenshot to disk for external HTML report viewers
      const tags = (scenario.pickle && scenario.pickle.tags) ? scenario.pickle.tags.map(t => t.name) : [];
      const screenshotDir = path.join(process.cwd(), 'playwright-report', 'screenshots');
      await fs.mkdir(screenshotDir, { recursive: true });
      const safeName = (scenario.pickle && scenario.pickle.name)
        ? scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').slice(0, 120)
        : `scenario_${Date.now()}`;
      const fileName = `${safeName}_${Date.now()}.png`;
      await fs.writeFile(path.join(screenshotDir, fileName), screenshotBuffer);
    }
  } catch (err) {
    // don't fail the test because of reporting steps
  
    console.error('Failed to capture/attach screenshot:', err);
  }

  if (this.context) {
    await this.context.close();
  }
});

AfterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

