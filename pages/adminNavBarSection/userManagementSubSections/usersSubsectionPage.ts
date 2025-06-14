import { Page } from "playwright";
import ConstUsersSubsectioLocators from "../../../utils/constUsersSubsectionLocator";
import { UserLoginInterface } from "../../interfaces/loginPageInterface";
import ClaimClass from "../../claimPage";
import { expect } from "playwright/test";

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

  async returnSearchResultUsernameSuperHeroRow() {
    return this.getSearchResultUsernameSuperHeroRowLocator;
  }

  async returnSearchResultUserRoleEssRow() {
    return this.getSearchResultUserRoleEssRowLocator;
  }

  async returnSearchResulrEmployeeNameRow() {
    return this.getEmployeeNameRowLocator;
  }

  async returnSearchResultsStatusRow() {
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

  async selectStatusEnabledOption() {
    await this.getStatusDropdownEnabledOptionLocator.click();
  }

  async clickAddNewUserButton() {
    await this.getAddNewUserButtonLocator.click();
  }

  async clickNewUserRoleDropdown() {
    await this.getNewUserRoleDropdownLocator.click();
  }

  async selectNewUserRoleAdminOptionFromDropdown() {
    await this.getNewUserRoleAdminOptionLocator.click();
  }

  async clickNewUserStatusDropdown() {
    await this.getNewUserStatusDropdownLocator.click();
  }

  async selectNewStatusEnabledOptionFromDropdown() {
    await this.getNewUserStatusEnabledOptionLocator.click();
  }

  async selectNewEmployeeName(employee_name: string) {
    await this.getNewEmployeeNameFieldLocator.click();
    await this.getNewEmployeeNameFieldLocator.fill(employee_name);
    await this.getNewEmployeeNameOptionLocator.click();
  }

  async inputNewUniqueUsername(username: string) {
    await this.getNewUserUsernameFieldLocator.fill(username);
  }

  async inputNewUserPassword(password: string) {
    await this.getNewUserPasswordFieldLocator.fill(password);
  }

  async inputNewUserConfirmPassword(confirm_password: string) {
    await this.getNewUserConfirmPasswordLocator.fill(confirm_password);
  }

  async clickSaveNewUserButton() {
    await this.getNewUserSaveButtonLocator.click();
  }

  async clickDeleteButton() {
    await this.getDeleteButtonLocator.click();
  }

  async clickYesDeleteButton() {
    await this.getConfirmDeletionButtonLocator.click();
  }

  async tickOnUserSuperHeroRow(){
    await this.getSuperHeroCheckboxLocator.click();
  }

  async clickDeleteSelectedCheckboxButton(){
    const confirmDeletionButton = this.getDeleteSelectedButtonLocator;
    await confirmDeletionButton.waitFor({state: 'visible'});
    await expect(confirmDeletionButton).toBeEnabled();
    await confirmDeletionButton.click();
  }
}
