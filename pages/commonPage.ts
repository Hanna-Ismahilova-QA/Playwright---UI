// pages/LoginPage.ts

import { Page } from '@playwright/test';
import ConstCommonLocators from '../utils/constCommonLocators';

export default class CommonPage extends ConstCommonLocators {
    // Define the selectors for elements on the login page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    // Define methods for actions on the login page
    async navigateToLogin(url: string) {
        await this.page.goto(url);
    }

    async removeSauceLabBackpackProduct() {
        await this.getRemoveButtonSauceLabBackpackLocator.click();
    }

    async removeSauceLabsOnesieProduct() {
        await this.getRemovButtonSauceLabOnesieLocator.click();
    }
}
