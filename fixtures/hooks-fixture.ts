import { test as baseTest } from './common-fixture';

type HooksFixtureType = {
  gotourl: void;
  logout: void;
};

export const test = baseTest.extend<HooksFixtureType>({
  gotourl: async ({ loginPage }, use) => {
    await loginPage.gotoOrangeHRM();
    await use();
  },

  logout: async ({ userPage }, use) => {
    await use();
    try {
      await userPage.logout(); // ← wrapped in try/catch
    } catch (error) {
      console.log('Logout skipped — page already closed');
    }
  }
});