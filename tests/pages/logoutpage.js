class Logout {
    constructor(page) {
        this.page = page;
        this.menuBTN = page.locator('#react-burger-menu-btn');
        this.logoutBTN = page.locator('#logout_sidebar_link');
        this.loginLogo = page.locator('.login_logo');
    }

    async clickMenu() {
        await this.menuBTN.click();
    }

    async clickLogout() {
        await this.logoutBTN.click();
    }
}

module.exports = { Logout };