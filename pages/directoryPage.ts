import { Page } from "playwright";

export default class DirectoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async method(){};
}
