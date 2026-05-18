import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";

/** Type definition for the custom test fixtures, specifying that the fixture will provide an instance of the LoginPage class. */
type PomFixturesType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
}
/** This file defines a custom test fixture for Playwright tests, providing an instance of the LoginPage class to be used in test cases. */
export const test = baseTest.extend<PomFixturesType>({
    loginPage: async ({ page }, use) => {
       await use(new LoginPage(page));

    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
// This fixture provides an instance of the UserPage class, allowing test cases to interact with user-related functionalities such as logging out.
    userPage: async ({ page }, use) => {
        await use(new UserPage(page));
    }
});
