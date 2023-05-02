import { Login } from "../../../Login.cy";

describe('Tax Schedule', () => {
    it('Tax Schedule CRUD', () => {
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
    //cy.visit('http://40.81.28.195:1550/Financials/Setup/TaxSchedule')
    cy.visit('http://192.168.19.97:1750/Financials/Setup/TaxSchedule')
    cy.wait(1000);
    cy.fixture('TaxSchdule.json').then((payload) => {
        console.log({payload: payload.validData})
        const TaxScheduleCode  = payload.validData.TaxScheduleCode
        const TaxSchedule = payload.validData.TaxSchedule

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#mui-18').type(TaxScheduleCode, { force: true }).blur()
    cy.wait(1000);
    cy.get('#mui-19').type(TaxSchedule, { force: true }).blur()
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-10.css-1udccdh-MuiGrid-root > div > div:nth-child(1) > div > div > div > div.MuiListItemIcon-root.css-1jdo60o-MuiListItemIcon-root > span > input').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(1000);
})
}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('TaxSchdule.json').then((payload) => {
        console.log({payload: payload.validData})
        const TaxSchedule = payload.validData.TaxSchedule

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    //cy.get('[index="8"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#mui-19').clear()
    cy.wait(1000);
    cy.get('#mui-19').type(TaxSchedule, { force: true }).blur()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(1000);
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
export function Search(){
    cy.get('#TaxScheduleCode').type('001', { force: true }).blur()
    cy.wait(1000);
    cy.get('#TaxSchedule').type('Sales', { force: true }).blur()
    cy.wait(1000);
    cy.get('#TaxScheduleCode').clear()
    cy.get('#TaxSchedule').clear()
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiCardActions-root > .MuiGrid-root > .MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
