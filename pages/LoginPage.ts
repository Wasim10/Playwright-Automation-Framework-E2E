import { Locator, Page } from "@playwright/test";

/**
 * LoginPage class represents the login page of the OrangeHRM application
 */
export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async gotoOrangeHRM() {

    // ── NEW: Fallback URL if BASE_URL env variable is not set ──
    const baseUrl = process.env.BASE_URL || 
      'https://opensource-demo.orangehrmlive.com';
    
    // ── NEW: Debug log to verify URL in pipeline logs ──
    console.log('BASE_URL:', baseUrl);
    
    // ── UPDATED: Using baseUrl variable instead of process.env.BASE_URL directly ──
    await this.page.goto(`${baseUrl}/web/index.php/auth/login`);

    // ── NEW: Wait for username field to be visible before proceeding ──
    await this.userNameInput.waitFor({ state: 'visible',   timeout: 60000  });
  }

  async loginOrangeHrm(username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}