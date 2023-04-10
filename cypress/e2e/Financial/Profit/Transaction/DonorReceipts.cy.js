import { Login } from '../../../Login.cy.js';

describe('Donor Receipt', () => {
    it('Donor Receipt CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
        // Edit();
        // View();
        // Delete();
        // Download();
    })
})

export function Save() {
    cy.visit('http://40.81.28.195:1550/Financials/Transaction/DonorReceipts')
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiFab-root').click()
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiDayPicker-monthContainer > :nth-child(2) > :nth-child(3)').click()
    cy.wait(1000);
    cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.wait(1000);
    cy.get('#Donor-Donor-option-1').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.wait(1000);
    cy.get('#Campaign-Campaign-option-2').click()
    cy.wait(1000);
    cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.wait(1000);
    cy.get('#Accounts-RecAcctCode-option-0').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.wait(1000);
    cy.get('#Bank-BankCode-option-2').click()
    cy.wait(1000);
    cy.get('#mui-36')
}