import { Login } from "../../../Login.cy";

describe('Bank Transfer', () => {
    it('Bank Transfer CRUD', () => {
        // cy.visit('http://localhost:1750')
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
    cy.visit('http://40.81.28.195:1110/Financials/Transaction/BankTransfers')
    cy.wait(1000);
    cy.fixture('BankTransfer.json').then((payload) => {
        const BTrfDesc = payload.validData.BTrfDesc
        const DstBTrfAmount = payload.validData.DstBTrfAmount
        const DstBTrfAmountCur = payload.validData.DstBTrfAmountCur
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('#BankTransfer-BTrfDesc').type(BTrfDesc)
        cy.wait(1000);
        //Bank source lookup
        cy.get(':nth-child(1) > .MuiCard-root > .MuiCardContent-root > .MuiGrid-spacing-xs-2 > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get("#SrcBankCode-undefined-option-0").click({force:true})
        cy.wait(1000);
        //Bank destination lookup
        cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click().get("#DstBankCode-undefined-option-0").click({force:true})
        cy.wait(1000);
        cy.get('#mui-63').clear()
        cy.get('#mui-63').type(DstBTrfAmount)
        cy.wait(1000);
        cy.get('#mui-66').clear()
        cy.get('#mui-66').type(DstBTrfAmountCur)
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
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]')
    .click()
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
    //Bank source lookup
    cy.get(':nth-child(1) > .MuiCard-root > .MuiCardContent-root > .MuiGrid-spacing-xs-2 > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get("#SrcBankCode-undefined-option-1").click({force:true})
    cy.wait(1000);
    //Bank destination lookup
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get("#DstBankCode-undefined-option-1").click({force:true})
    cy.wait(1000);
    cy.get('#mui-149').clear()
    cy.get('#mui-149').type('15000')
    cy.wait(1000);
    cy.get('#mui-152').clear()
    cy.get('#mui-152').type('15000')
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
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)')
    .click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)')
    .click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}