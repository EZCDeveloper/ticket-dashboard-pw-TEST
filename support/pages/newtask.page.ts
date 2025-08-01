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
        await this.page.getByTestId('category-select').selectOption(option);
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
}