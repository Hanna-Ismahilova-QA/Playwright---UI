
export interface UserLoginInterface{
    usernameField: Locator,
    passwordField: Locator,
    loginButton: Locator

    loginUser(username:string, password: string): Promise<void>;
}

type Locator = any;