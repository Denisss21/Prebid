const { test, expect } = require('@playwright/test');

test('handle drop down', async ({page}) => {

    //multiply way to select option from dropdown
    await page.locator('locator').selectOption({label: 'India'})//variant 1 - by label
    await page.locator('locator').selectOption('India')//variant 2 - by option
    await page.locator('locator').selectOption({value: 'India'})//variant 3 - by value
    await page.locator('locator').selectOption({index: 3})//variant 4 - by index
    await pageselectOption('locator', 'value')//variant 5 - by text

    //Assertions
    //1) check number of option in drop down
    const options = await page.locator('dropdowm option');
    await expect(options).toHaveCount(10);

    //2) check number of option in drop down
   const option =  await page.$$('locator option') //$$-save all options as array
   await expect(option.length).toBe(10);

   //3) check if value exist in drop down
  const content =  await page.locator('locator-dropdown').textContent() // get all text(options) from drop down
  await expect(content.includes('India')).toBeTruthy();


})
