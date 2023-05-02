import { Login } from "../../../Login.cy.js";

describe('Aging', () => {
    it('Aging CRUD', () => {
        Login();
        Save();
        View();
        Edit();
        Download();
        Delete();
    })
})
export function Save() {
    //cy.visit('http://localhost:1750/Financials/Setup/AgingBuckets')
    cy.visit('http://192.168.19.97:1750/Financials/Setup/AgingBuckets')
    cy.wait(1000);
    cy.fixture('Aging.json').then((payload) => {
        console.log({payload: payload.validData})
        const AgBkCode  = payload.validData.AgBkCode
        const AgBkDesc = payload.validData.AgBkDesc
        const AgName = payload.validData.AgName
        const AgDays = payload.validData.AgDays
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#mui-18').type(AgBkCode, {force: true}).blur()
    cy.wait(1000);
    cy.get('#mui-19').type(AgBkDesc, {force: true}).blur()
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2.css-1o7apob-MuiGrid-root > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.MTableToolbar-title-9 > div > .MuiButton-root').click()
    cy.wait(1000);
    // cy.get('.MTableToolbar-title-9 > div > .MuiButton-root').click()
    // cy.wait(1000);
    cy.get('#mui-320').type(AgName, {force: true}).blur()
    cy.wait(1000);
    cy.get('#mui-322').clear()
    cy.get('#mui-322').type(AgDays, {force: true}).blur()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(1)').click()
    cy.wait(1000);
})
}
export function View() {
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('Aging.json').then((payload) => {
        console.log({payload: payload.validData})
        const AgBkDesc1 = payload.validData.AgBkDesc1
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#mui-19').clear()
    cy.get('#mui-19').type(AgBkDesc1, {force: true}).blur()
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2.css-1o7apob-MuiGrid-root > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
})
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}