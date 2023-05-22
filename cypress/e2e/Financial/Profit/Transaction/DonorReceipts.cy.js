import { Login } from '../../../Login.cy.js';

describe('Donor Receipt', () => {
    it('Donor Receipt CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        Download();
        Print();
        Post();
        Delete();
    })
})

export function Save() {
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/DonorReceipts')
    cy.wait(2000);
    cy.fixture('DonorReceipt.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Amount = payload.validData.Amount
        const Remarks = payload.validData.Remarks
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get(':nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root')
            .click()
        cy.wait(1000);
        cy.get('.MuiDayPicker-monthContainer > :nth-child(2) > :nth-child(3)').click()
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#Donor-Donor-option-1').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#Campaign-Campaign-option-2').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#Accounts-RecAcctCode-option-0').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#Bank-BankCode-option-2').click({ force: true })
        cy.wait(1000);
        cy.get('#DonorReceipt-Amount').clear()
        cy.get('#DonorReceipt-Amount').type(Amount)
        cy.wait(1000);
        cy.get('#DonorReceipt-Remarks').type(Remarks)
        cy.wait(1000);
        //Save 
        cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000);
        //back
        cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
        cy.wait(1000);
    })
}
export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get('#Accounts-RecAcctCode-option-1').click({ force: true })
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get('#Bank-BankCode-option-3').click({ force: true })
    cy.wait(1000);
    cy.get('#DonorReceipt-Amount').clear()
    cy.get('#DonorReceipt-Amount').type('50000')
    cy.wait(1000);
    cy.get('#DonorReceipt-Remarks').clear()
    cy.get('#DonorReceipt-Remarks').type('receipt edited')
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
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
export function Print() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(5)').click()
    cy.wait(1000);
}
export function Post() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
        .click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}