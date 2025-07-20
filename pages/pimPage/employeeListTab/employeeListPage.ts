import { Page } from "playwright";
import ConstPIMEmployeeListLocators from "../../../utils/constPIMEmployeeListLocators";
import { expect } from "playwright/test";

export default class EmployeeListPage extends ConstPIMEmployeeListLocators {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async fillEmployeeNameField(last_name: string) {
    await this.getSearchEmployeeNameFieldLocator.fill(last_name);
  }
  async returnEmployeeDeletionSuccessNotif() {
    return this.getDeletedEmployeeSuccessNotificationLocator;
  }
}
