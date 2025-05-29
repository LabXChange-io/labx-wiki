---
title: Order Add/Edit

---

#### This is the work flow for creating a new order (or editing a saved draft):
##### Note: a red <b style="color: red;">*</b> indicates a required field that needs to be completed to proceed.

<hr />

##### Patient (1/5):
![Patient Search](/screenPrints/Order_Create1.png)

- **A.** This is the progress bar for the order creation work flow.
- **B.** The Organization and Location need to be set in the header before the patient can be selected.
- **C.** This field allows the patient to be searched for and selected.  As soon as a patient is chosen, the Patient Preview dialog (below) will open automatically for confirmation of the patient.
- **D.** Ordering can be canceled at any time during creation.
- **E.** After a patient has been confirmed, the 'Next' button continues the work flow.

![Patient Search](/screenPrints/Order_Create2.png)

- **A.** This dialog provides a quick view of the selected patient's demographic and insurance information.
- **B.** This indicator shows whether this patient's demographic information has been verified yet.
- **C.** There is a short cut to jump to [Patient Editing](/patients/add_edit/) if anything on this preview needs to be uodated.
- **D.** This indicator shows whether this patient's insurance information has been verified yet.
- **E.** This is a quick link to run an Eligiblity check on the patient's insurance on the spot.
- **F.** Clicking close returns to the patient selection without seleting this patient, so another can be chosen.
- **G.** Select Patient confirms this patient selection and returns to the workflow where the next button can now be used to Proceed.

<hr />
<br /><br />

##### Order Details (2/5):
![Patient Search](/screenPrints/Order_Create3.png)

- **A.** Select how the order will be paid for.  If "Insurance" is selected, a Diagnosis Code will be required on the next screen.
- **B.** Set the date and time of the sample collection - from two weeks in the past to a week in the future.
- **C.** This check box indicates whether the order will need a provider to sign off on it.  Checking it displayeds the provider selection box for choosing who needs to sign off.
- **D.** This is the box that appears for selecting a provider to sign off on the order.
    - This box is referring to providers who are portal users and have an account under [User Management](/admin/user-management/) to access the portal and sign orders.
- **E.** If the provider in question already signed off, the documentation showing this can be uploaded using this button.
    - If documentation is uploaded, the Provider will be notified and see this order [in their queue](/signorders/) as already signed off, and will not need to log in to approve it.
- **F.** Any additional notes for this order can be provided in this space.
- **G.** From this point on, the option to save the order as a "Draft" is available.  A draft will be available in the [Order Search](/orders/search/) where it can be resumed and completed at a later time.
- **H.** From this point on, a mini sumamry of the order will be visible on the left, showing what was selected on the previous tabs of the work flow.
- **I.** There is also a 'Previous' for backing up in the work flow if need be.

<hr />
<br /><br />

##### Tests & Provider (3/5):
![Patient Search](/screenPrints/Order_Create4.png)

- **A.** This field is for an ordering provider, one who has been addedon the [Providers page](/admin/providers/) in the Admin section.
- **B.** This field is for selecting the individual tests to add to the list for the order.
- **C.** This option is to use a predefined [group of tests](admin/tests/), rather than selecting them all individually.
- **D.** This field allows for manually selecting the Diagnosis codes for the tests.
    - Diagnosis codes are required when submitting an order with 'Insurance' set as the payment type.
- **E.** This opens a tool (below) to use A.I. for matching up the proper Diagnosis codes for the selected tests.  
    - This A.I. matching may be set up at the location level to be required for that location.
- **F.** This optional box is to list any medications the patient may be taking.

![Patient Search](/screenPrints/Order_Create5.png)

- **A.** The left side list the selected Diagnosis Codes that A.I. matched to the selected tests.
- **B.** The right side contains any Diagnosis Codes selected that did not match to the tests.
- **C.** The individual codes can be dragged from the right to the left to include them.
- **D.** This button permits searching for and adding in any additional DX codes. (see below)
- **E.** This button is to have the A.I. rerun the matching and reevalute the selected codes.
- **F.** Close will close out the A.I. dialog without making any changes.
- **G.** Apply Matching will update the selected DX Codes with the A.I. results and then close the dialog.

![Patient Search](/screenPrints/Order_Create8.png)

- **A.** Select any addition Diagnosis Codes to pull into the matching tool.
- **B.** Confirm selection and close this dialog.

<hr />
<br /><br />

##### AOE Questions (4/5):
![Patient Search](/screenPrints/Order_Create6.png)

- **A.** In the event the chosen test(s) have no AOEs configured for the location of this order, the label "None" will display here and the workflow will automatically advance right to the 'Review' step.
- **B.** If AOEs are found, each matching set of AOEs will be displayed in a section, with the title and the test the questions are for in the header.
- **C.** Each question in a set gets listed out with fields and validation approprioate to the type of question being asked.

<hr />
<br /><br />

##### Review (5/5):
![Patient Search](/screenPrints/Order_Create7.png)

- **A.** At the final review step, all provided data is from the previous steps is listed out for review and confirmation.
- **B.** Each section has an Edit short cut button if something in that section is wrong and needs to be corrected before the order is placed.
- **C.** There is a demographic verification status indicator available at this stage as well.
- **D.** Once all data is verified as accurate, the "Confirm & Create Order" button will live up to it's name and create the order.

<hr />

After creation, the application will redirect to the [Order Summary page](/orders/details/) for the newly created order.

<hr />