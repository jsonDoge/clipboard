This project contains two challenges - a "Ticket Breakdown" challenge and a "Refactoring" challenge. The two challenges are unrelated, but you should complete both in the same folder and share the link in Coderbyte. Any written answers should be included in markdown files within this folder.


## [Ticket Breakdown](Ticket_Breakdown.md)

### Back-end 

<b>Context:</b> Reports should still use internal Ids for referencing Agents as not all facility agents will have a custom id value. Therefore it will closely resemble a simple text field.

<b>Tickets:</b>

- Add custom id to Agent model. Sub-tasks:
  - Existing endpoint validation (API / any internal logic).
  - Add new logic to reports to display custom Id.

### Front-end 

<b>Context:</b> Front-end will likely need an update to allow custom id manipulation.

<b>Tickets:</b>

- Add custom id to Agent forms. Sub-tasks:
  - Add necessary form fields and validation.
 
## [Refactoring](Refactoring.md)

If you are a JS novice, here's how to get started:
1. [Install Node.js](https://nodejs.org/en/download/) (we use `^16`, the latest LTS)
2. Run `npm i` in this repo to install dependencies
3. Run `npm test` to run the automated tests
4. Run `npm start` to launch `index.js` for any manual testing
