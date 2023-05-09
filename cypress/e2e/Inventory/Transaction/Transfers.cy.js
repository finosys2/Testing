import { Login} from "../../Login.cy.js"

describe('Transfers', () => {
    it('Transfers CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
        // Edit();
        View();
        Delete();
        Download();
    })
})

export function Save() {
    cy.visit('http://40.81.28.195:1110/Inventory/Transaction/Transfers')
    cy.wait(2000);
    // cy.get('[aria-label="Add New"]').click()
    // cy.wait(1000);
    // cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    // cy.wait(1000);
    // cy.get('#XFR-Location-option-0').click()
    // cy.wait(1000);
    // cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    // cy.wait(1000);
    // cy.get('#XFR-DestinationLocation-option-1').click()
    // cy.wait(1000);
    // cy.get('#Transfer-Description').type("Description")
    // cy.wait(1000);
    // cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    // cy.wait(1000);
}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Transfer-Description').clear()
    cy.get('#Transfer-Description').type("Description")
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(2000);
}