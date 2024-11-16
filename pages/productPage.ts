// pages/LoginPage.ts

import { Page } from '@playwright/test';
import ConstProductLocators from '../utils/constProductLocators';

export default class ProductPage extends ConstProductLocators {
    // Define the selectors for elements on the login page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async inventoryContainer() {
        return this.getInventoryContainerLocator;
    }

    async addSauceLabBackpackProduct(){
        await this.getAddToCartSauceLabBackpackLocator.click();
    }

    async removeSauceLabBackpackProduct(){
        await this.getRemoveSauceLabBackpackLocator.click();
    }
}
