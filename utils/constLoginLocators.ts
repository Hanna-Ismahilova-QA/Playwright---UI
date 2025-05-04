import { Locator, Page } from "@playwright/test";

export default class ConstLoginLocators {
  readonly page: Page;
  readonly getInventoryContainerLocator: Locator;
  readonly getUsernameLocator: Locator;
  readonly getPasswordLocator: Locator;
  readonly getLoginButtonLocator: Locator;
  readonly getInvalidCredentialsErrorLocator: Locator;
  readonly  getRequiredUsernameOrPasswordErrorLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getRequiredUsernameOrPasswordErrorLocator = page.getByText('Required');

    this.getInvalidCredentialsErrorLocator = page
      .getByRole("alert")
      .locator("div")
      .filter({ hasText: "Invalid credentials" });

    this.getInventoryContainerLocator = page.locator(
      '[data-test="inventory-container"]'
    );

    this.getUsernameLocator = page.getByPlaceholder("Username");

    this.getPasswordLocator = page.getByPlaceholder("Password");

    this.getLoginButtonLocator = page.getByRole("button", { name: "Login" });
  }
}
