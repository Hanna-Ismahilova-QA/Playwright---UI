import { Page } from "playwright";

export default class UserProfileDropdownPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async method() {}
  //About
  //Support
  //Change password
  //Logout
}
