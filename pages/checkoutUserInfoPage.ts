// pages/LoginPage.ts

import { Page } from '@playwright/test';
import ConstCheckoutInfoLocators from '../utils/constCheckoutInfoLocators';
import { BuyerInfoInterface } from './interfaces/checkoutUserInfoPageInterface';

export default class CheckoutInformationPage
    extends ConstCheckoutInfoLocators
    implements BuyerInfoInterface {
    // Define the selectors for elements on the login page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    // Interface fields - Assign Locators
    nameField = this.getCheckoutUserFirstNameFieldLocator;
    lastnameField = this.getCheckoutUserLasnameFieldLocator;
    postalCodeField = this.getCheckoutUserZipCodeFieldLocator;

    // Encapsulated buyer info method from interface
    async buyerInfo(name: string, lastname: string, postalCode: string): Promise<void> {
        await this.nameField.fill(name);
        await this.lastnameField.fill(lastname);
        await this.postalCodeField.fill(postalCode);
    }

    async checkoutTitle() {
        return this.getCheckoutTitleLocator;
    }

    async continueCheckout() {
        await this.getCheckoutInfoContinueButtonLocator.click();
    }
}
