import { test, expect } from "@playwright/test";
import LoginPage from "../../../pages/loginPage";
import * as loginData from "../../../fixtures/loginUserData.json";
import * as newUserData from "../../../fixtures/newUserData.json";
import AdminPage from "../../../pages/adminNavBarSection/adminPage";
import { UserManagementPage } from "../../../pages/adminNavBarSection/userManagementDropdownPage";
import UsersSubsectionPage from "../../../pages/adminNavBarSection/userManagementSubSections/usersSubsectionPage";
import PIMPage from "../../../pages/pimPage/pimPage";
import AddEmployeePage from "../../../pages/pimPage/addEmployeeTab/addEmployeePage";
import { DataGenerator } from "../../../utils/dataGenerator";
import * as newEmployeeData from "../../../fixtures/newEmployeeData.json";
import EmployeeListActionsPage from "../../../pages/pimPage/employeeListTab/employeeListActions";
import SystemUsersPage from "../../../pages/adminNavBarSection/systemUsersPage";

test.beforeEach(async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  const useMngPage = new UserManagementPage(page);
  const usersPage = new UsersSubsectionPage(page);
  const pimPage = new PIMPage(page);
  const addNewEmployee = new AddEmployeePage(page);

  await context.clearCookies();
  await page.goto(`${process.env.BASE_URL}`);
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await loginPage.loginUser(
    loginData.validUser.username,
    loginData.validUser.password
  );
  await pimPage.clickPIMsection();
  await pimPage.clickAddEmployeeButton();
  const generateId = DataGenerator.getRandomNumber(1000, 9999);
  await addNewEmployee.createNewEmployee(
    newEmployeeData.newValidEmployee.first_name,
    newEmployeeData.newValidEmployee.last_name,
    generateId
  );
  const newEmployeeSuccessNotif =
    await addNewEmployee.returnNewEmployeeCreationSuccessNotif();
  await expect(newEmployeeSuccessNotif).toBeVisible();

  await adminPage.clickAdminSection();
  await useMngPage.clickUserMngDropdown();
  await usersPage.clickUsersSubsection();
});

test.describe("New user addition", () => {
  test("should allow users to add a new user", async ({ page }) => {
    const usersPage = new UsersSubsectionPage(page);
    const addNewEmployee = new AddEmployeePage(page);

    await usersPage.clickAddNewUserButton();
    await usersPage.clickNewUserRoleDropdown();
    await usersPage.selectNewUserRoleAdminOptionFromDropdown();
    await usersPage.clickNewUserStatusDropdown();
    await usersPage.selectNewStatusEnabledOptionFromDropdown();
    await usersPage.selectNewEmployeeName(
      newUserData.newValidUser.employee_name
    );
    await usersPage.inputNewUniqueUsername(newUserData.newValidUser.username);
    await usersPage.inputNewUserPassword(newUserData.newValidUser.password);
    await usersPage.inputNewUserConfirmPassword(
      newUserData.newValidUser.confirm_password
    );

    //move to dedicated page, to make test more clean
    await Promise.all([
      page.waitForURL(
        "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
      ),
      await usersPage.clickSaveNewUserButton(),
    ]);
  });

  test.afterEach(async ({ page }) => {
    const employeeListActionsPage = new EmployeeListActionsPage(page);
    const systemUsersPage = new SystemUsersPage(page);

    await systemUsersPage.deleteUser(newUserData.newValidUser.username);

    await employeeListActionsPage.deleteEmployee(
      newEmployeeData.newValidEmployee.last_name
    );
  });
});
