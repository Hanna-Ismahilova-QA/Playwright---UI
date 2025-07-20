import { test } from "@playwright/test";
import LoginPage from "../../../pages/loginPage";
import * as loginData from "../../../fixtures/loginUserData.json";
import PIMPage from "../../../pages/pimPage/pimPage";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PIMPage(page);

  await page.goto(`${process.env.BASE_URL}`);
  await loginPage.loginUser(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await pimPage.clickPIMsection();
  await pimPage.clickAddEmployeeButton();
});

test.describe("Successful employee deletion", () => {
  test.skip("should allow user to delete employee", async ({
    page,
  }) => {
    
    
  });

});
