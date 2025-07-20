import { Page } from "playwright";
import ConstPIMEmployeeListLocators from "../../../utils/constPIMEmployeeListLocators";
import { expect } from "playwright/test";
import UsersSubsectionPage from "../../adminNavBarSection/userManagementSubSections/usersSubsectionPage";
import PIMPage from "../pimPage";
import EmployeeListPage from "./employeeListPage";
import * as newEmployeeData from "../../../fixtures/newEmployeeData.json";


export default class EmployeeListActionsPage extends ConstPIMEmployeeListLocators {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async deleteEmployee(lastname: string) {
    const usersPage = new UsersSubsectionPage(this.page);
    const pimPage = new PIMPage(this.page);
    const employeeListPage = new EmployeeListPage(this.page);
    await pimPage.clickPIMsection();
    await employeeListPage.fillEmployeeNameField(
      newEmployeeData.newValidEmployee.last_name
    );
    await usersPage.clickSearchButton();

    await usersPage.tickOnUserMainSelectAllCheckbox();
    await usersPage.clickDeleteSelectedButton(); 
    await usersPage.clickYesDeleteButton();
    const deletedEmployeeSuccessNotif =
      await employeeListPage.returnEmployeeDeletionSuccessNotif();
    await expect(deletedEmployeeSuccessNotif).toBeVisible();
  }

  async returnEmployeeDeletionSuccessNotif() {
    return this.getDeletedEmployeeSuccessNotificationLocator;
  }
}
