import { Locator, Page } from "@playwright/test";

export default class ConstCheckoutInfoLocators {
    readonly page: Page;
    readonly getCheckoutTitleLocator: Locator;
    readonly getCheckoutUserFirstNameFieldLocator: Locator;
    readonly getCheckoutUserLasnameFieldLocator: Locator;
    readonly getCheckoutUserZipCodeFieldLocator: Locator;
    readonly getCheckoutInfoContinueButtonLocator: Locator


    constructor(page: Page) {
        this.page = page;

        this.getCheckoutTitleLocator = page
            .locator('[data-test="title"]')

        this.getCheckoutUserFirstNameFieldLocator = page
            .locator('[data-test="firstName"]')

        this.getCheckoutUserLasnameFieldLocator = page
            .locator('[data-test="lastName"]')

        this.getCheckoutUserZipCodeFieldLocator = page
            .locator('[data-test="postalCode"]')

        this.getCheckoutInfoContinueButtonLocator = page
            .locator('[data-test="continue"]')

    }
}