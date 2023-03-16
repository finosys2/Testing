import { Login } from '../Login.cy.js';

describe('Vendors', () => {
    it('Vendors CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        // Edit();
        // Clear();
        // View();
        // Delete();
        // Download();
    })
})
export function Save() {
    var VendorCode = "208" + new Date().getMilliseconds() 
    cy.visit('http://40.81.28.195:1550/Financials/Setup/Vendors')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(1000);
    cy.get('#VendorCode').type(VendorCode)
    cy.wait(1000);
    cy.get('#Vendor').type('Vendor')
    cy.wait(1000);
    cy.get('#mui-29').type(78002111)
    cy.wait(1000);
    cy.get('#mui-30').type('7893829832328')
    cy.wait(1000);
    cy.get(':nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#VendProfileDesc-VendProfileDesc-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#CurDesc-CurDesc-option-2').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
    cy.wait(1000);
    cy.get('#AccPurAcctCode-AccPurAcctCode-option-3').click()
    cy.wait(1000);
    cy.get(':nth-child(13) > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get('.MuiBox-root > div > .MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}