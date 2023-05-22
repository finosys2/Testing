import { Login } from "../../../Login.cy";

describe('VendorDoc', () => {
    it('VendorDoc CRUD', () => {
        Login();
        Save();
    })
})
export function Save(){
    cy.visit("http://40.81.28.195:1110/Financials/Transaction/ApplyVendorDocuments")
    cy.wait(1000);
    //Vendor lookup
    cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Vendor-undefined-option-0').click({force: true})
    cy.wait(1000);
    //Reference lookup
    cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Ref-undefined-option-0').click({force: true})
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
}