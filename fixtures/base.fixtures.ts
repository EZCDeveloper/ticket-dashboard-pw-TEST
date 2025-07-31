import { test as baseTest} from "@playwright/test";
import { BasePage } from "../support/pages/base.page";
import { NewTaskPage } from "../support/pages/newtask.page";


type PageFixtures = {
    basePage: BasePage
    newTaskPage: NewTaskPage
}

export const test = baseTest.extend<PageFixtures>({
    /*-- Page Fixtures --*/
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },
    newTaskPage: async ({page}, use) => {
        const newTaskPage = new NewTaskPage(page);
        await use(newTaskPage)
    }
})