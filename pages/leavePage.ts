import { Page } from "playwright";

export default class LeavePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async method(){};
}
