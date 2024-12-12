import { test, expect } from './accessability-fixtures';
import LoginPage from '../../pages/loginPage';
import * as userData from '../../fixtures/loginUserData.json';
import AxeBuilder from '@axe-core/playwright';



test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(`${process.env.BASE_URL}`);
  await loginPage.loginUser(userData.validUser.username, userData.validUser.password);

});

test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({accessabilityBuilder }) => {
    const axeBuilder = await accessabilityBuilder.analyze();

    expect(axeBuilder.violations).toEqual([]);
  });

  test.skip('should not have any automatically detectable accessibility issues with better debbuging', async ({ page }, testInfo) => {
    const axeBuilder = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag21a', 'wcag21aa', 'best-practices'])
      .analyze();

    //For better debugging
    await testInfo.attach("accessability-scan-results", {
      body: JSON.stringify(axeBuilder, null, 2),
      contentType: "application/json"
    });

    expect(axeBuilder.violations).toEqual([]);
  });
});



