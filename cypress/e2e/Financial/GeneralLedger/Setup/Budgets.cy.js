// import { Login } from "../../../Login.cy";
// describe('Budgets ', () => {  
//     it('Budgets CRUD', () => {  
//         // cy.visit('http://localhost:1750')  
//         Login();  
//         Save(); 
//         View();  
//         Edit();   
//         Download();   
//         Delete();  
//     })  
// })
export function Save(){
var year = '2023' + new Date().getMilliseconds();
//cy.visit('http://localhost:1750/Financials/Setup/Budgets')
cy.visit('http://40.81.28.195:1550/Financials/Setup/Budgets')
cy.wait(2000);
cy.get('.MuiContainer-root > :nth-child(1) > .MuiFab-root').click()
cy.wait(2000);
cy.get('#mui-61').type(year)
cy.wait(2000);
cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(2000);
cy.get('[data-value="2023"]').click()
cy.wait(2000);
cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(2000);
cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
cy.wait(2000);
cy.get(':nth-child(5) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(2000);
cy.get('[data-value="1159"]').click()
cy.wait(2000);
cy.get('#Description').type('Budget for 2023')
cy.wait(2000);
cy.get('.MuiGrid-grid-sm-1 > .MuiButton-root').click()
cy.wait(2000);
cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
cy.wait(7000);
// cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
// cy.wait(2000);
cy.get('.MuiContainer-root > :nth-child(1) > .MuiFab-root').click()
cy.wait(2000);
cy.get('#mui-49').type('2022')
cy.wait(2000);
cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(2000);
cy.get('[data-value="2023"]').click()
cy.wait(2000);
cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(2000);
cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
cy.wait(2000);
cy.get(':nth-child(5) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(2000);
cy.get('[data-value="1159"]').click()
cy.wait(2000);
cy.get('#Description').type('Budget for 2022')
cy.wait(2000);
cy.get('.MuiGrid-grid-sm-1 > .MuiButton-root').click()
cy.wait(2000);
cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
cy.wait(2000);

}
export function View(){

}