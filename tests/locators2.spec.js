const { test, expect } = require('@playwright/test');

test('Locators in Playwright part2', async ({page}) => {
    await page.getByAltText() - //to locate element, usually image by alt text
    await page.getByPlaceholder() // to locate an input by placeholder
    await page.getByRole('button', {type: 'submit'} ) //to locate by explicit and implicit accessebility attributes
    await page.getByText() //to locate element by text content

    await page.getByLabel() //to locate a form control by label's text
    await page.getByTitle() // to locate an element by its title atribute
    await page.getByTestId() // to locate element by customed by dev data-test-id
})