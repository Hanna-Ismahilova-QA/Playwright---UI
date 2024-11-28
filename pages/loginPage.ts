import { Locator, Page } from '@playwright/test';
import ConstLoginLocators from '../utils/constLoginLocators';
import { UserLoginInterface } from "../pages/typesPage";


export default class LoginPage extends ConstLoginLocators {
    // Define the selectors for elements on the login page
    readonly page: Page;


    // Initialize page in the constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    // Define methods for actions on the login page
    async navigateToLogin(url: string) {
        await this.page.goto(url);
    }

    loginUser: UserLoginInterface = {
        usernameField: this.getUsernameLocator,
        passwordField: this.getPasswordLocator,
        loginButton: this.getLoginButtonLocator

    }

    // async login(username: string, password: string) {
    //     await this.getUsernameLocator.fill(username);
    //     await this.getPasswordLocator.fill(password);
    //     await this.getLoginButtonLocator.click();
    // }

    async invalidCredentialsValidation() {
        return this.getInvalidCredentialsErrorLocator;
    }

    async requiredUsernameOrPasswordValidation() {
        return this.getRequiredUsernameOrPasswordErrorLocator;
    }
}
