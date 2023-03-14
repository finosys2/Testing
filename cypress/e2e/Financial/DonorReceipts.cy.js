import { Login } from '../Login.cy.js';

describe('Donor Receipt', () => {
    it('Donor Receipt CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
        Edit();
        View();
        Delete();
        Download();
    })
})

export function Save() {
    var CareOfCode = "54" + new Date().getMilliseconds() 
    cy.visit('http://40.81.28.195:1550/Financials/Transaction/DonorReceipts')
    cy.wait(2000);
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(1000);
    cy.get('#mui-17 ').type(CareOfCode)
    cy.wait(1000);
}