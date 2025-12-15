import {test, expect, Locator} from "@playwright/test"

test("Verify Playwright locators",async ({page})=>{

await page.goto("https://demo.nopcommerce.com/");
const logo:Locator = page.getByAltText("nopCommerce demo store"); //returning logo
await expect(logo).toBeVisible(); //passing here to verify its visible/not

await expect(page.getByText("Welcome to our store")).toBeVisible();

await page.getByRole("link",{name:'Register'}).click();
await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();

await page.getByLabel('Firstname:').fill("John");
await page.getByLabel('Last name:').fill("Benedics");
await page.getByLabel('Email:').fill("john.benedics@cts.com");

})

