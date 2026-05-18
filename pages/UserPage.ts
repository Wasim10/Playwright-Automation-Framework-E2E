import { Page,Locator  } from '@playwright/test';

// This class represents the User Page of the application, 
// providing methods to interact with user-related functionalities such as logging out.
export class UserPage {
    readonly page: Page;
    readonly userMenuButton: Locator;
    readonly logoutButton: Locator;

// Initialize the page and locators in the constructor
    constructor(page: Page) {
        this.page = page;
        this.userMenuButton = page.locator('.oxd-userdropdown-name');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }

// Method to perform logout action
    async logout() {
        await this.userMenuButton.click();
        await this.logoutButton.click();
    }
}