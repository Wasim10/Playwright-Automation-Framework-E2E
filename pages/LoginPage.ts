import { Locator, Page } from "@playwright/test";

/**
 * LoginPage class represents the login page of the OrangeHRM application
 */
export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    /** Constructor to initialize the LoginPage class with the Playwright Page object and define locators for username, password, and login button */
    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    /** Method to navigate to the OrangeHRM login page */

    async gotoOrangeHRM() {
        
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    /** Method to perform login action on OrangeHRM application
     * @param username - The username to be entered in the login form
     * @param password - The password to be entered in the login form
     */
    async loginOrangeHrm(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
         await this.page.waitForLoadState('networkidle');
    }
}