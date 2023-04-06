import { Login } from "../../../Login.cy";

// describe('Currency', () => {  
//     it('Currency CRUD', () => {  
//         // cy.visit('http://localhost:1750')  
//         Login();  
//         Save(); 
//         View();  
//         Edit();   
//         Download();   
//         Delete();  
//     })  
// })
export function Save(){
var currCode = "004" + new Date().getMilliseconds();
cy.visit('http://localhost:1750/Financials/Setup/Currencies')
cy.wait(2000);
cy.get('.MuiContainer-root > .MuiFab-root').click()
cy.wait(2000);
cy.get('#mui-17').type(currCode)
cy.wait(2000);
cy.get('#mui-18').type('PKR')
cy.wait(2000);
cy.get('#mui-19').type('Rs')
cy.wait(2000);
cy.get('#mui-20').type('paisa')
cy.wait(2000);
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
cy.wait(7000);
cy.get('.MuiContainer-root > .MuiFab-root').click()
cy.wait(2000);
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
cy.wait(2000);
}
export function View(){
    //cy.visit('http://localhost:1750/Financials/Setup/Currencies')
    cy.wait(2000);
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    // cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(1)').click()
    // cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(2000);
}
export function Edit(){
    // cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    // cy.wait(2000);
    // cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    // cy.wait(2000);
//edit mode is not working***ERROR***
}
export function Download(){
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(2000);
}
export function Delete(){
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(2000);
    cy.get('[index="6"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiCardActions-root > .MuiGrid-root > .MuiButton-contained').click()
    cy.wait(2000);
}
