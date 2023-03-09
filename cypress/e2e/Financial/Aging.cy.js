import { Login } from "../Login.cy.js";

describe('Aging', () => {
    it('Aging CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        Download();
        Delete();
    })
})
export function Save() {
    var code = "013" + new Date().getMilliseconds();
    cy.visit('http://localhost:1750/Financials/Setup/AgingBuckets')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('#mui-17').type(code)
    cy.wait(2000);
    cy.get('#mui-18').type('30 Aging Bucket')
    cy.wait(2000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2.css-1o7apob-MuiGrid-root > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(2000);
    cy.get('.MTableToolbar-title-9 > div > .MuiButton-root').click()
    cy.wait(2000);
    // cy.get('.MTableToolbar-title-9 > div > .MuiButton-root').click()
    // cy.wait(2000);
    cy.get('#mui-243').type('Before due date')
    cy.wait(2000);
    cy.get('.MTableToolbar-title-9 > div > .MuiButton-root').click()
    cy.wait(2000);
    cy.get('#mui-375').type('1-30')
    cy.wait(2000);
    cy.get('#mui-377').type('30')
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(2000);
}
export function View() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(2000);
}
export function Edit() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get('#mui-18').clear()
    cy.wait(2000);
    cy.get('#mui-18').type('30 Aging Bucket Edited')
    cy.wait(2000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2.css-1o7apob-MuiGrid-root > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(2000);
    cy.get('.Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > [index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
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
export function Delete() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(2000);
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(2000);
}