const { test, expect } = require('@playwright/test');

test('Locators in Playwright', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');

    await page.click('#login2')
    //await page.locator('#loginusername').click()

    await page.locator('#loginusername').fill('pavanol')
    //await page.fill('#loginusername', 'pavan');
    //await page.type('#loginusername', 'pavan');

    await page.locator('#loginpassword').fill('test@123')

    //await page.click('.btn btn-primary');
    await page.getByRole('button', { name: 'Log in' }).click()

    const logoutButton = await page.locator('#logout2');

    await expect(logoutButton).toBeVisible();

    await page.close();
})