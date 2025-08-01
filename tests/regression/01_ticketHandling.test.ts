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

   test('TC-1.2. Fail to Create a Ticket: Name Is Missing',
      async ({ page, basePage, newTaskPage }) => {


      })
})