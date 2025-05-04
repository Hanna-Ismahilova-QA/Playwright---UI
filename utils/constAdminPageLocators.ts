import { Locator, Page } from "playwright";

export default class ConstAdminPageLocators {
  readonly page: Page;
  readonly getAdminSectionLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getAdminSectionLocator = page.getByRole("link", { name: "Admin" });
  }
}
