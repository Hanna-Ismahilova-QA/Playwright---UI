import { Locator, Page } from "@playwright/test";

export default class ConstCheckoutCompleteLocators {
    readonly page: Page;
    readonly getOrderCreatedSuccessTextLocator: Locator;



    constructor(page: Page) {
        this.page = page;

        this.getOrderCreatedSuccessTextLocator = page
            .locator('[data-test="complete-header"]')

    }
}