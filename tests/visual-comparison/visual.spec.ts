import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import * as userData from '../../fixtures/loginUserData.json';

test.describe('Visual Comparison', () => {
    //Test to be skipped because it will fail - dynamic content
    test.skip('should compare letcode page with dynamic content', async ({ page }) => {
        await page.goto("https://letcode.in");
    
        await expect(page).toHaveScreenshot("baselineLetcodeDynamicContent.png");

    });

    test('should compare homepage without dynamic content', async ({ page }) => {
        await page.goto("https://www.saucedemo.com");

        const loginPage = new LoginPage(page);

        await loginPage.loginUser(userData.validUser.username, userData.validUser.password);

        await expect(page).toHaveScreenshot("baselineSauceLabHomePage.png", {fullPage:true});

    });
});


