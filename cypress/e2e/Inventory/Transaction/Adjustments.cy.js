import { Login} from "../../Login.cy.js"

describe('Adjustments', () => {
    it('Adjustments CRUD', () => {
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
    cy.visit('http://40.81.28.195:1110/Inventory/Transaction/Adjustments')
    cy.wait(3000);
    // cy.get('[aria-label="Add New"]').click()
    // cy.wait(1000);
    // cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    // cy.wait(1000);
    // cy.get('#IR--option-0').click()
    // cy.wait(1000);
    // cy.get('#Adjustment-UserDef1').type("UserDef1")
    // cy.wait(1000);
    // cy.get('#Adjustment-UserDef2').type("UserDef2")
    // cy.wait(1000);
    // cy.get('#Adjustment-Description').type("Description")
    // cy.wait(1000);
    // cy.get('#Adjustment-UserDef3').type("UserDef3")
    // cy.wait(1000);
    // cy.get('#Adjustment-UserDef4').type("UserDef4")
    // cy.wait(1000);
    // cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    // cy.wait(1000);
    // cy.get('#itemCode-paymentEntry-option-1').click()
    // cy.wait(1000);
    // cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    // cy.wait(1000);
}
export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Adjustment-UserDef2').clear()
    cy.get('#Adjustment-UserDef2').type("UserDef2")
    cy.wait(1000);
    cy.get('#Adjustment-Description').clear()
    cy.get('#Adjustment-Description').type("Description")
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
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