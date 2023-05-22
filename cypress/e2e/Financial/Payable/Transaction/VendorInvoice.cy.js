import { Login } from "../../../Login.cy";

describe('VendorInvoice', () => {
    it('VendorInvoice CRUD', () => {
        Login();
        Save();
        View();
        Edit();
        Download();
        Post();
        print();
        Delete();
    })
})
export function Save() {
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/VendorInvoice')
    cy.wait(1000);
    cy.fixture('VendorInvoice.json').then((payload) => {
        console.log({ payload: payload.validData })
        const VenRefNo = payload.validData.VenRefNo
        const Amount_Cur = payload.validData.Amount_Cur
        const UnitQuantity = payload.validData.UnitQuantity
        const LineDescription = payload.validData.LineDescription

        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        //Vendor lookup
        cy.get('.MuiGrid-grid-xs-true > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-0").click({ force: true })
        cy.wait(1000);
        cy.get('#VendorInv-CardCont-VenRefNo').type(VenRefNo)
        cy.wait(1000);
        //location dropdown
        cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-0").click({ force: true })
        cy.wait(1000);
        //job dropdown
        cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#Invoice-cardInfo-option-2").click({ force: true })
        cy.wait(1000);
        //code lookup
        cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get("#aactCode-paymentEntry-option-1").click({ force: true })
        cy.wait(1000);
        cy.get('#VendorInv-DetailCont-Quantity').clear()
        cy.get('#VendorInv-DetailCont-Quantity').type(UnitQuantity)
        cy.wait(1000);
        cy.get('#VendorInv-DetailCont-UnitPrice').clear()
        cy.get('#VendorInv-DetailCont-UnitPrice').type(Amount_Cur)
        cy.wait(1000);
        //Tax lookup
        // cy.get('[style="color: inherit; width: 10%; max-width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"]')
        // .click().get("#aactCode-paymentEntry-option-0").click({force:true})
        // cy.wait(1000);
        cy.get('#VendorInv-DetailCont-LineDescription').type(LineDescription)
        cy.wait(1000);
        //save button
        cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000);
        //back button
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
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
        .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    //location dropdown
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get("#Invoice-cardInfo-option-1").click({ force: true })
    cy.wait(1000);
    //code lookup
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get("#aactCode-paymentEntry-option-2").click({ force: true })
    cy.wait(1000);
    cy.get('#VendorInv-DetailCont-Quantity').clear()
    cy.get('#VendorInv-DetailCont-Quantity').type('60')
    cy.wait(1000);
    cy.get('#VendorInv-DetailCont-UnitPrice').clear()
    cy.get('#VendorInv-DetailCont-UnitPrice').type('200')
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]')
        .click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
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
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
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
}
