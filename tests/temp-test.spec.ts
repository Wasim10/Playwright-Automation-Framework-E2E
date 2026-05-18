import { test} from '../fixtures/common-fixture';   
import { expect } from '@playwright/test';


// for logging in before each test case execution
test.beforeEach('Before Each hook Test', async ({ page, loginPage }) => {
  await loginPage.gotoOrangeHRM();
});

// for logging out after each test case execution
test.afterEach('After Each hook Test', async ({ page, userPage }) => {
  await userPage.logout();  
});
test('Sample Test 1', async ({ page, loginPage, commonUtils }) => {

  console.log(await page.title());

});
test('Sample Test 2', async ({ page, loginPage, commonUtils }) => {
  await expect(await page.title()).toBe('OrangeHRM');

});

test('Sample Test 3', async ({ page, loginPage, commonUtils }) => {
  await expect(await page.title()).toBe('OrangeHRM');

});



