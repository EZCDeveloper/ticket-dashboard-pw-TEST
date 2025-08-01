import { test } from '../../fixtures/base.fixtures';
import { expect } from '@playwright/test';
import { TEST_DATA } from '../../fixtures/data/test-data';


test.describe('1. CRUD Tickets', () => {

   test('TC-1.1. Create a Ticket Successfully',
      async ({ page, basePage, newTaskPage }) => {
         // 1. Arrange: Navigate to the home page
         await basePage.navigateTo("/")
         await newTaskPage.navigateToNewTaskPage()

         // 2. Act: Create a ticket
         await newTaskPage.createTicket(TEST_DATA.ticket[0])

         // 3. Assert: Verify the ticket is created (last)
         const ticketTitle = await newTaskPage.getLastTicket(TEST_DATA.ticket[0].title)
         await expect(ticketTitle).toHaveText(TEST_DATA.ticket[0].title)
      })

   test.only('TC-1.2. Fail to Create a Ticket: Title Is Missing',
      async ({ page, basePage, newTaskPage }) => {

         // 1. Arrange: Navigate to the home page
         await basePage.navigateTo("/")
         await newTaskPage.navigateToNewTaskPage()

         // 2. Prepare ticket details without title
         const ticketWithoutTitle = {
            ...TEST_DATA.ticket[0],
            title: undefined
         }

         // 3. Attempt to create a ticket and verify behaviour
         await newTaskPage.createTicket(ticketWithoutTitle)

         // 4. Add an assertion to validate the expected behavior 
         const lastCard = await newTaskPage.getLastTicket(TEST_DATA.ticket[0].title);
         await expect(lastCard).not.toBeVisible();
      })
})