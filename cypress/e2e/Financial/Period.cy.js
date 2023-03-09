import { Login } from "../Login.cy.js";

describe('Period', () => {
    it('Period CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        // View();
        // Edit();
        // Delete();
        // Clear();
        // Search();
    })

});
export function Save() {
    var number = "223" + new Date().getMilliseconds() + "0821"
    //cy.visit('http://localhost:1750/Financials/Setup/Period')
    cy.visit('http://40.81.28.195:1550/Financials/Setup/Period')
    cy.wait(2000);
    cy.get('#root > div > header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiAppBar-root.MuiAppBar-colorPrimary.MuiAppBar-positionFixed.mui-fixed.css-d8ubgu-MuiPaper-root-MuiAppBar-root > div > div > ul:nth-child(3) > div').click()
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get(':nth-child(2) > .MuiButton-root').click()
    cy.wait(2000);
    cy.get('#mui-45').type(number)
    cy.wait(2000);
    cy.get('[index="0"] > :nth-child(2) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('[index="1"] > :nth-child(3) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('[index="1"] > :nth-child(5) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('[index="4"] > :nth-child(6) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    //cy.wait(2000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    //cy.wait(7000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    //cy.wait(2000);
    // cy.get('.MuiContainer-root > .MuiFab-root').click()
    // cy.wait(2000);
    // cy.get(':nth-child(2) > .MuiButton-root').click()
    // cy.wait(2000);
    // cy.get('#mui-91').type('12345000')
    // cy.wait(2000);
    // cy.get('.MuiGrid-container > :nth-child(3) > .MuiButton-root').click()
    // cy.wait(2000);
    // cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    // cy.wait(6000);
    // cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    // cy.wait(2000);
    // cy.get('.MuiContainer-root > .MuiFab-root').click()
    // cy.wait(2000);
    // cy.get('.MuiGrid-container > :nth-child(3) > .MuiButton-root').click()
    // cy.wait(2000);
    // cy.get('#mui-113').type('12345111')
    // cy.wait(2000);
    // cy.get(':nth-child(4) > .MuiButton-root').click()
    // cy.wait(2000);
    // cy.get('.MuiGrid-container > :nth-child(4) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    // cy.wait(2000);
    // // cy.get('.PrivateSwitchBase-input').click()
    // // cy.wait(2000);
    // cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    // cy.wait(2000);
    

}
export function View(){
    cy.get('[index="11"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(2000);

}
export function Edit(){ 
   
    cy.get('[index="13"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
        cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(2000);
    cy.get('#mui-202').clear();
    cy.wait(2000);
    cy.get('#mui-202').type('0000025')
    cy.wait(2000);
    cy.get('.MuiGrid-container > :nth-child(4) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('[index="0"] > :nth-child(6) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('[index="0"] > :nth-child(4) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('[index="1"] > :nth-child(2) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(2000);
}
export function Clear() {
    cy.get('.MuiContainer-root > .MuiFab-root').click()
    cy.wait(2000);
    cy.get('#mui-240').type('aflfjkropw')
    cy.wait(2000);
    cy.get('.PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > :nth-child(3) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(2000);
}
export function Delete(){
    cy.get('[index="14"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(2000);
    cy.get('[index="14"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(2000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(2000);

}
