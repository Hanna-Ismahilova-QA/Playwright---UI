// pages/LoginPage.ts

import { Page } from '@playwright/test';
import ConstCheckoutInfoLocators from '../utils/constCheckoutInfoLocators';

export default class CheckoutInformationPage extends ConstCheckoutInfoLocators {
    // Define the selectors for elements on the login page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    async checkoutTitle() {
        return this.getCheckoutTitleLocator;
    }

    async enterBuyerInformation(name : string, lastName: string, zip: string){
        await this.getCheckoutUserFirstNameFieldLocator.fill(name);    
        await this.getCheckoutUserLasnameFieldLocator.fill(lastName);
        await this.getCheckoutUserZipCodeFieldLocator.fill(zip);
    }

    async continueCheckout(){
        await this.getCheckoutInfoContinueButtonLocator.click();
    }

    

}
