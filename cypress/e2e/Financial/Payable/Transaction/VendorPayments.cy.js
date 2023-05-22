import { Login } from "../../../Login.cy";

describe('VendorPayments', () => {
    it('VendorPayments CRUD', () => {
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
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/VendorPayments')
    cy.wait(1000);
    cy.fixture('VendorPayment.json').then((payload) => {
        console.log({ payload: payload.validData })
        const CheckDocNo = payload.validData.CheckDocNo
        const OnAccountCur = payload.validData.OnAccountCur
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('.MuiGrid-grid-xs-true > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-0").click({ force: true })
        cy.wait(1000);
        //payment Mode lookup
        cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-2").click({ force: true })
        cy.wait(1000);
        //Bank lookup
        cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-1").click({ force: true })
        cy.wait(1000);
        cy.get('#VendorPay-CardCont-CheckDocNo').type(CheckDocNo)
        cy.wait(1000);
        //currency lookup
        // cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        //     .click().get("#Invoice-cardInfo-option-1").click({ force: true })
        // cy.wait(1000);
        //Job dropdown
        cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-1").click({ force: true })
        cy.wait(1000);
        //Amount
        cy.get('#VendorPay-CardCont-SubTotal').clear()
        cy.get('#VendorPay-CardCont-SubTotal').type(OnAccountCur)
        cy.wait(1000);
        //Taxes
        cy.get('.css-1nrlq1o-MuiFormControl-root > .MuiInputBase-adornedEnd > .MuiInputAdornment-root > .MuiButtonBase-root')
            .click()
        cy.wait(1000);
        //Taxdetail lookup
        cy.get('[style="color: inherit; width: 40%; max-width: 40%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#actCode-paymentEntry-option-1').click({ force: true })
        cy.wait(1000);
        //Ok button
        cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButtonBase-root')
            .click()
        cy.wait(1000);
        //Save button
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
    cy.fixture('VendorPayment.json').then((payload) => {
        console.log({ payload: payload.validData })
        const OnAccountCurEd = payload.validData.OnAccountCurEd
        cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
            .click()
        cy.wait(1000);
        cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
        cy.wait(1000);
        //payment Mode lookup
        cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-1").click({ force: true })
        cy.wait(1000);
        //Bank lookup
        cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-0").click({ force: true })
        cy.wait(1000);
        cy.get('#VendorPay-CardCont-SubTotal').clear()
        cy.get('#VendorPay-CardCont-SubTotal').type(OnAccountCurEd)
        cy.wait(1000);
        //Save button
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
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
        .click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]')
        .click()
    cy.wait(1000);
}
export function print() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
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
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
        .click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
        .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
        .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);

}