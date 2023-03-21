import { Login } from "../../Login.cy";

describe('Bank Transfer ', () => {  
    it('Bank Transfer CRUD', () => {  
        // cy.visit('http://localhost:1750')  
        Login();  
        Save(); 
        // View();  
        // Edit();   
        // Download();   
        // Delete();  
    })  
})
export function Save(){
cy.visit('http://40.81.28.195:1550/Financials/Transaction/BankTransfers')
cy.wait(2000);
cy.get('.MuiGrid-root > .MuiFab-root').click()
cy.wait(1000);
cy.get('#Decription').type('payment Transfer')
cy.wait(1000);
cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
cy.wait(1000);
cy.get('#SrcBankCode-undefined-option-0').click()
cy.wait(1000);
cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root').click()
cy.wait(1000);
cy.get('#DstBankCode-undefined-option-0').click()
cy.wait(1000);
cy.get('#mui-48').clear()
cy.get('#mui-48').type('750000')
cy.wait(1000);
cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
cy.wait(7000);
cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
cy.wait(1000);

}
export function View(){

}
export function Edit(){

}
export function Download(){

}
export function Post(){

}
export function Print(){

}
export function Delete(){

}