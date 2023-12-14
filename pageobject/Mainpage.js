const { expect } = require("@playwright/test");

class Mainpage {

    constructor(page) {
        this.page = page;
        this.coookies = page.locator(".fx-space-left--xs");
        this.verifytext = page.locator("text=Our Categories");
    }

    async navigateToUrl(Url) {
        await this.page.goto(Url);
    }

    async acceptCookies() {
        await this.coookies.click();
    }

    async clickCategoryItem(categoryItemName) {
        console.log(this.verifytext);
        await this.verifytext.waitFor();
        const mainpageInstrument = await this.page.getByTitle(categoryItemName);
        await mainpageInstrument.click();
    }

    async verifyPageTitle(pageTitleText) {
        await expect(this.page).toHaveTitle(pageTitleText);
    }

}
/*The assertions and methods created have been used for the sake of the task. 
Playwright provides additional methods that can be used for different scenarios, 
as well as more assertions. For more information, refer to https://playwright.dev/docs/intro.*/
module.exports = { Mainpage };