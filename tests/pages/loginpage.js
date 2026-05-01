class Login {
    constructor(page) {
        this.page = page;
        this.usernameTF = page.locator('[id="user-name"]');
        this.passwordTF = page.locator('[id="password"]');
        this.submitBTN = page.locator('[id="login-button"]');
        this.successMSG = page.locator('.app_logo');
        this.errorMSG = page.locator('[data-test="error"]');
    }

    async launchURL(url) {
        await this.page.goto(url);
    }

    async enterUsername(username) {
        await this.usernameTF.fill(username);
    }
    async enterPassword(password) {
        await this.passwordTF.fill(password);
    }

    async clickSubmit() {
        await this.submitBTN.click();
        await this.page.waitForSelector('.app_logo, [data-test="error"]', {
            state: 'visible',
            timeout: 30000,
        });
    }

}

module.exports={Login}