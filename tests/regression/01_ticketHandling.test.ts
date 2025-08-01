import { test } from '../../fixtures/base.fixtures';
import { expect } from '@playwright/test';
import { TEST_DATA } from '../../fixtures/data/test-data';


test.describe('1. CRUD Tickets', () => {

   test('TC-1.1. Create a Ticket Successfully', async ({ page, basePage, newTaskPage }) => {
      // 1. Arrange: Navigate to the home page
      await basePage.navigateTo("/")

      // 2. Act: Create a ticket
      await newTaskPage.navigateToNewTaskPage()
      await newTaskPage.fillTitle(TEST_DATA.ticket[0].title)
      await newTaskPage.fillDescription(TEST_DATA.ticket[0].description)

      // TODO: wait for selector
      await newTaskPage.selectCategory(TEST_DATA.ticket[0].category[0])

      /* await newTaskPage.selectPriority(TEST_DATA.ticket[0].priority)
      await newTaskPage.setProgress(TEST_DATA.ticket[0].progress)
      await newTaskPage.selectStatus(TEST_DATA.ticket[0].status) */
      /* 
            await page.getByTestId('status-select').click();
            await page.getByTestId('submit-button').click();
      
            // 3. Assert: Verify the ticket is created
            const ticketTitle = page.getByText('Develop new Application for Cats').last()
            await expect(ticketTitle).toBeVisible() */
   })
})