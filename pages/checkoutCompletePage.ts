// pages/LoginPage.ts

import { Page } from '@playwright/test';
import ConstCheckoutCompleteLocators from '../utils/constCheckoutCompleteLocators';

export default class CheckoutCompletePage extends ConstCheckoutCompleteLocators {
    // Define the selectors for elements on the login page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    async orderCreatedSuccessMessage() {
        return this.getOrderCreatedSuccessTextLocator;
    }
}
