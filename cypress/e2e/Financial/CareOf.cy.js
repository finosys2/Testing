import { Login } from '../Login.cy.js';

describe('Care Of', () => {
    it('Care Of CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        Edit();
        View();
        Delete();
        Download();
        Search();
    })
})

export function Save() {
    cy.fixture('CareOf').then((payload) => {
        const { CareOfCode } = payload.Header;
        const { CareOf } = payload.Header;
        cy.visit('http://40.81.28.195:1550/Financials/Setup/CareOf')
        cy.wait(2000);
        cy.get('.MuiContainer-root > .MuiFab-root').click()
        cy.wait(1000);
        cy.get('#mui-17').type(CareOfCode)
        cy.wait(1000);
        cy.get('#mui-18').type(CareOf)
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
        cy.wait(1000);
        cy.get('.MuiContainer-root > .MuiFab-root').click()
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
        cy.wait(1000);
    })
}
export function Edit() {
    cy.fixture('CareOf').then((payload) => {
        const { CareOf } = payload.Header;

        cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(2000);
        cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
        cy.wait(2000);
        cy.get('#mui-18').clear()
        cy.wait(1000);
        cy.get('#mui-18').type(CareOf)
        cy.wait(1000);
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
        cy.wait(1000);
    })
}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
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
    cy.get('#CareOfCode').type('54')
    cy.wait(1000);
    cy.get('#CareOf').type('test')
    cy.wait(1000);
    cy.get('#CareOfCode').clear()
    cy.wait(1000);
    cy.get('#CareOf').clear()
    cy.wait(1000);
}