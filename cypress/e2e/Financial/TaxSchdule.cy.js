import { Login } from "../Login.cy";

describe('Tax Schedule', () => {
    it('Tax Schedule CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        Download();
        View();
        Edit();
        Delete();
    })
})
export function Save() {  
    var number = "88990" + new Date().getMilliseconds() + "021"  
    //cy.visit('http://localhost:1750/Financials/Setup/TaxSchedule')
    cy.visit('http://40.81.28.195:1550/Financials/Setup/TaxSchedule')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('#mui-17').type(number)
    cy.wait(2000);
    cy.get('#mui-18').type('Income Tax 2021') 
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get('.MuiList-root > :nth-child(6)').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(2000);
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
export function View() {
    cy.get('[index="8"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(2000);
}
export function Edit() {
    cy.get('[index="8"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    //cy.get('[index="8"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get('#mui-17').clear()
    cy.wait(2000);
    cy.get('#mui-17').type('44488976')
    cy.wait(2000);
    cy.get('#mui-18').clear()
    cy.wait(2000);
    cy.get('#mui-18').type('Income SaleTax')
    cy.wait(2000);
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(2000);
}
export function Delete() {
    cy.get('[index="8"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiCardActions-root > .MuiGrid-root > .MuiButton-outlined').click()
    cy.wait(2000);
    cy.get('[index="8"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
