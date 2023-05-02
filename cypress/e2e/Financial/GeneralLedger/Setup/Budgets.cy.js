import { Login } from "../../../Login.cy";
describe('Budgets ', () => {  
    it('Budgets CRUD', () => {  
        // cy.visit('http://localhost:1750')  
        Login();  
        Save(); 
        View();  
        Edit();   
        Download();   
        Delete();  
    })  
})
export function Save(){
//cy.visit('http://localhost:1750/Financials/Setup/Budgets')
cy.visit('http://40.81.28.195:1110/Financials/Setup/Budgets')
cy.wait(1000);
cy.fixture('Budget.json').then((payload) => {
    console.log({payload: payload.validData})
    const Version = payload.validData.Version
    const Description = payload.validData.Description
cy.get('[aria-label="Add New"]').click()
cy.wait(1000);
cy.get('#Budget-Version').type(Version)
cy.wait(1000);
//date picker
cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root')
.click()
cy.get('.MuiDayPicker-monthContainer > :nth-child(5) > :nth-child(4)').click()
cy.wait(1000);

cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(1000);
cy.get('[data-value="2023"]').click()
cy.wait(1000);
cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(1000);
cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
cy.wait(1000);
cy.get(':nth-child(5) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(1000);
cy.get('[data-value="1159"]').click()
cy.wait(1000);
cy.get('#Budget-Description').type(Description)
cy.wait(1000);
cy.get('.MuiGrid-grid-sm-1 > .MuiButtonBase-root').click()
cy.wait(1000);
cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
cy.wait(7000);
// cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
// cy.wait(1000);
cy.get('.MuiContainer-root > :nth-child(1) > .MuiFab-root').click()
cy.wait(1000);
cy.get('#mui-49').type('2022')
cy.wait(1000);
cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(1000);
cy.get('[data-value="2023"]').click()
cy.wait(1000);
cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(1000);
cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
cy.wait(1000);
cy.get(':nth-child(5) > :nth-child(1) > .MuiFormControl-root').click()
cy.wait(1000);
cy.get('[data-value="1159"]').click()
cy.wait(1000);
cy.get('#Description').type('Budget for 2022')
cy.wait(1000);
cy.get('.MuiGrid-grid-sm-1 > .MuiButton-root').click()
cy.wait(1000);
cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
cy.wait(1000);

})}
export function View(){

}
export function Edit(){

}
export function Download(){

}
export function Delete(){

}