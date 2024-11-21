import { Locator, Page } from "@playwright/test";

export default class ConstShoppingCartLocators {
    readonly page: Page;
    readonly getShoppingCartLinkLocator: Locator;
    readonly getSauceLabBackpackItemLocator: Locator;
    readonly getSauceLabOnesieItemLocator: Locator;
    readonly getCheckoutButtonLocator: Locator;
    readonly getContinueShoppingButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        this.getContinueShoppingButtonLocator = page
            .locator('[data-test="continue-shopping"]')

        this.getCheckoutButtonLocator = page
            .locator('[data-test="checkout"]')

        this.getShoppingCartLinkLocator = page
            .locator('[data-test="shopping-cart-link"]')

        this.getSauceLabBackpackItemLocator = page
            .locator('[data-test="item-4-title-link"]')

        this.getSauceLabOnesieItemLocator = page
            .locator('[data-test="item-2-title-link"]')

    }
}