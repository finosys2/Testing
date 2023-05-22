import { Login } from "../../../Login.cy";

describe("Customer Doc", () => {
  it("Customer Doc CRUD", () => {
    // cy.visit('http://localhost:1750')
    Login();
    Save();
  });
});
export function Save() {
    cy.visit("http://40.81.28.195:1110/Financials/Transaction/ApplyCustomerDocuments");
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Customer-undefined-option-0').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#paymentTerm-undefined-option-1').click({force: true})
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
}