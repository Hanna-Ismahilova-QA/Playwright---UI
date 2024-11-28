import { Locator, Page } from '@playwright/test';
import ConstLoginLocators from '../utils/constLoginLocators';
import { UserLoginInterface } from "./interfaces/loginPageInterface";

export default class LoginPage
    extends ConstLoginLocators
    implements UserLoginInterface {

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

    // Locators
    usernameField = this.getUsernameLocator;
    passwordField = this.getPasswordLocator;
    loginButton = this.getLoginButtonLocator;

    
    // Encapsulated login method
    async loginUser(username: string, password:string): Promise<void>{
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
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
