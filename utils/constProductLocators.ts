import { Locator, Page } from "@playwright/test";

export default class ConstProductLocators {
    readonly page: Page;
    readonly getInventoryContainerLocator: Locator;
    readonly getAddToCartSauceLabBackpackLocator: Locator;
    readonly getRemoveSauceLabBackpackLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        this.getAddToCartSauceLabBackpackLocator = page
            .locator('[data-test="add-to-cart-sauce-labs-backpack"]')

        this.getInventoryContainerLocator = page
            .locator('[data-test="inventory-container"]');

        this.getRemoveSauceLabBackpackLocator = page
            .locator('[data-test="remove-sauce-labs-backpack"]')

    }
}

