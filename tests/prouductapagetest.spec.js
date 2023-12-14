import { test } from "@playwright/test";
import { expect } from "@playwright/test";
const { Allpagemanager } = require('../pageobject/Allpagemanager');

//calls the data from the Testutils 
const dataset = JSON.parse(JSON.stringify(require("../Testutils/productdata.json")));

for (const data of dataset) {
  test(`selectProduct ${data.productpage}`, async ({ page }, testInfo) => {
    //Landing on welcome page
    const allpagemanager = new Allpagemanager(page);
    const mainpage = allpagemanager.getMainpage();
    await mainpage.navigateToUrl(data.Url);
    await mainpage.acceptCookies();
    await mainpage.verifyPageTitle(data.mainpageTitle);
    await mainpage.clickCategoryItem(data.mainpageCategoryitem);
   
    //navigate to the Categorypage
    const categorypage = allpagemanager.getCategorypage();
    await categorypage.verifyPageTitle(data.categorypageTitle);
    await categorypage.clickCategoryItem(data.categorypageitem)
   
    //subcategorypage
    const subcategorypage = allpagemanager.getSubcategorypage();
    await subcategorypage.verifyPageTitle(data.subcategorypageTitle)
    await subcategorypage.clicksubCategoryInstrument(data.subcategorypage);
    
    //verify landing on productpage and caprture screenshot
    const productpage = allpagemanager.getProductpage();
    await productpage.assertproductpageTitle(data.productpageTitle);
    await productpage.verifyText(data.productpage);
    await page.screenshot({ path: 'tests/screenshots ' + Date.now() + 'productpage.png' });
    await testInfo.attach("productpage", {
      body: await page.screenshot(),
      contentType: "image/png"
    })

  });

}





