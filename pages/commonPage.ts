// pages/LoginPage.ts

import { Page } from '@playwright/test';

export default class CommonPage {
    // Define the selectors for elements on the login page
    private page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        this.page = page;
    }

    // Define methods for actions on the login page
    async navigateToLogin(url: string) {
        await this.page.goto(url);
    }
}
