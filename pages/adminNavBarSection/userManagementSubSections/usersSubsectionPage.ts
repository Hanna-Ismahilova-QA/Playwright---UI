import { Page } from "playwright";
import ConstUsersSubsectioLocators from "../../../utils/constUsersSubsectionLocator";
import { UserLoginInterface } from "../../interfaces/loginPageInterface";
import ClaimClass from "../../claimPage";

export default class UsersSubsectionPage extends ConstUsersSubsectioLocators {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async clickUsersSubsection() {
    await this.getUsersSubsectionLocator.click();
  }

  //Search section
  async fillUsernameField(username: string) {
    await this.getSearchUsernameLocator.fill(username);
  }

  async fillEmployeeNameField(employee_name: string) {
    await this.getSearchEmployeeNameLocator.fill(employee_name);
  }

  async clickSearchButton() {
    await this.getSearchButtonLocator.click();
  }

  async returnSearchResultUsernameAdminRow() {
    return this.getSearchResultUsernameAdminRowLocator;
  }

  async returnSearchResultUserRoleEssRow() {
    return this.getSearchResultUserRoleEssRowLocator;
  }

  async returnSearchResulrEmployeeNameRow() {
    return this.getEmployeeNameRowLocator;
  }

  async returnSearchResultsStatusRow(){
    return this.getSearchResultStatusRowLocator;
  }

  async returnSearchResultsCount() {
    return this.getSearchResulsCountLocator;
  }

  async clickUserRoleDropdown() {
    await this.getUserRoleDropdownLocator.click();
  }

  async clickStatusDropdown() {
    await this.getSearchStatusLocator.click();
  }

  async selectUserRoleEssOptin() {
    await this.getUserRoleDropdownEssOptionLocator.click();
  }

  async selectEmployeeNameFromTheList() {
    await this.getEmployeeNameSearchResultLocator.click();
  }

  async selectStatusEnabledOption(){
    await this.getStatusDropdownEnabledOptionLocator.click();
  }
}
