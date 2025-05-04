import { Page } from '@playwright/test';
import ConstProductLocators from '../utils/constProductLocators';

export default class DashboardPage extends ConstProductLocators {
    // Define the selectors for elements on the Dashboard page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async dashboardHeader() {
        return this.getDashboardHeaderLocator;
    }











    async addSauceLabBackpackProduct() {
        await this.getAddToCartSauceLabBackpackLocator.click();
    }

    async addSauceLabsOnesieProduct() {
        await this.getAddToCartSauceLabsOnesieLocator.click();
    }

}
