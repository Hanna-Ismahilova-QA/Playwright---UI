import { Locator, Page } from "playwright";

export default class ConstPIMAddEmployeeLocators {
  readonly page: Page;
  readonly getEmployeeFirstNameLocator: Locator;
  readonly getEmployeeLastnameLocator: Locator;
  readonly getEmployeeIdLocator: Locator;
  readonly getCreateLoginDetailsToggleLocator: Locator;
  readonly getEmployeeUsernameLocator: Locator;
  readonly getEmployeePasswordLocator: Locator;
  readonly getEmployeeConfirmPasswordLocator: Locator;
  readonly getSaveNewEmployeeButtonLocator: Locator;
  readonly getCreateNewEmployeeSuccessNotificationLocator: Locator;
  readonly getToggleCreateLoginDetailsLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getEmployeeFirstNameLocator = page.getByPlaceholder("First Name");
    this.getEmployeeLastnameLocator = page.getByPlaceholder("Last Name");
    this.getEmployeeIdLocator = page
      .locator("form")
      .getByRole("textbox")
      .nth(4);
    this.getCreateLoginDetailsToggleLocator = page
      .locator("div")
      .filter({ hasText: /^Create Login Details$/ })
      .locator("label"); //locator('form span')
    this.getEmployeeUsernameLocator = page.locator(
      "div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input"
    );
    this.getEmployeePasswordLocator = page
      .locator('input[type="password"]')
      .first();
    this.getEmployeeConfirmPasswordLocator = page
      .locator('input[type="password"]')
      .nth(1);
    this.getSaveNewEmployeeButtonLocator = page.getByRole("button", {
      name: "Save",
    });
    this.getToggleCreateLoginDetailsLocator = page.locator('form span');
    this.getCreateNewEmployeeSuccessNotificationLocator = page.getByText(
      "SuccessSuccessfully Saved×"
    );
  }
}
