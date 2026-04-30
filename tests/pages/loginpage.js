// class Login {
//     constructor(page) {
//         this.page = page;
//         this.usernameTF = page.locator('[id="user-name"]');
//         this.passwordTF = page.locator('[id="password"]');
//         this.submitBTN = page.locator('[id="login-button"]');
//         this.successMSG = page.locator('.app_logo');
//     }

//     async launchURL(url) {
//         await this.page.goto(url);
//     }

//     async enterUsername(username) {
//         await this.usernameTF.fill(username);
//     }
//     async enterPassword(password) {
//         await this.passwordTF.fill(password);
//     }

//     async clickSubmit() {
//         await this.submitBTN.click();
//     }
// }

// module.exports={Login}