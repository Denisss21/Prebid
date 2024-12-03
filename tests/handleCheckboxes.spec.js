const { test, expect } = require('@playwright/test');

test('Checkboxes', async ({page}) => {
    
    //single checkbox
    await page.locator('locator and @type="checkbox"').check();
    await page.check('locator and @type="checkbox"');

    //multiply checkboxes
    const checkboxes = [
        'locator1 and @type="checkbox"',
        'locator2 and @type="checkbox"',
        'locator3 and @type="checkbox"'
    ]

    for (const locator of checkboxes) {
        await page.locator(locator).check()
    }

    for (const locator of checkboxes) { //unselect already checked checkboxes
        if(await page.locator(locator).isCheked){
            await page.locator(locator).check()
        }
    }
})
