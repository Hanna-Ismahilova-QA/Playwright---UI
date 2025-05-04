import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import * as userData from '../../fixtures/loginUserData.json';
import DashboardPage from '../../pages/dashboardPage';


test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);
});

test.describe('User Authentication', () => {
  test('should allow users to log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPagePage = new DashboardPage(page);

    await loginPage.loginUser(userData.validUser.username, userData.validUser.password);

    const dashboardHeaderLocator = await dashboardPagePage.dashboardHeader();
    await expect(dashboardHeaderLocator).toBeVisible();
  });
});

test.describe('User Authentication Validation', () => {
  test('should not allow users to log when username and password invalid', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginUser(userData.invalidUser.username, userData.invalidUser.password);

    const invalidLoginCredentialsError = await loginPage.invalidCredentialsValidation();
    await expect(invalidLoginCredentialsError).toHaveText(/Invalid credentials/);
  });

  test('should not allow users to log when username missing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginUser("", userData.validUser.password);

    const invalidUsernameError = await loginPage.requiredUsernameOrPasswordValidation();
    await expect(invalidUsernameError).toHaveText(/Required/);
  });

  test('should not allow users to log when password missing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginUser(userData.validUser.username, "");

    const invalidPasswordError = await loginPage.requiredUsernameOrPasswordValidation();
    await expect(invalidPasswordError).toHaveText(/Required/);
  });
});


