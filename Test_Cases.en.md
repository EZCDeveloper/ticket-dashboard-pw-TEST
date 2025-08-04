# 1. Tickets Handling

## 1.1. CRUD Tickets

### TC-1.1.1. Create a Ticket Successfully

- **Description:**

    Verify that a user can successfully create a new ticket by filling out all required fields with valid data and submitting the form. The system should confirm the creation and display the newly created ticket.

- **Priority:** Critical  
- **Type:** E2E / UI  
- **Preconditions:**
  - The user is logged into the application.
  - The "Create Ticket" page is accessible.
  - The user has permission to create tickets.

- 📌 **Steps:**
  1. Visit the "Create Ticket" page.
  2. Fill in the form with valid data for all required fields (e.g., name, description, category).
  3. Click the "Create Ticket" button to submit the form.
  4. Wait for the system response and verify that the ticket is created.
  5. Confirm that the new ticket appears in the ticket list or detail view.

- **Expected Results:**
  - A success message is displayed (e.g., "Ticket created successfully"). (not implemented yet)
  - The new ticket appears in the ticket list or in the ticket details view.
  - The user may be redirected to the ticket detail page or remain on the current page with the list updated. (should do)
  - The ticket data is persisted correctly in the database (should do)
  - The application does not display any errors.

---

### TC-1.1.2. Fail to Create a Ticket: Name Is Missing

- **Description:**

    Verify that the system does not allow creating a ticket if the "name" field is left empty, and that an appropriate error message is displayed when attempting to submit the form without this required field.

- **Priority:** High  
- **Type:** E2E / UI  
- **Preconditions:**
  - The user is successfully logged into the application. (not aplicable yet)
  - The "Create Ticket" page is available and accessible.
  - The user has permissions to create a ticket.

- 📌 **Steps:**
  1. Visit the "Create Ticket" page.
  2. Fill out all required fields **except** the "name" field.
  3. Click the "Create Ticket" button or submit the form.
  4. Observe the system response.

- **Expected Results:**
  - The ticket **is not** created.
  - The system displays an error message indicating that the "name" field is required (e.g., "Name field is required"). (should do)
  - The user remains on the same page (should do)
  - No valid request is sent to the backend, or a validation error is returned (e.g., HTTP 400). (should do)
  - No incomplete data is stored in the database. (should do)

---

### TC-1.1.3. Update Ticket Successfully

- **Description:**

    Verify that a user can successfully update an existing ticket by editing its details with valid information and submitting the form. The system should reflect the changes in the ticket.

- **Priority:** High  
- **Type:** E2E / UI  
- **Preconditions:**
  - The user is logged into the application (not implemented yet)
  - At least one ticket exists in the system.
  - The "Edit Ticket" functionality is available and accessible.

- 📌 **Steps:**
  1. Visit the page displaying the list or details of tickets.
  2. Click the "Edit" button for a specific ticket.
  3. Modify one or more fields in the ticket form (e.g., update the description or category).
  4. Submit the form by clicking the "Update Ticket" button.
  5. Verify that the ticket reflects the updated information.

- **Expected Results:**
  - A success message is displayed (e.g., "Ticket updated successfully").
  - The ticket now displays the updated information.
  - Changes are saved correctly in the backend/database. (should do)
  - No error messages are shown.

---

### TC-1.1.4. Delete a Ticket Successfully

- **Description:**

    Verify that a user can successfully delete an existing ticket, and that it no longer appears in the list of tickets or is accessible in the system.

- **Priority:** High  
- **Type:** E2E / UI  
- **Preconditions:**
  - The user is logged into the application.
  - At least one ticket exists in the system.
  - The "Delete Ticket" option is available.

- 📌 **Steps:**
  1. Visit the page displaying the list of tickets.
  2. Click the "Delete" button for a specific ticket.
  3. Confirm the deletion if a confirmation modal is presented.
  4. Verify that the ticket is no longer shown in the list or accessible via its URL.

- **Expected Results:**
  - A success message is shown (e.g., "Ticket deleted successfully").
  - The ticket is removed from the list view.
  - Attempting to access the ticket directly results in a 404 or "not found" message.
  - The ticket is deleted from the database.
