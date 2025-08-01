import { Page } from "@playwright/test";


export class NewTaskPage {
    constructor(private page: Page) { }

    async navigateToNewTaskPage() {
        await this.page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
    }

    async fillTitle(title: string) {
        await this.page.getByTestId('title-input').fill(title);
    }

    async fillDescription(description: string) {
        await this.page.getByTestId('description-textarea').fill(description);
    }

    async selectCategory(option: string) {
        await this.page.getByTestId('category-select').filter({ visible: true }).selectOption(option);
    }

    async selectPriority(selectLevel: string) {
        await this.page.getByTestId(`priority-${selectLevel}-radio`).check();
    }

    async setProgress(progress: string) {
        await this.page.getByTestId('progress-range').fill(progress);
    }

    async selectStatus(status: string) {
        await this.page.getByTestId('status-select').selectOption(status);
    }

    async submitTicket() {
        await this.page.getByTestId('submit-button').click();
    }

    /**
     * Create a new ticket successfully.
     * @title enter title
     * @description enter description
     */
    async createTicket(ticketDetails: {
        title?: string,
        description: string,
        category: string,
        priority: string,
        progress: string,
        status: string
    }) {
        if (ticketDetails.title) { await this.fillTitle(ticketDetails.title) }
        await this.fillDescription(ticketDetails.description)
        await this.selectCategory(ticketDetails.category)
        await this.selectPriority(ticketDetails.priority)
        await this.setProgress(ticketDetails.progress)
        await this.selectStatus(ticketDetails.status)
        await this.submitTicket()
    }

    async getLastTicket(text: string) {
        return this.page.getByText(text).last()
    }
}