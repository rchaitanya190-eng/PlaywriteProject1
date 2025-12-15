


import{test,expect,Locator} from "@playwright/test"


test("Verify CSS Locators",async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

   // await expect(page.locator("input#small-searchterms")).toBeVisible(); //checking there or not
    await page.locator("input#small-searchterms").fill("T-Shirts");
    await page.locator("#small-searchterms").fill("T-Shirts");





    await page.waitForTimeout(5000); 

})

