const { test, expect } = require('@playwright/test');

test('Assertions', async ({page}) => {
    expect(page).toHaveURL() //verify page url
    expect(page).toHaveTitle() // verify title
    expect(locator).toBeVisible() // element is visible
    expect(locator).toBeEnabled/Disabled // element is enabled/disabled
    expect(locator).toBeCheked() // radio/checkbox is cheked
    expect(locator).toHaveAttribute('type', 'submit') //element has attribute
    expect(lcoator).toHaveText() // element mathces text
    expect(locator).toContainText() //element contains text
    expect(locator).toHaveValue(value) //input has value
    expect(locator).toHaveCount() //length of elements
})

//diference between soft and hard assertions:
//soft - if assert is failed the test stopped and failed
//hard - if assert is failed the test keep running 

// Коли використовувати:
// Hard assertions найкраще використовувати в критичних перевірках, 
// де невиконання умови робить неможливим подальше виконання тесту.

// Soft assertions підходять для випадків, 
// коли ви хочете отримати звіт про кілька невідповідностей в одному тесті або перевіряєте менш критичні умови.

text('Soft assertions', async ({page}) => {
        //add to aseertions - soft
        await expect.soft(page).toHaveURL() //verify page url
        await expect.soft(page).toHaveTitle() // verify title
        await expect.soft(locator).toBeVisible() // element is visible
})