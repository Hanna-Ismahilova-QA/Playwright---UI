import { test, expect, type Page } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import * as userData from '../fixtures/userData.json';
import ProductPage from '../pages/productPage';


test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);
});

test.describe('User Authentication', () => {
  test('should allow users to log in', async ({ page }) => {
    const loginPage = new LoginPage(page); 
    const productPage = new ProductPage(page);

    await loginPage.login(userData.validUser.username, userData.validUser.password)
    const inventoryContainerLocator = await productPage.inventoryContainer();
    await expect(inventoryContainerLocator).toBeVisible();
  });
});

test.describe('User Authentication Validation', () => {
  test('should not allow users to log when username and password invalid', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(userData.invalidUser.username, userData.invalidUser.password)
    const invalidLoginCredentialsError = await loginPage.invalidCredentialsValidation();
    await expect(invalidLoginCredentialsError).toHaveText(/Epic sadface: Username and password do not match any user in this service/);
  });

  test('should not allow users to log when username missing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login("", userData.validUser.password)
    const invalidUsernameError = await loginPage.requiredUsernameOrPasswordValidation();
    await expect(invalidUsernameError).toHaveText(/Epic sadface: Username is required/);  });

  test.only('should not allow users to log when password missing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(userData.validUser.username, "")
    const invalidPasswordError = await loginPage.requiredUsernameOrPasswordValidation();
    await expect(invalidPasswordError).toHaveText(/Epic sadface: Password is required/);
  });  
});


