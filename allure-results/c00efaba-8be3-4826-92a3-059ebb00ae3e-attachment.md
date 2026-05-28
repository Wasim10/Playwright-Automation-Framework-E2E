# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: temp-test.spec.ts >> Sample Test 3
- Location: tests/temp-test.spec.ts:16:5

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for getByRole('textbox', { name: 'Username' }) to be visible

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | /**
  4  |  * LoginPage class represents the login page of the OrangeHRM application
  5  |  */
  6  | export class LoginPage {
  7  |   readonly page: Page;
  8  |   readonly userNameInput: Locator;
  9  |   readonly passwordInput: Locator;
  10 |   readonly loginButton: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     this.page = page;
  14 |     this.userNameInput = page.getByRole('textbox', { name: 'Username' });
  15 |     this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  16 |     this.loginButton = page.getByRole('button', { name: 'Login' });
  17 |   }
  18 | 
  19 |   async gotoOrangeHRM() {
  20 | 
  21 |     // ── NEW: Fallback URL if BASE_URL env variable is not set ──
  22 |     const baseUrl = process.env.BASE_URL || 
  23 |       'https://opensource-demo.orangehrmlive.com';
  24 |     
  25 |     // ── NEW: Debug log to verify URL in pipeline logs ──
  26 |     console.log('BASE_URL:', baseUrl);
  27 |     
  28 |     // ── UPDATED: Using baseUrl variable instead of process.env.BASE_URL directly ──
  29 |     await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  30 | 
  31 |     // ── NEW: Wait for username field to be visible before proceeding ──
> 32 |     await this.userNameInput.waitFor({ state: 'visible',   timeout: 60000  });
     |                              ^ Error: locator.waitFor: Test ended.
  33 |   }
  34 | 
  35 |   async loginOrangeHrm(username: string, password: string) {
  36 |     await this.userNameInput.fill(username);
  37 |     await this.passwordInput.fill(password);
  38 |     await this.loginButton.click();
  39 |     await this.page.waitForLoadState('networkidle');
  40 |   }
  41 | }
```