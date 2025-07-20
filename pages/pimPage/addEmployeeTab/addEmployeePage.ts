import { Page } from "playwright";
import ConstPIMAddEmployeeLocators from "../../../utils/constPIMAddEmployeeLocators";
import { expect } from "playwright/test";

export default class AddEmployeePage extends ConstPIMAddEmployeeLocators {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async createNewEmployee(
    firstname: string,
    lastname: string,
    employeeId: number,
    username?: string,
    password?: string,
    confirmPassword?: string
  ) {
    await this.getEmployeeFirstNameLocator.fill(firstname);
    await this.getEmployeeLastnameLocator.fill(lastname);
    await this.getEmployeeIdLocator.clear();
    await this.getEmployeeIdLocator.fill(employeeId.toString());
    await this.clickSaveNewEmployeeButton();

    const succesEmplNotif = await this.returnNewEmployeeCreationSuccessNotif();
    await expect(succesEmplNotif).toBeVisible();
  }

  async clickSaveNewEmployeeButton() {
    await this.getSaveNewEmployeeButtonLocator.click();
  }

  async returnNewEmployeeCreationSuccessNotif() {
    return this.getCreateNewEmployeeSuccessNotificationLocator;
  }

  async toggleCreateLoginDetails() {
    await this.getToggleCreateLoginDetailsLocator.click();
  }
}
