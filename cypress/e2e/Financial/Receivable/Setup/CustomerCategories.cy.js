import { Login } from '../../../Login.cy.js';

describe('Customer Categories', () => {
    it('Customer Categories CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();       
        Edit();
        Download();
        Search();
        Delete();    
    })
})
export function Save() {
    cy.visit('http://40.81.28.195:1110/Financials/Setup/CustomerCategories')
    cy.wait(2000);

    cy.fixture('CustomerCategory.json').then((payload) => {
        const  CustCatCode  = payload.validData.CustCatCode;
        const  CustCat  = payload.validData.CustCat;
        
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('#CustomerCategories-CustCatCode').type(CustCatCode)
        cy.wait(1000);
        cy.get('#CustomerCategories-CustCat').type(CustCat)
        cy.wait(1000);
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)')
        .click()
        cy.wait(1000);
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
        cy.wait(1000);
    })
}
export function View() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('CustomerCategory.json').then((payload) => {
        const CustCat = payload.validData.CustCat;
        cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(2000);
        cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
        cy.wait(2000);
        cy.get('#CustomerCategories-CustCat').clear()
        cy.get('#CustomerCategories-CustCat').type(CustCat)
        cy.wait(1000);
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
        cy.wait(1000);
    })
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
export function Search() {
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #CustCatCode').type('8894')
    cy.wait(2000);
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #CustCat').type('test')
    cy.wait(2000);
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #CustCatCode').clear()
    cy.wait(2000);
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #CustCat').clear()
    cy.wait(2000);
}
export function Delete() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}
