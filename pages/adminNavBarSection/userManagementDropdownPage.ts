import { Page } from "playwright";
import UsersSubsectionPage from "./userManagementSubSections/usersSubsectionPage" 
import ConstAdminUserMngUsersLocators from "../../utils/constAdminUserMngUsersLocators";

export class UserManagementPage extends ConstAdminUserMngUsersLocators {
  readonly page: Page;
  readonly users: UsersSubsectionPage;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.users = new UsersSubsectionPage(page);
  }

  async clickUserMngDropdown(){
    await this.getUserManagementLocator.click();
    
  }
}
