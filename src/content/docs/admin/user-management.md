---
title: User Mangement
---

#### This is where admins can manage the Users for the Locations and Organizations they are responisble for.
For information on how to log in, see [Logging In](../logging_in).

<hr />

##### User Search:

![Dashboard Screenshot](/src/assets/screenPrints/userManagement.png)

- **A.** Users can be filtered to Active or Inactive, as well as viewing all.
- **B.** Search for users by their name or e-mail address.
- **C.** Import a CSV.  This is the same exact tool as [Patient Import](/patients/import/), only for Users.
- **D.** Use this option to create a new user.  (see below)
- **E.** This has 5 options available for user accounts - (see below) - Edit, deactivate, archive, send a pw reset link or enable 2FA.
- **F.** This icon will be lit up green when a user is signed in to indicate they are currently active.

<br />

![Dashboard Screenshot](/src/assets/screenPrints/userManagement2.png)

- **E.** The options available in menu E. in the above print.

<br />

<hr />

##### User Create / Update:
##### Note: a red <b style="color: red;">*</b> indicates a required field that needs to be completed to proceed. <br />

##### Admin Account: Full site admin.

![Dashboard Screenshot](/src/assets/screenPrints/userManagementEditAD.png)

- **A.** This is the role, the setting of which defines the rest of the available fields.
- **B.** Email is required, it ends up being the account username and this address is sent the initial link to sign in and set a password.
- **C.** First and Last name are also required.
- **D.** Title and phone number are optionals.
- **E.** The create (or update) user button saves all changes.

##### Client Admin Account: Access to admin options for the specific organization and locations they are assoicated with.
![Dashboard Screenshot](/src/assets/screenPrints/userManagementEditCA.png)

- **A.** A client admin requires the organization and locations they will be admin over to be specified. 
- **B.** A client admin has the option to have 2FA (2 factor authentication) enforced on their account.

##### Staff Account: Basic access to patients, orders, results, etc.  No admin access.
![Dashboard Screenshot](/src/assets/screenPrints/userManagementEditST.png)

- **A.** Has all the same fields as a client admin account, with the added option to restrict the available results to only those for the provider this user is associated with.

##### Provider Account: Basic access like a staff account, with the added access to the Sign Orders page where they can sign off on their orders.
![Dashboard Screenshot](/src/assets/screenPrints/userManagementEditPv.png)

- **A.** This has the same input features added as the [Providers page](/admin/providers/), where it takes the NPI and pulls the name and address in.
- **B.** It also has the same override to manually add the name and address.

<br />

<hr />

For information on the user options available to all users, see the [Your Account](/account/) page.