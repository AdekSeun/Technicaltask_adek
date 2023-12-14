const { expect } = require("@playwright/test");

class Subcategorypage {

    constructor(page) {
        this.page = page;
    }

    async clicksubCategoryInstrument(categoryItemName) {
        const subCategoryInstrument = await this.page.getByTitle(categoryItemName);
        await subCategoryInstrument.click();
    }
    async verifyPageTitle(pageTitleText) {
        await expect(this.page).toHaveTitle(pageTitleText);
    }

}
/*The assertions and methods created have been used for the sake of the task. 
Playwright provides additional methods that can be used for different scenarios, 
as well as more assertions. For more information, refer to https://playwright.dev/docs/intro.*/
module.exports = { Subcategorypage };