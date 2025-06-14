import { test, expect } from "@playwright/test";
import LoginPage from "../../../pages/loginPage";
import * as loginData from "../../../fixtures/loginUserData.json";
import * as usersData from "../../../fixtures/adminUsersData.json";
import * as newUserData from "../../../fixtures/newUserData.json";
import AdminPage from "../../../pages/adminNavBarSection/adminPage";
import { UserManagementPage } from "../../../pages/adminNavBarSection/userManagementDropdownPage";
import UsersSubsectionPage from "../../../pages/adminNavBarSection/userManagementSubSections/usersSubsectionPage";

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
});

test.describe("Search user by options", () => {
  test("should allow users to search by username", async ({ page }) => {
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

  test("should allow users to search by employee name", async ({ page }) => {
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
});

test.describe("New user addition", () => {
  test.skip("should allow users to add a new user", async ({ page }) => {
    const usersPage = new UsersSubsectionPage(page);

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

    await usersPage.fillUsernameField(newUserData.newValidUser.username);
    await usersPage.clickSearchButton();

    await usersPage.tickOnUserSuperHeroRow();
    await usersPage.clickDeleteSelectedCheckboxButton();
    await usersPage.clickYesDeleteButton();
    //add assertion
  });
});
