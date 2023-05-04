import { Login } from "../../../Login.cy";

describe('Journal Entry', () => {
    it('Journal Entry CRUD', () => {
        Login();
        Save();
        View();
        Edit();
        Download();
        print();
        Post();
        Delete();
    })
})

export function Save() {
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/JournalEntry')
    cy.wait(1000);
    cy.fixture('JournalEntry.json').then((payload) => {
        console.log({ payload: payload.validData })
        const JrnlDesc = payload.validData.JrnlDesc
        const JrnlTotCr = payload.validData.JrnlTotCr
        const JrnlTotDr = payload.validData.JrnlTotDr
        const LineDesc = payload.validData.LineDesc
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('#GeneralEntry-JrnlDesc').type(JrnlDesc)
        cy.wait(1000);
        cy.get('[style="color: inherit; width: 30%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment')
            .click()
        cy.get('#aactCode-paymentEntry-option-1').click()
        cy.wait(1000);
        cy.get('[index="0"] > :nth-child(2)').type(JrnlTotCr)
        cy.wait(1000);
        cy.get('[index="1"] > [style="color: inherit; width: 30%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
            .click()
        cy.get('#aactCode-paymentEntry-option-2').click()
        cy.wait(1000);
        cy.get('[index="1"] > :nth-child(3)').type(JrnlTotDr)
        cy.wait(1000);
        cy.get('[index="0"] > [style="color: inherit; width: 35%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #GeneralEntry-LineDesc')
            .type(LineDesc)
        cy.wait(1000);
        cy.get('[index="1"] > [style="color: inherit; width: 35%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #GeneralEntry-LineDesc')
            .type(LineDesc)
        cy.wait(1000);
        cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000);
        cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
        cy.wait(1000);
    })
}
export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/JournalEntry')
    cy.wait(1000);
    cy.fixture('JournalEntry.json').then((payload) => {
        console.log({ payload: payload.validData })
        const JrnlTotDrEdit = payload.validData.JrnlTotDrEdit
        const JrnlTotCrEd = payload.validData.JrnlTotCrEd
        const LineDesc = payload.validData.LineDesc
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#mui-80').clear()
    cy.get('#mui-80').type(JrnlTotDrEdit)
    cy.wait(1000);
    cy.get('[index="2"] > [style="color: inherit; width: 30%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
    .click().get('#aactCode-paymentEntry-option-3').click()
    cy.wait(1000);
    cy.get('#mui-82').type(JrnlTotCrEd)
    cy.wait(1000);
    cy.get('[index="2"] > [style="color: inherit; width: 35%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #GeneralEntry-LineDesc')
    .type(LineDesc)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]')
    .click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]')
    .click()
    cy.wait(1000);
}
export function print() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(5)').click()
    cy.wait(1000);
}
export function Post() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
    .click()
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
    .click()
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}