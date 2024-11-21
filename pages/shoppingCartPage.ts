// pages/LoginPage.ts

import { Page } from '@playwright/test';
import ConstShoppingCartLocators from '../utils/constShoppingCartLocators';

export default class ShoppingCartPage extends ConstShoppingCartLocators {
    // Define the selectors for elements on the login page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async shoppingCartLink() {
        await this.getShoppingCartLinkLocator.click();
    }

    async checkout() {
        await this.getCheckoutButtonLocator.click();
    }

    async sauceLabBackpackItem() {
        return this.getSauceLabBackpackItemLocator;
    }

    async sauceLabOnesieItem(){
        return this.getSauceLabOnesieItemLocator;
    }
}
