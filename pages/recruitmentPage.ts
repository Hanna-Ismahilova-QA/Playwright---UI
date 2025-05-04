import { Page } from "playwright";

export default class RecruitmentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async method() {}
}
