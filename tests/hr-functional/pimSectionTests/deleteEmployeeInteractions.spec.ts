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

    //TBU
    
  });


  //TBU
  test("should allow user to add employee with all fields filled", async ({
    page,
  }) => {
    // Fill in first name, last name, employee ID, login details, etc.
  });

  test("should auto-generate employee ID if left blank", async ({ page }) => {
    // Leave Employee ID blank and check that a new ID is generated
  });

  test("should allow creation of login details when toggle is enabled", async ({
    page,
  }) => {
    // Enable the toggle and fill username, password
  });

  test("should preserve input data after validation error is fixed", async ({
    page,
  }) => {
    // Leave a required field empty, see error, then fix it without losing data
  });
  
  test.afterEach(async ({ page }) => {
    //add method to delete employee
  });
});

test.describe("Validation errors during employee creation", () => {
  test("should show error when first name is missing", async ({ page }) => {
    // Leave first name blank and try to save
  });

  test("should show error when last name is missing", async ({ page }) => {
    // Leave last name blank and try to save
  });

  test("should show error when employee ID is not unique", async ({ page }) => {
    // Use an existing employee ID
  });

  test("should validate password mismatch when creating login details", async ({
    page,
  }) => {
    // Enter different values in password and confirm password
  });

  test("should prevent user creation with empty login username", async ({
    page,
  }) => {
    // Enable login toggle but don’t fill username
  });

  test("should prevent form submission when all fields are empty", async ({
    page,
  }) => {
    // Click save without filling anything
  });
});
