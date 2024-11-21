import { Locator, Page } from "@playwright/test";

export default class ConstProductLocators {
    readonly page: Page;
    readonly getInventoryContainerLocator: Locator;
    readonly getAddToCartSauceLabBackpackLocator: Locator;
    readonly getAddToCartSauceLabsOnesieLocator: Locator;
    readonly getRemoveButtonSauceLabBackpackLocator: Locator;
    readonly getRemovButtonSauceLabOnesieLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        this.getAddToCartSauceLabsOnesieLocator = page
            .locator('[data-test="add-to-cart-sauce-labs-onesie"]')

        this.getAddToCartSauceLabBackpackLocator = page
            .locator('[data-test="add-to-cart-sauce-labs-backpack"]')

        this.getInventoryContainerLocator = page
            .locator('[data-test="inventory-container"]');

        this.getRemoveButtonSauceLabBackpackLocator = page
            .locator('[data-test="remove-sauce-labs-backpack"]')

        this.getRemovButtonSauceLabOnesieLocator = page
            .locator('[data-test="remove-sauce-labs-onesie"]')

    }
}

