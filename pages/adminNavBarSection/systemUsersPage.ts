import { Page } from "playwright";
import ConstSystemUsersLocators from "../../utils/constSystemUsersLocators";
import newUserData from "../../fixtures/newUserData.json";

import { expect } from "playwright/test";
import UsersSubsectionPage from "./userManagementSubSections/usersSubsectionPage";

export default class SystemUsersPage extends ConstSystemUsersLocators {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async clickDeleteButton() {
    await this.getDeleteButtonLocator.click();
  }

  async clickYesDeleteButton() {
    await this.getConfirmDeletionButtonLocator.click();
  }

  async tickOnUserSuperHeroRow() {
    await this.getSuperHeroCheckboxLocator.click();
  }

  async clickDeleteSelectedCheckboxButton() {
    const confirmDeletionButton = this.getDeleteSelectedButtonLocator;
    await confirmDeletionButton.waitFor({ state: "visible" });
    await expect(confirmDeletionButton).toBeEnabled();
    await confirmDeletionButton.click();
  }

  async returnUserDeletionSuccessNotif() {
    return this.getDeleteUserSuccessNotifLocator;
  }

  async deleteUser(username: string) {
    const usersPage = new UsersSubsectionPage(this.page);
    const systemUserPage = new SystemUsersPage(this.page);

    await usersPage.fillUsernameField(newUserData.newValidUser.username);
    await usersPage.clickSearchButton();

    await usersPage.tickOnUserMainSelectAllCheckbox();
    await usersPage.clickDeleteSelectedButton();
    await usersPage.clickYesDeleteButton();

    const deletedUserSuccessNotif =
      await systemUserPage.returnUserDeletionSuccessNotif();
    await expect(deletedUserSuccessNotif).toBeVisible();
  }
}
