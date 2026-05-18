import { test} from '../fixtures/hooks-fixture';   
import { expect } from '@playwright/test';



test('Sample Test 1', async ({ page, gotourl }) => {

  console.log(await page.title());

});
test('Sample Test 2', async ({ page, gotourl }) => {
  await expect(await page.title()).toBe('OrangeHRM');

});

test('Sample Test 3', async ({ page, gotourl , logout}) => {
  await expect(await page.title()).toBe('OrangeHRM');

});



