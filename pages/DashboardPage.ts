import { Locator, Page } from '@playwright/test';

/**
 * DashboardPage class represents the dashboard page of the OrangeHRM application
 */

export class DashboardPage {
    readonly page: Page;
    readonly dashboardHeader: Locator;

    /** Constructor to initialize the DashboardPage class with the Playwright Page object and define locator for the dashboard header */
    constructor(page: Page) {
        this.page = page;
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    }

    /** Method to verify if the dashboard header is visible on the page */
    async isDashboardHeaderVisible(): Promise<boolean> {
        return await this.dashboardHeader.isVisible();
    }
}