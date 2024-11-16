import { Locator, Page } from "@playwright/test";

export default class ConstCheckoutOverviewLocators {
    readonly page: Page;
    readonly getCheckoutOverviewTitleLocator: Locator;
    readonly getFinishButtonLocator: Locator;


    constructor(page: Page) {
        this.page = page;

        this.getCheckoutOverviewTitleLocator = page
            .locator('[data-test="title"]')

        this.getFinishButtonLocator = page
            .locator('[data-test="finish"]')
    }
}