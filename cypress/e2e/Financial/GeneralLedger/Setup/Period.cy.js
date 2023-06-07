import { Login } from "../../../Login.cy.js";
describe('Period', () => {
    it('Period CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        Search();
        Delete();   
    })
});
export function Save() {
    //cy.visit('http://40.81.28.195:1110/Financials/Setup/Period')
    cy.visit('https://apps.finosys-sbs.com/Financials/Setup/Period')
    cy.wait(1000);
    cy.fixture('Period.json').then((payload) => {
        console.log({payload: payload.validData})
        const YearID  = payload.validData.YearID
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiButton-root').click()
    cy.wait(1000);
    cy.get('#Period-YearID').type(YearID , { force: true }).blur()
    cy.wait(1000);
    cy.get('[index="0"] > :nth-child(2) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[index="1"] > :nth-child(3) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[index="1"] > :nth-child(5) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[index="4"] > :nth-child(6) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(7000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiButton-root').click()
    cy.wait(1000);
    cy.get('#Period-YearID').type(YearID , { force: true }).blur()
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(3) > .MuiButton-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(6000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
})
}
export function View(){
    cy.get('[index="11"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit(){ 
    cy.fixture('Period.json').then((payload) => {
        console.log({payload: payload.validData})
        const YearID  = payload.validData.YearID
    cy.get('[index="12"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(4) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[index="0"] > :nth-child(6) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[index="0"] > :nth-child(4) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[index="1"] > :nth-child(2) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})
}
export function Search(){
    cy.get('#YearID').type("202")
    cy.wait(1000);
    cy.get('#YearID').clear()
    cy.wait(1000);
}
export function Delete(){
    cy.get('[index="14"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="14"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(3000);  
}
