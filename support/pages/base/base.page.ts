import { Page } from "@playwright/test";

export class BasePage {
    constructor(private page: Page) {}

    async navigateTo(url?: string) {
        const baseUrl = process.env.BASE_URL as string
        await this.page.goto(baseUrl + url)
    }
}