import { test } from '../../fixtures/base.fixtures';
import { expect } from '@playwright/test';


test.describe('1. CRUD Tickets', () => {

   test('TC-1.1. Create a Ticket Successfully', async ({ page, basePage, newTaskPage }) => {
      // 1. Arrange: Navigate to the home page
      await basePage.navigateTo("/")

      // 2. Act: Create a ticket
    await newTaskPage.navigateToNewTaskPage()


      await page.getByTestId('title-input').click();
      await page.getByTestId('title-input').fill('Develop new Application for Cats');
      await page.getByTestId('description-textarea').click();
      await page.getByTestId('description-textarea').fill('We need to develop new application');
      await page.getByTestId('category-select').selectOption('Application Development');
      await page.getByTestId('priority-3-radio').check();
      await page.getByTestId('progress-range').fill('13');
      await page.getByTestId('status-select').selectOption('started');
      await page.getByTestId('status-select').click();
      await page.getByTestId('submit-button').click();

      // 3. Assert: Verify the ticket is created
      const ticketTitle = page.getByText('Develop new Application for Cats').last()
      await expect(ticketTitle).toBeVisible()
   })
})