import { Login } from '../../../Login.cy.js';

describe('Customer Profile', () => {
    it('Customer Profile CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        // Edit();
        // Clear();
        // View();
        // Delete();
        // Download();
        Search();
    })
})
export function Save() {
    cy.fixture('CustProfiles').then((payload) => {
        const CPCode = payload.validData.CPCode;
        const CP = payload.validData.CP;
        const CL = payload.validData.CL;

    cy.visit('http://40.81.28.195:1550/Financials/Setup/CustomerProfiles')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiFormControl-root').type('3232')
    // cy.get('#CPCode').type(CPCode)
    cy.wait(1000);
    cy.get('#CP').type(CP)
    cy.wait(1000);
    cy.get(':nth-child(3) > .NumberFormat > .MuiFormControl-root').clear()
    cy.get(':nth-child(3) > .NumberFormat > .MuiFormControl-root').type(CL)
    cy.wait(1000);
    cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#PayTermDesc-undefined-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#collector-undefined-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#salePer-undefined-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#orderBooker-undefined-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(8) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#CustCat-CustCat-option-3').click()
    cy.wait(1000);
    cy.get(':nth-child(9) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#CustTer-undefined-option-2').click()
    cy.wait(1000);
    cy.get(':nth-child(10) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#AgBk-AgBk-option-4').click()
    cy.wait(1000);
    cy.get(':nth-child(11) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#TaxSchedule-undefined-option-5').click()
    cy.wait(1000);
    cy.get(':nth-child(12) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#RecAcctCode-RecAcctCode-option-6').click()
    cy.wait(1000);
    cy.get(':nth-child(13) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#FrgtAcctCode-FrgtAcctCode-option-5').click()
    cy.wait(1000);
    cy.get(':nth-child(14) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#SaleAcctCode-SaleAcctCode-option-6').click()
    cy.wait(1000);
    cy.get(':nth-child(15) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#DiscAcctCode-DiscAcctCode-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(16) > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get(':nth-child(17) > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    // cy.get('#mui-30').type('100')
    // cy.wait(1000);
    // cy.get('#mui-31').type('200')
    // cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
    })
}
export function Clear() {
    cy.fixture('CustProfiles').then((payload) => {
        const CPCode = payload.validData.CPCode;
        const CP = payload.validData.CP;
        const CL = payload.validData.CL;
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(1000);
    cy.get('#CPCode').type(CPCode)
    cy.wait(1000);
    cy.get('#CP').type(CP)
    cy.wait(1000);
    cy.get(':nth-child(3) > .NumberFormat > .MuiFormControl-root').clear()
    cy.get(':nth-child(3) > .NumberFormat > .MuiFormControl-root').type(CL)
    cy.wait(1000);
    cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#PayTermDesc-undefined-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#collector-undefined-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#salePer-undefined-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(16) > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(3) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    })
}

export function Edit() {
    cy.fixture('CustProfiles').then((payload) => {
        const CP = payload.validData.CP;
        const CL = payload.validData.CL;

    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get('#CP').clear()
    cy.wait(1000);
    cy.get('#CP').type(CP)
    cy.wait(1000);
    cy.get(':nth-child(3) > .NumberFormat > .MuiFormControl-root').clear()
    cy.get(':nth-child(3) > .NumberFormat > .MuiFormControl-root').type(CL)
    cy.wait(1000);
    cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#PayTermDesc-undefined-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#collector-undefined-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#salePer-undefined-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(15) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    .get('#DiscAcctCode-DiscAcctCode-option-0').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
    })
}

export function View() {
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(1)').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}

export function Delete() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(2000);
}
export function Search() {
    cy.get('#CPCode').type('88')
    cy.wait(1000);
    cy.get('#CP').type('test')
    cy.wait(1000);
    cy.get('#CPCode').clear()
    cy.wait(1000);
    cy.get('#CP').clear()
    cy.wait(1000);
}
