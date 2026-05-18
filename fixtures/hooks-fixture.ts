import { test as baseTest } from './common-fixture';

type HooksFixtureType = {
  gotourl: void;
  logout: void;
};

export const test = baseTest.extend<HooksFixtureType>({ // ← added export const test =
  gotourl: async ({ loginPage }, use) => {
    await loginPage.gotoOrangeHRM();
    await use();
  },

  logout: async ({ userPage }, use) => { // ← implemented logout
    await use();
    // teardown — runs after test
    await userPage.logout();
  }
}); 