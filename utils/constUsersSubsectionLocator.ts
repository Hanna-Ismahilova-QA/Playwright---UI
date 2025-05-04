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

  constructor(page: Page) {
    this.page = page;

    this.getSearchEmployeeNameLocator =
      page.getByPlaceholder("Type for hints...");

    this.getUsersSubsectionLocator = page
      .locator("li")
      .filter({ hasText: /^Users$/ });

    this.getSearchUsernameLocator = page.getByRole("textbox").nth(1);

    this.getSearchButtonLocator = page.getByRole("button", { name: "Search" });

    this.getSearchResultUsernameAdminRowLocator = page.getByRole("row", {
      name: " Admin Admin Anush Amirkh",
    });

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
