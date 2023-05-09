import { Login} from "../../Login.cy.js"

describe('Unit of Measures', () => {
    it('Unit of Measures CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
        Edit();
        View();
        Delete();
        Download();
    })
})

export function Save() {
    cy.visit('http://40.81.28.195:1110/Inventory/Setup/UnitofMeasures')
    cy.wait(2000);
    // cy.get('[aria-label="Add New"]').click()
    // cy.wait(1000);
    // cy.get('#UnitOfMeasure-UOMHeaderCode').type('34')
    // cy.wait(1000);
    // cy.get('#UnitOfMeasure-UOMHeader').type('Test')
    // cy.wait(1000);
    // // cy.get('#UnitOfMeasure-BaseUOMCode-2').click()
    // // cy.wait(1000);
    // cy.get('.MTableToolbar-title-9 > div > .MuiButtonBase-root').click()
    // cy.wait(1000);
    // cy.get('#UnitOfMeasure-UOMCode').type('34')
    // cy.wait(1000);
    // cy.get('#UnitOfMeasure-UOM').type('Test1')
    // cy.wait(1000);
    // cy.get(':nth-child(3) > div > .MuiFormControlLabel-root > .MuiButtonBase-root').click()
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
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#UnitOfMeasure-UOMHeader').clear()
    cy.wait(1000);
    cy.get('#UnitOfMeasure-UOMHeader').type('Test')
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="7"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
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