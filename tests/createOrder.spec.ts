import { test, expect, type Page } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import * as userData from '../fixtures/loginUserData.json';
import * as buyerInfoData from '../fixtures/checkoutBuyerInfo.json';
import ProductPage from '../pages/productPage';
import ShoppingCartPage from '../pages/shoppingCartPage';
import CheckoutInformationPage from '../pages/checkoutUserInfoPage';
import CheckoutOverviewPage from '../pages/checkoutOverviewPage';
import CheckoutCompletePage from '../pages/checkoutCompletePage';
import CommonPage from '../pages/commonPage';


test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto(`${process.env.BASE_URL}`);
    await loginPage.loginUser(userData.validUser.username, userData.validUser.password);
});

test.describe('Create an order', () => {
    test('should allow users to create an order with one item', async ({ page }) => {
        const productPage = new ProductPage(page);
        const shoppingCartPage = new ShoppingCartPage(page);
        const checkoutUserInfoPage = new CheckoutInformationPage(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

        await productPage.addSauceLabBackpackProduct();
        await expect(productPage.getRemoveButtonSauceLabBackpackLocator).toBeVisible();

        await shoppingCartPage.shoppingCartLink();
        const sauceLabBackpackItem = await shoppingCartPage.sauceLabBackpackItem();
        await expect(sauceLabBackpackItem).toHaveText(/Sauce Labs Backpack/);

        await shoppingCartPage.checkout();
        const checkoutTitle = await checkoutUserInfoPage.checkoutTitle();
        await expect(checkoutTitle).toHaveText(/Checkout: Your Information/);

        await checkoutUserInfoPage.buyerInfo(buyerInfoData.buyerInfo.firstname, buyerInfoData.buyerInfo.lastname, buyerInfoData.buyerInfo.postalCode);
        await checkoutUserInfoPage.continueCheckout();
        await expect(checkoutOverviewPage.getCheckoutOverviewTitleLocator).toBeVisible();

        await checkoutOverviewPage.finishCheckout();
        const orderCreatedSuccess = await checkoutCompletePage.orderCreatedSuccessMessage();
        await expect(orderCreatedSuccess).toHaveText(/Thank you for your order!/);
    });

});

test('should allow users to create an order with multiple items', async ({ page }) => {
    const productPage = new ProductPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkoutUserInfoPage = new CheckoutInformationPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await productPage.addSauceLabBackpackProduct();//Product 1
    await expect(productPage.getRemoveButtonSauceLabBackpackLocator).toBeVisible();
    await productPage.addSauceLabsOnesieProduct();//Product 2
    await expect(productPage.getRemovButtonSauceLabOnesieLocator).toBeVisible();

    await shoppingCartPage.shoppingCartLink();

    const sauceLabBackpackItem = await shoppingCartPage.sauceLabBackpackItem();
    await expect(sauceLabBackpackItem).toHaveText(/Sauce Labs Backpack/);
    const sauceLabOnesieItem = await shoppingCartPage.sauceLabOnesieItem();
    await expect(sauceLabOnesieItem).toHaveText(/Sauce Labs Onesie/);

    await shoppingCartPage.checkout();
    const checkoutTitle = await checkoutUserInfoPage.checkoutTitle();
    await expect(checkoutTitle).toHaveText(/Checkout: Your Information/);

    await checkoutUserInfoPage.buyerInfo(buyerInfoData.buyerInfo.firstname, buyerInfoData.buyerInfo.lastname, buyerInfoData.buyerInfo.postalCode);
    await checkoutUserInfoPage.continueCheckout();
    await expect(checkoutOverviewPage.getCheckoutOverviewTitleLocator).toBeVisible();

    await checkoutOverviewPage.finishCheckout();
    const orderCreatedSuccess = await checkoutCompletePage.orderCreatedSuccessMessage();
    await expect(orderCreatedSuccess).toHaveText(/Thank you for your order!/);
});

test.describe('Interactions with an Order', () => {
    test('should allow users to remove an order on product page from basket', async ({ page }) => {
        const productPage = new ProductPage(page);
        const shoppingCartPage = new ShoppingCartPage(page);
        const commonPage = new CommonPage(page);

        await productPage.addSauceLabBackpackProduct();
        await expect(productPage.getRemoveButtonSauceLabBackpackLocator).toBeVisible();

        await shoppingCartPage.shoppingCartLink();

        const sauceLabBackpackItem = await shoppingCartPage.sauceLabBackpackItem();
        await expect(sauceLabBackpackItem).toHaveText(/Sauce Labs Backpack/);

        await shoppingCartPage.continueShopping();
        await commonPage.removeSauceLabBackpackProduct();
        await expect(productPage.getAddToCartSauceLabBackpackLocator).toBeVisible();

        await shoppingCartPage.shoppingCartLink();
        await expect(sauceLabBackpackItem).toBeHidden();
    });

    test('should allow users to remove an order from basket', async ({ page }) => {
        const productPage = new ProductPage(page);
        const shoppingCartPage = new ShoppingCartPage(page);
        const commonPage = new CommonPage(page);

        await productPage.addSauceLabBackpackProduct();
        await expect(productPage.getRemoveButtonSauceLabBackpackLocator).toBeVisible();

        await shoppingCartPage.shoppingCartLink();

        const sauceLabBackpackItem = await shoppingCartPage.sauceLabBackpackItem();
        await expect(sauceLabBackpackItem).toHaveText(/Sauce Labs Backpack/);

        await commonPage.removeSauceLabBackpackProduct();
        await expect(sauceLabBackpackItem).toBeHidden();
    });
});


