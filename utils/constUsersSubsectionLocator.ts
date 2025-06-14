import path from "path";
import { Locator, Page } from "playwright";

export default class ConstUsersSubsectioLocators {
  readonly page: Page;
  readonly getUsersSubsectionLocator: Locator;
  readonly getSearchUsernameLocator: Locator;
  readonly getSearchButtonLocator: Locator;
  readonly getSearchResultUsernameAdminRowLocator: Locator;
  readonly getSearchResultUsernameSuperHeroRowLocator: Locator;
  readonly getUserRoleDropdownLocator: Locator;
  readonly getUserRoleDropdownEssOptionLocator: Locator;
  readonly getSearchResultUserRoleEssRowLocator: Locator;
  readonly getSearchResulsCountLocator: Locator;
  readonly getSearchEmployeeNameLocator: Locator;
  readonly getEmployeeNameSearchResultLocator: Locator;
  readonly getEmployeeNameRowLocator: Locator;
  readonly getSearchResultStatusRowLocator: Locator;
  readonly getSearchStatusLocator: Locator;
  readonly getStatusDropdownEnabledOptionLocator: Locator;
  readonly getAddNewUserButtonLocator: Locator;
  readonly getNewUserRoleDropdownLocator: Locator;
  readonly getNewUserRoleAdminOptionLocator: Locator;
  readonly getNewEmployeeNameFieldLocator: Locator;
  readonly getNewEmployeeNameOptionLocator: Locator;
  readonly getNewUserStatusDropdownLocator: Locator;
  readonly getNewUserStatusEnabledOptionLocator: Locator;
  readonly getNewUserUsernameFieldLocator: Locator;
  readonly getNewUserPasswordFieldLocator: Locator;
  readonly getNewUserConfirmPasswordLocator: Locator;
  readonly getNewUserSaveButtonLocator: Locator;
  readonly getDeleteButtonLocator: Locator;
  readonly getConfirmDeletionButtonLocator: Locator;
  readonly getSuperHeroCheckboxLocator: Locator;
  readonly getDeleteSelectedButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getDeleteSelectedButtonLocator = page.getByRole('button', { name: ' Delete Selected' });

    this.getSuperHeroCheckboxLocator = page.getByRole('columnheader', { name: '' }).locator('i');

    this.getConfirmDeletionButtonLocator = page.getByRole("button", {
      name: " Yes, Delete",
    });

    this.getDeleteButtonLocator = page.getByRole("button", { name: "" });

    this.getNewUserSaveButtonLocator = page.getByRole("button", {
      name: "Save",
    });

    this.getNewUserConfirmPasswordLocator = page.getByRole("textbox").nth(4);

    this.getNewUserPasswordFieldLocator = page.getByRole("textbox").nth(3);

    this.getNewUserUsernameFieldLocator = page.getByRole("textbox").nth(2);

    this.getNewUserStatusEnabledOptionLocator = page.getByRole("option", {
      name: "Enabled",
    });

    this.getNewUserStatusDropdownLocator = page
      .locator("div")
      .filter({ hasText: /^-- Select --$/ })
      .nth(2);

    this.getNewEmployeeNameOptionLocator = page.getByRole("option", {
      name: "Emily Jones",
    });

    this.getNewEmployeeNameFieldLocator =
      page.getByPlaceholder("Type for hints...");

    this.getNewUserRoleAdminOptionLocator = page
      .getByRole("option", { name: "Admin" })
      .locator("span");

    this.getNewUserRoleDropdownLocator = page
      .locator(".oxd-select-text")
      .first();

    this.getAddNewUserButtonLocator = page.getByRole("button", { name: "Add" });

    this.getSearchResultStatusRowLocator = page
      .locator(".oxd-table-card > .oxd-table-row > div:nth-child(5) > div")
      .first();

    this.getSearchStatusLocator = page.locator(
      "div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    );

    this.getStatusDropdownEnabledOptionLocator = page
      .getByRole("option", { name: "Enabled" })
      .locator("span");
    this.getSearchEmployeeNameLocator =
      page.getByPlaceholder("Type for hints...");

    this.getUsersSubsectionLocator = page
      .locator("li")
      .filter({ hasText: /^Users$/ });

    this.getSearchUsernameLocator = page.getByRole("textbox").nth(1);

    this.getSearchButtonLocator = page.getByRole("button", { name: "Search" });

    this.getSearchResultUsernameAdminRowLocator = page
      .getByRole("cell", { name: "Admin" })
      .first();

    this.getSearchResultUsernameSuperHeroRowLocator =
      page.getByText("Super Hero");

    this.getSearchResultUserRoleEssRowLocator = page.getByRole("row", {
      name: " FMLName1 ESS FName LName",
    });

    this.getSearchResulsCountLocator = page.getByText("(6) Records Found");

    this.getUserRoleDropdownLocator = page.locator(".oxd-select-text").first();

    this.getUserRoleDropdownEssOptionLocator = page.getByRole("option", {
      name: "ESS",
    });

    this.getEmployeeNameRowLocator = page.getByRole("row", {
      name: " Jobinsam@6742 ESS Jobin Sam",
    });

    this.getEmployeeNameSearchResultLocator =
      page.getByText("Jobin Mathew Sam");
  }
}
