import { Page } from "@playwright/test";

export class NewTaskPage {
    constructor(private page: Page) {}

    async navigateToNewTaskPage(){
        await this.page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
    }
}