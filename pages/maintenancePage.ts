import { Page } from "playwright";

export default class MaintenancePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async method() {}
}
