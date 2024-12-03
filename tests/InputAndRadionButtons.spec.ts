const { test, expect } = require('@playwright/test');

test('Input box', async ({page}) => {
   //input
    await expect(await page.locator('input')).toBeVisible();//input is visible
    await expect(await page.locator('input')).toBeEmpty();//input is empty

    await page.waitForTimeout(500);//timeout

    await page.locator('input').fill('John');
    await page.fil('input', 'value');

    //radioButtons
    await page.locator('radio-button').check();//variant 1
    await page.check('locator');// variant 2

    await expect(await page.locator('radio')).toBeCheked();
    await expect(await page.locator('radio').isCheked()).toBeTruthy(); //is cheked return true/false, toBeTrythy check if true

    await expect(await page.locator('radio').isCheked()).toBeFalsy(); //is cheked return true/false, toBeFalsy is not cheked
})