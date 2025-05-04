import { Page } from "playwright";

export default class TimePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async method() {}
}
