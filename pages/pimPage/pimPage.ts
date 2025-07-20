import { Page } from "playwright";
import ConstPIMPageLocators from "../../utils/constPIMPageLocators";

export default class PIMPage extends ConstPIMPageLocators {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async clickPIMsection() {
    await this.getPIMSectionLinkLocator.click();
  }

  async clickAddEmployeeButton() {
    await this.getAddEmployeeButtonLocator.click();
  }
}
