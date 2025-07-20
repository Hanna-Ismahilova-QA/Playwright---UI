import { test, expect } from "@playwright/test";
import LoginPage from "../../../pages/loginPage";
import * as loginData from "../../../fixtures/loginUserData.json";
import * as usersData from "../../../fixtures/adminUsersData.json";
import AdminPage from "../../../pages/adminNavBarSection/adminPage";
import { UserManagementPage } from "../../../pages/adminNavBarSection/userManagementDropdownPage";
import UsersSubsectionPage from "../../../pages/adminNavBarSection/userManagementSubSections/usersSubsectionPage";

//maybe it is better to change here to beforeALL? check it
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  const useMngPage = new UserManagementPage(page);
  const usersPage = new UsersSubsectionPage(page);

  await page.goto(`${process.env.BASE_URL}`);
  await loginPage.loginUser(
    loginData.validUser.username,
    loginData.validUser.password
  );
  await adminPage.clickAdminSection();
  await useMngPage.clickUserMngDropdown();
  await usersPage.clickUsersSubsection();
  //add here method to add employee - it needs to be separate method to not duplicate and make it clear in pre-run
  //add here method to add a user - it needs to be separate method to not duplicate and make it clear in pre-run
});

test.describe("Search user by options", () => {
  test.skip("should allow users to search by username", async ({ page }) => {
    const usersPage = new UsersSubsectionPage(page);

    await usersPage.fillUsernameField(usersData.username);
    await usersPage.clickSearchButton();

    const usernameSearchResults =
      await usersPage.returnSearchResultUsernameAdminRow();
    await expect(usernameSearchResults).toBeVisible();
  });

  test("should allow users to filter by user role", async ({ page }) => {
    const usersPage = new UsersSubsectionPage(page);

    await usersPage.clickUserRoleDropdown();
    await usersPage.selectUserRoleEssOptin();
    await usersPage.clickSearchButton();

    const userRoleSearchResults =
      await usersPage.returnSearchResultUserRoleEssRow();
    await expect(userRoleSearchResults).toHaveText(/ESS/);
  });

  //skipping for now. add test case to Add a new employee to reuse it
  test.skip("should allow users to search by employee name", async ({ page }) => {
    const usersPage = new UsersSubsectionPage(page);

    await usersPage.fillEmployeeNameField(usersData.employee_name);
    await usersPage.selectEmployeeNameFromTheList();
    await usersPage.clickSearchButton();

    const userEmployeeNameResults =
      await usersPage.returnSearchResulrEmployeeNameRow();
    await expect(userEmployeeNameResults).toBeVisible();
  });

  test("should allow users to filter by status", async ({ page }) => {
    const usersPage = new UsersSubsectionPage(page);

    await usersPage.clickStatusDropdown();
    await usersPage.selectStatusEnabledOption();
    await usersPage.clickSearchButton();

    const userStatusResults = await usersPage.returnSearchResultsStatusRow();
    await expect(userStatusResults).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    //add here method to delete employee - it needs to be separate method to not duplicate and make it clear in after-run
   //add here method to delete user - it needs to be separate method to not duplicate and make it clear in after-run
  });
});