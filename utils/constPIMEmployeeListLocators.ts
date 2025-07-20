import { Locator, Page } from "playwright";

export default class ConstPIMEmployeeListLocators {
  readonly page: Page;
  readonly getSearchEmployeeNameFieldLocator: Locator;
  readonly getDeletedEmployeeSuccessNotificationLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getSearchEmployeeNameFieldLocator = page
      .getByPlaceholder("Type for hints...")
      .first();
    this.getDeletedEmployeeSuccessNotificationLocator = page.getByText(
      "SuccessSuccessfully Deleted"
    );
  }
}
