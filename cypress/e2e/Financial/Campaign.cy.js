import { Login } from '../Login.cy.js';

describe('Campaign', () => {
    it('Campaign CRUD', () => {
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
    cy.fixture('Campaign').then((payload) => {
        const { CampaignCode } = payload.Header;
        const { Campaign } = payload.Header;
        cy.visit('http://40.81.28.195:1550/Financials/Setup/Campaigns')
        cy.wait(2000);
        cy.get('#root > div > main > div > div.MuiButtonBase-root.MuiFab-root.MuiFab-circular.MuiFab-sizeLarge.MuiFab-secondary.MuiFab-root.MuiFab-circular.MuiFab-sizeLarge.MuiFab-secondary.css-12itd30-MuiButtonBase-root-MuiFab-root').click()
        cy.wait(1000);
        cy.get('#mui-17 ').type(CampaignCode)
        cy.wait(1000);
        cy.get('#mui-18').type(Campaign)
        cy.wait(1000);
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
        cy.wait(1000);
        cy.get('#root > div > main > div > div.MuiButtonBase-root.MuiFab-root.MuiFab-circular.MuiFab-sizeLarge.MuiFab-secondary.MuiFab-root.MuiFab-circular.MuiFab-sizeLarge.MuiFab-secondary.css-12itd30-MuiButtonBase-root-MuiFab-root').click()
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
        cy.wait(1000);
    })
}
export function Edit() {
    cy.fixture('Campaign').then((payload) => {
        const { Campaign } = payload.Header;
        cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(2000);
        cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
        cy.wait(2000);
        cy.get('#mui-18').clear()
        cy.wait(1000);
        cy.get('#mui-18').type(Campaign)
        cy.wait(1000);
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.wait(1000);
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
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
    cy.get('#CampaignCode').type(788)
    cy.wait(1000);
    cy.get('#Campaign').type('test')
    cy.wait(1000);
    cy.get('#CampaignCode').clear()
    cy.wait(1000);
    cy.get('#Campaign').clear()
    cy.wait(1000);
}