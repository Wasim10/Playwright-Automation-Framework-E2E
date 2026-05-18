import { test } from '../fixtures/common-fixture';
import {expect} from '@playwright/test';



test('Global setup for auto login', async ({ page, loginPage, commonUtils, dashboardPage }) => {
  const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
  const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

  
  await loginPage.gotoOrangeHRM();
  await loginPage.loginOrangeHrm(decryptedUserName, decryptedPassword);
  await page.waitForURL(process.env.BASE_URL + `/web/index.php/dashboard/index`);
  await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');

  await page.context().storageState({ path: './playwright-user-state/.auth/auth.json' });

});