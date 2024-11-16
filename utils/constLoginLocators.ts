import { Locator, Page } from "@playwright/test";

export default class ConstLoginLocators {
    readonly page: Page;
    readonly getInventoryContainerLocator: Locator;
    readonly getUsernameLocator: Locator;
    readonly getPasswordLocator: Locator;
    readonly getLoginButtonLocator: Locator;
    readonly getInvalidCredentialsErrorLocator: Locator;
    readonly getRequiredUsernameOrPasswordErrorLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        this.getRequiredUsernameOrPasswordErrorLocator = page
            .locator('[data-test="error"]')

        this.getInvalidCredentialsErrorLocator = page
            .locator('[data-test="error"]');

        this.getInventoryContainerLocator = page
            .locator('[data-test="inventory-container"]');

        this.getUsernameLocator = page
            .locator('[data-test="username"]');

        this.getPasswordLocator = page
            .locator('[data-test="password"]');

        this.getLoginButtonLocator = page
            .locator('[data-test="login-button"]');
    }
}

