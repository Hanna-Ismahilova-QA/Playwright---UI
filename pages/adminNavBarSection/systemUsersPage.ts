import { Page } from "playwright";
import ConstSystemUsersLocators from "../../utils/constSystemUsersLocators";

import { expect } from "playwright/test";

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
