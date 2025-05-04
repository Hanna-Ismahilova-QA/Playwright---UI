import { Page } from "playwright";
import { UserManagementPage } from "./userManagementDropdownPage";
import ConstAdminPageLocators from '../../utils/constAdminPageLocators';

export default class AdminPage extends ConstAdminPageLocators {
  // Define the selectors for elements on the Admin page
  readonly page: Page;
  readonly userManagement: UserManagementPage;

  // Initialize page in the constructor
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.userManagement = new UserManagementPage(page);
  }

  async clickAdminSection() {
    await this.getAdminSectionLocator.click();
  }
}
