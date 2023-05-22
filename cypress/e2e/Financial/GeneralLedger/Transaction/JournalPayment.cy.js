import { Login } from "../../../Login.cy";

describe('Journal Payment', () => {
    it('Journal Payment CRUD', () => {
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
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/JournalPayment')
    cy.wait(1000);
    cy.fixture('JournalPayment.json').then((payload) => {
        console.log({ payload: payload.validData })
        const CheckDocNo = payload.validData.CheckDocNo
        const CatDesc = payload.validData.CatDesc
        const LineDr = payload.validData.LineDr 
        const LineDesc = payload.validData.LineDesc 
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('.MuiGrid-container > :nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
        .click().get('#Bank-undefined-option-1').click({force:true})
        cy.wait(1000);
        cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
        .click().get('#Card-undefined-option-1').click({force:true})
        cy.wait(1000);
        cy.get('#GeneralPayment-CheckDocNo').type(CheckDocNo)
        cy.wait(1000);
        cy.get('#GeneralPayment-JrnlDesc').type(CatDesc)
        cy.wait(1000);
        //account lookup
        cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)')
        .click().get('#aactCode-paymentEntry-option-1').click({force:true})
        cy.wait(1000);
        cy.get('[index="0"] > :nth-child(2) > .NumberFormat > .MuiFormControl-root > .MuiInputBase-root > #GeneralPayment-LineDr')
        .clear()
        cy.get('[index="0"] > :nth-child(2) > .NumberFormat > .MuiFormControl-root > .MuiInputBase-root > #GeneralPayment-LineDr')
        .type(LineDr)
        cy.wait(1000);
        //Tax lookup
        cy.get('[index="0"] > [style="color: inherit; width: 20%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"]')
        .click().get('#aactCode-paymentEntry-option-1').click({force:true})
        cy.wait(1000);
        cy.get('#GeneralPayment-LineDesc').type(LineDesc)
        cy.wait(1000);
        cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000);
        cy.get('.MuiGrid-spacing-xs-3 > :nth-child(1) > .MuiButtonGroup-root').click()
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
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/JournalPayment')
    cy.wait(1000);
    cy.fixture('JournalPayment.json').then((payload) => {
        console.log({ payload: payload.validData })
        const CatDescEd = payload.validData.CatDescEd
        const LineDrEd = payload.validData.LineDrEd
        const LandedAmount = payload.validData.LandedAmount
        cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
        .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    .click().get('#Bank-undefined-option-2').click({force:true})
    cy.wait(1000);
    cy.get('#GeneralPayment-JrnlDesc').clear()
    cy.get('#GeneralPayment-JrnlDesc').type(CatDescEd)
    cy.wait(1000);
    cy.get('#mui-223').clear()
    cy.get('#mui-223').type(LineDrEd)
    cy.wait(1000);
    //landed cost
    cy.get(':nth-child(13) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiGrid-grid-xs-4 > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    .click().get('#CatCode-undefined-option-0').click({force:true})
    cy.wait(1000);
    //add btn
    cy.get('.MuiDialogContent-root > .MuiGrid-container > .MuiGrid-grid-xs-2 > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    // cy.get('.JV-lookup > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment')
    // .click().get('#0.47591870451485696-undefined-option-0').click({force:true})
    // cy.wait(1000);
    cy.get('#mui-230').clear()
    cy.get('#mui-230').type(LandedAmount)
    cy.wait(1000);
    //save
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    //close
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
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
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(5)').click()
    cy.wait(1000);
}
export function Post() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
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