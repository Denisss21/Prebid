const { test, expect } = require('@playwright/test');

test('Handle multi select dropdown', async ({page}) => {
   
    await page.selectOption('locator', ['value1', 'value2', 'value3'])

    //assertions
    //1)check number of options
    const options = await page.locator('locator options');
    await expect(options).toHaveCount(5);
})