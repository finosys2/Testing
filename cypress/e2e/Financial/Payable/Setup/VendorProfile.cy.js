import { Login } from "../../../Login.cy";

describe('Vendor Profile ', () => {
    it('Vendor Profile CRUD', () => {
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
    // var ProfileCode = '001' + new Date().getMilliseconds();
cy.visit('http://40.81.28.195:1110/Financials/Setup/VendorProfiles')
cy.wait(1000);
cy.fixture('VendorProfile.json').then((payload) => {
    console.log({payload: payload.validData})
    const VendProfileCode = payload.validData.VendProfileCode
    const VendProfileDesc = payload.validData.VendProfileDesc
    const CreditLimit = payload.validData.CreditLimit
    const FinChInterestRate = payload.validData.FinChInterestRate
    const PayTermCode = payload.validData.PayTermCode

//Record 1 (Save & continue)
cy.get('.MuiContainer-root > .MuiFab-root').click()
cy.wait(1000);
cy.get('#Code').type(VendProfileCode)
cy.wait(1000);
cy.get('#Description').type(VendProfileDesc)
cy.wait(1000);
cy.get(':nth-child(3) > .NumberFormat > .MuiFormControl-root').clear()
cy.get(':nth-child(3) > .NumberFormat > .MuiFormControl-root')
.type(CreditLimit)
cy.wait(1000);
cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#TaxSchedule-TaxSchedule-option-2').click({force: true})
cy.wait(1000);
cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#PayTermDesc-PayTermDesc-option-1').click({force: true})
cy.wait(1000);
cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#VendCatCode-VendCatCode-option-1').click({force: true})
cy.wait(1000);
cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#AgBkDesc-AgBkDesc-option-1').click({force: true})
cy.wait(1000);
cy.get(':nth-child(8) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#PayAcctCode-PayAcctCode-option-1').click({force: true})
cy.wait(1000);
cy.get(':nth-child(9) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#FrgtAcctCode-FrgtAcctCode-option-0').click({force: true})
cy.wait(1000);
cy.get(':nth-child(10) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#PurAcctCode-PurAcctCode-option-2').click({force: true})
cy.wait(1000);
cy.get(':nth-child(11) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
.click().get('#DiscAcctCode-DiscAcctCode-option-0').click({force: true})
cy.wait(1000);
cy.get('.MuiGrid-grid-xs-3 > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
cy.wait(1000);
//finance charges
cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
cy.wait(1000);
cy.get(':nth-child(2) > .MuiBox-root > .NumberFormat > .MuiFormControl-root').clear()
cy.get(':nth-child(2) > .MuiBox-root > .NumberFormat > .MuiFormControl-root')
.type(FinChInterestRate)
cy.wait(1000);
cy.get(':nth-child(3) > .MuiBox-root > .NumberFormat > .MuiFormControl-root').clear()
cy.get(':nth-child(3) > .MuiBox-root > .NumberFormat > .MuiFormControl-root')
.type(PayTermCode)
cy.wait(1000);
cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
cy.wait(7000);
cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
cy.wait(1000);

})}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('VendorProfile.json').then((payload) => {
        console.log({payload: payload.validData})
        const VendProfileDesc = payload.validData.VendProfileDesc
        const CreditLimit = payload.validData.CreditLimit
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Description').clear()
    cy.get('#Description').type(VendProfileDesc)
    cy.wait(1000);
    cy.get('#mui-254').clear()
    cy.get('#mui-254').type(CreditLimit)
    cy.wait(1000);
    cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    .click().get('#TaxSchedule-TaxSchedule-option-2').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(8) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root')
    .click().get('#PayAcctCode-PayAcctCode-option-3').click({force: true})
    cy.wait(1000);
    //Active 
    cy.get('.MuiGrid-grid-xs-1 > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(7000);

})}
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
    cy.get('#VendProfileCode').type('001')
    cy.wait(1000);
    cy.get('#VendProfileDesc').type('Vendors default')
    cy.wait(1000);
    cy.get('#VendProfileCode').clear()
    cy.wait(1000);
    cy.get('#VendProfileDesc').clear()
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}