import { Login } from '../../../Login.cy.js';

describe('Bank', () => {
    it('Bank CRUD', () => {
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
    //cy.visit('http://40.81.28.195:1550/Financials/Setup/Bank')
    cy.visit('http://192.168.19.97:1750/Financials/Setup/Bank')
    cy.wait(1000);
    cy.fixture('Bank.json').then((payload) => {
        console.log({payload: payload.validData})
        const BankCode  = payload.validData.BankCode
        const BankName = payload.validData.BankName
        const BankAC = payload.validData.BankAC
        const NextChequeNo = payload.validData.NextChequeNo
        const ReportName = payload.validData.ReportName
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#mui-18').type(BankCode, { force: true }).blur()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #BankName')
    .type(BankName, { force: true }).blur()
    cy.wait(1000);
    cy.get(':nth-child(3) > .css-1p5q5e5-MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#CurName-undefined-option-0').click({ force: true })
    cy.wait(1000);
    cy.get(':nth-child(5) > .css-1p5q5e5-MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#Account-undefined-option-2').click({ force: true })
    cy.wait(1000);
    cy.get(':nth-child(7) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #AccNo').type(BankAC)
    cy.wait(1000);
    cy.get(':nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #AccNo').type(NextChequeNo)
    cy.wait(1000);
    cy.get(':nth-child(9) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #AccNo').type(ReportName)
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div:nth-child(11) > div > label > span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.Mui-checked.MuiCheckbox-root.MuiCheckbox-colorPrimary.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
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
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('Bank.json').then((payload) => {
        console.log({payload: payload.validData})
        const BankName = payload.validData.BankName
        const NextChequeNo = payload.validData.NextChequeNo
        const ReportName = payload.validData.ReportName

    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #BankName').clear()
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInput-root > #BankName').
    type(BankName, { force: true })
    cy.wait(1000);
    cy.get(':nth-child(3) > .css-1p5q5e5-MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    .click().get('#CurName-undefined-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > .css-1p5q5e5-MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    .click().get('#Account-undefined-option-4').click()
    cy.wait(1000);
    cy.get(':nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #AccNo')
    .clear()
    cy.wait(1000);
    cy.get(':nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInput-root > #AccNo')
    .type(NextChequeNo, { force: true })
    cy.wait(1000);
    cy.get(':nth-child(9) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #AccNo')
    .clear()
    cy.wait(1000);
    cy.get(':nth-child(9) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #AccNo')
    .type(ReportName)
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
export function Search() {
    cy.get('#BankCode').type('Bank')
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #BankName').type('Bank')
    cy.wait(1000);
    cy.get('#BankCode').clear()
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #BankName').clear()
}
export function Delete() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}