import { expect, test } from "@playwright/test";
import LoginPage from "../../../pages/loginPage";
import * as loginData from "../../../fixtures/loginUserData.json";
import * as newEmployeeData from "../../../fixtures/newEmployeeData.json";
import PIMPage from "../../../pages/pimPage/pimPage";
import AddEmployeePage from "../../../pages/pimPage/addEmployeeTab/addEmployeePage";
import { DataGenerator } from "../../../utils/dataGenerator";
import EmployeeListActionsPage from "../../../pages/pimPage/employeeListTab/employeeListActions";

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

test.describe.skip("Successful employee creation", () => {
  test("should allow user to add employee with mandatory fields only", async ({
    page,
  }) => {
    const addNewEmployee = new AddEmployeePage(page);

    const generateId = DataGenerator.getRandomNumber(1000, 9999);
    await addNewEmployee.createNewEmployee(
      newEmployeeData.newValidEmployee.first_name,
      newEmployeeData.newValidEmployee.last_name,
      generateId
    );

    const newEmployeeSuccessNotif =
      await addNewEmployee.returnNewEmployeeCreationSuccessNotif();
    await expect(newEmployeeSuccessNotif).toBeVisible();
  });

  test.skip("should allow user to add employee with all fields filled", async ({
    page,
  }) => {
    // Fill in first name, last name, employee ID, login details, etc.
  });

  test.skip("should auto-generate employee ID if left blank", async ({ page }) => {
    // Leave Employee ID blank and check that a new ID is generated
  });

  test.skip("should allow creation of login details when toggle is enabled", async ({
    page,
  }) => {
    // Enable the toggle and fill username, password
  });

  test.skip("should preserve input data after validation error is fixed", async ({
    page,
  }) => {
    // Leave a required field empty, see error, then fix it without losing data
  });

  test.afterEach(async ({ page }) => {
    const employeeListActionsPage = new EmployeeListActionsPage(page);

    await employeeListActionsPage.deleteEmployee(
      newEmployeeData.newValidEmployee.last_name
    );
  });
});

test.describe.skip("Validation errors during employee creation", () => {
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
