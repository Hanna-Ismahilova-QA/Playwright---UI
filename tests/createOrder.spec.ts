import { test, expect, type Page } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import * as userData from '../fixtures/userData.json';
import ProductPage from '../pages/productPage';


test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto(`${process.env.BASE_URL}`);
    await loginPage.login(userData.validUser.username, userData.validUser.password)
});

test.describe('Create an order', () => {
    test('should allow users to create an order with one item', async ({ page }) => {
     
    });

    test('should allow users to create an order with multiple items', async ({ page }) => {
      
    });
});

test.describe('Interactions with an Order', () => {
    test('should allow users to remove an order from basket', async ({ page }) => {
        
    });


});


