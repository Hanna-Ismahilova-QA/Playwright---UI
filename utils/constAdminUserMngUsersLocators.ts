import path from "path";
import { Locator, Page } from "playwright";

export default class ConstAdminUserMngUsersLocators {
  readonly page: Page;
  readonly getUserManagementLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getUserManagementLocator = page
      .getByLabel("Topbar Menu")
      .getByText("User Management");
  }
}
