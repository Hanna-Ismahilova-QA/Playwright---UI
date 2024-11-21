import { Locator, Page } from "@playwright/test";

export default class ConstCommonLocators {
    readonly page: Page;
    readonly getRemoveButtonSauceLabBackpackLocator: Locator;
    readonly getRemovButtonSauceLabOnesieLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        this.getRemoveButtonSauceLabBackpackLocator = page
            .locator('[data-test="remove-sauce-labs-backpack"]')

        this.getRemovButtonSauceLabOnesieLocator = page
            .locator('[data-test="remove-sauce-labs-onesie"]')

    }
}

