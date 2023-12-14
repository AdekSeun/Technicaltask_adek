const { expect } = require("@playwright/test");

class Productpage {

    constructor(page) {
        this.page = page;
        this.verifytext = page.locator(".header-headline__label");



    }


    async callProductpageByTitle(categoryName) {

        const productPageItem = await this.page.getByTitle(categoryName);
        await productPageItem.click();
    }
    async assertproductpageTitle(pageTitelText) {
        await expect(this.page).toHaveTitle(pageTitelText);

    }

    async verifyText(Text) {
        await this.verifytext.waitFor();
        await expect(this.verifytext).toContainText(Text)
    }
    async productScreenshot() {


    }


}
/*The assertions and methods created have been used for the sake of the task. 
Playwright provides additional methods that can be used for different scenarios, 
as well as more assertions. For more information, refer to https://playwright.dev/docs/intro.*/
module.exports = { Productpage };