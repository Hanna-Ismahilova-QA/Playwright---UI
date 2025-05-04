import path from "path";
import { Locator, Page } from "playwright";

export default class ConstUsersSubsectioLocators {
  readonly page: Page;
  readonly getUsersSubsectionLocator: Locator;
  readonly getSearchUsernameLocator: Locator;
  readonly getSearchButtonLocator: Locator;
  readonly getSearchResultUsernameAdminRowLocator: Locator;
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

  constructor(page: Page) {
    this.page = page;

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
