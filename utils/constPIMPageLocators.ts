import { Locator, Page } from "playwright";

export default class ConstPIMPageLocators {
  readonly page: Page;
  readonly getAddEmployeeButtonLocator: Locator;
  readonly getPIMSectionLinkLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getAddEmployeeButtonLocator = page.getByRole("link", {
      name: "Add Employee",
    });
    this.getPIMSectionLinkLocator = page.getByRole("link", { name: "PIM" });
  }
}
