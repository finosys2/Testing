import { Login} from "../../Login.cy.js"

describe('Item Class', () => {
    it('Item Class CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
    })
})

export function Save() {
    cy.visit('http://40.81.28.195:1110/Inventory/Setup/ItemAssignment')
    cy.wait(2000);
    cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.wait(1000);
    cy.get('#fromCode-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.wait(1000);
    cy.get('#toCode-option-0').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
