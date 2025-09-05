---
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 5
title: AOEs (At Order Entry questions)
---

#### This is where admins can manage the AOEs (At Order Entry questions) associated with the tests available for the Locations and Organizations they are responisble for.


<hr />

##### AOE Search:

![Dashboard Screenshot](/screenPrints/AOEsSearch.png)

- **A.** AOEs can be searched for by name.
- **B.** Create a new AOE list with this option. (see below)
- **C.** - **F.** Edit, View, or Archive an AOE entry with the options here.

<br />

<hr />

##### AOE Create / Update:
##### Note: a red <b style="color: red;">*</b> indicates a required field that needs to be completed to proceed.

![Dashboard Screenshot](/screenPrints/AOEsEdit1.png)

- **A.** The top section is the AOE List itself, including the unique name, all locations these questions apply to, and which tests trigger them.
- **B.** The lower section is all the questions that are part of this list of AOEs.
- **C.** The arrows next to each question number permit reordering the questions as needed.
- **D.** The answer type chosen defines all the rest of the fields which are dynamically loaded to fit the type. (aside from the required Question title & code)
- **E.** The 'Is Required' specifies whether a red <b style="color: red;">*</b> will show and the validation will require an answer.
- **F.** In this mulitple choice example, this button allows additional options to be added as needed.
- **G.** Options can be removed from a multiple choice question as well.
- **H.** One question is required for a list, but additional ones could be removed if necessary.
- **I.** Certain question types, like this numerical one shown, have the option to enforce limitations on the acceptible data range for the response.
- **J.** All changes can be confirmed and saved with this button in the lower right.
- **K.** If a question has an existing hierarchy, there wqill be a 'View Hierarchy" button to view the dialog with all the details of what was set up. (See Below)
- **L.** The little hamburger icon gives a quick view of the current hierarchy. (See Below)
- **M.** If no hierarchy has been added, then there will be an "Add Hierarchy" button to open the dialog to set one up. (See Below)
- **N.** The type of AOE being created can be specified:
    - Patient = AOE's triggered during patient registration for the Organization/Locations specified.
    - Test = AOE's triggered during ordering if the associated test is ordered for the Organization/Locations specified.
    - Schedule = AOE's triggered when scheduling an appointment for the Organization/Locations specified.

![Dashboard Screenshot](/screenPrints/AOEsEdit2.png)

- **D.** These are the available 'answer types' to choose from when using option D. in the screen above.


<br />

![Dashboard Screenshot](/screenPrints/AOEsEdit4.png)

- **L.** This is the quick view that pops up of an existing hierarchy.


<br />

<hr />

##### AOE Hierarchy Create / Edit:

![Dashboard Screenshot](/screenPrints/AOEsEdit3.png)

- **A.** Marking it as a conditional sub question means only showing it if the trigger question was answered in a way that requires the sub question.
- **B.** If it's specified as conditional, the comare operator needs to be set.
- **C.** If it's specified as conditional, the expected value for the comparison needs to be defined.
- **D.** The rest of the fields are the same as adding any stand-alone question - details are already available above in the Create/Update section.
- **E.** This column on the left will give an overview of the heirarchy as it's created. 
- **F.** The add buttons at the top will add additional questions and sub questions into the heirarchy as it's built out. 

<br />

<hr />