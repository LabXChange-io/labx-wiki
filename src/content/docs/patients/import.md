---
title: Patient Import
---

#### This is the work flow for uploading a CSV (comma delineated file) of patient records:

##### Upload File:
![Dashboard Screenshot](/screenPrints/Patient_Import1.png)
<br />

- **A.** Progress bar of the work flow.
- **B.** Download a template file to load data into and ensure the upload has the necessary data.
- **C.** This entire gray area is interactive, can drag and drop a CSV file onto it or click it to browse for a file.
- **D.** The chosen file displays here for confirmation.
- **E.** Click this button to proceed, once a file has been provided.

<hr />

<br />

##### Select Header Row:
![Dashboard Screenshot](/screenPrints/Patient_Import2.png)
<br />

- **A.** This is a grid of the data found in the CSV file for review / confimration.
- **B.** Use the radials to confirm the row which contains the header values. 
- **C.** There is now a button to back up if the displayed data or headers are incorrect.
- **D.** Click this button to proceed, once the header row is confirmed.
<hr />

<br />

##### Match Columns:
![Dashboard Screenshot](/screenPrints/Patient_Import3.png)
<br />

- **A.** This is a list of the columns based on header in the uploaded CSV.
- **B.** This is a list of the columns the upload tool is expecting to recieve.
- **C.** This indicator is showing whether the uploaded column successfully mapped to an expected column.
- **D.** This icon is a way to remove a column from being used in the upload if it's not needed.
- **E.** These displayed column boxes can be dragged up and down to change the displayed order.
- **F.** The controls at the bottom allow for backing up if there are issues or proceeding if all required columns have properly mapped.

<hr />

<br />

##### Validate Data:
![Dashboard Screenshot](/screenPrints/Patient_Import4.png)
<br />

- **A.** Select / Deselect all rows.
- **B.** Data grid, which allows individual row selections, will indicate rows with bad data, and permit in-line corrections as needed.
- **C.** Filter down to just the rows with issues to correct.
- **D.** Revalidate the rows that have been corrected to see if the issues have been resolved.
- **E.** Remove rows from being uploaded, such as duplicates or bad data that can't be corrected.
- **F.** Initiate the import once all data validation has been completed.
  - **Note: ** The import can be run even without fixing all issues, the app will still import as much as it can.

<hr />

<br />

##### Confirmation:
![Dashboard Screenshot](/screenPrints/Patient_Import5.png)
<br />

- **A.**  Confirmation status of the results of the validation process.
- **B.**  Cancel and return to validating.
- **C.**  Accept confimration and initiate the import.

<hr />

<br />

##### Result:
![Dashboard Screenshot](/screenPrints/Patient_Import6.png)
<br />

- **A.** Result message indicating the status of the import.
- **B.** The number of patients successfully imported to the application.
- **C.** The number of patients from the file the app was unable to import.
- **D.** A short cut to jump right to the [Patient Search Page](/patients/search/) to see your imported records.

<hr />