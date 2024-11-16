// pages/LoginPage.ts

import { Page } from '@playwright/test';
import ConstCheckoutOverviewLocators from '../utils/constCheckoutOverviewLocators';

export default class CheckoutOverviewPage extends ConstCheckoutOverviewLocators {
    // Define the selectors for elements on the login page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    async checkoutTitle() {
        return this.getCheckoutOverviewTitleLocator;
    }

    async finishCheckout(){
        await this.getFinishButtonLocator.click();
    }
}
