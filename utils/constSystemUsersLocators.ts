import path from "path";
import { Locator, Page } from "playwright";

export default class ConstSystemUsersLocators {
  readonly page: Page;
  readonly getDeleteButtonLocator: Locator;
  readonly getConfirmDeletionButtonLocator: Locator;
  readonly getSuperHeroCheckboxLocator: Locator;
  readonly getDeleteSelectedButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getDeleteSelectedButtonLocator = page.getByRole("button", {
      name: " Delete Selected",
    });

    this.getSuperHeroCheckboxLocator = page
      .getByRole("columnheader", { name: "" })
      .locator("i");

    this.getConfirmDeletionButtonLocator = page.getByRole("button", {
      name: " Yes, Delete",
    });

    this.getDeleteButtonLocator = page.getByRole("button", { name: "" });
  }
}
