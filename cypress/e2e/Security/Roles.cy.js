import { Login } from "../Login.cy";

describe('Roles', () => {
    it('User CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
    })

});
export function Save() {
    cy.get('.css-h4y409-MuiList-root > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.wait(2000);
    cy.get(
        '[href="/Security/Roles"] > .MuiListItemText-root > .MuiTypography-root'
    ).click();
    cy.wait(2000);
    cy.get('#root > div > main > div.MuiButtonBase-root.MuiFab-root.MuiFab-circular.MuiFab-sizeLarge.MuiFab-secondary.css-twwvqc-MuiButtonBase-root-MuiFab-root').click()
    cy.wait(2000);
    cy.get('#RoleName').type('Arsalan')
    cy.get('#Remarks').type('testing')
    cy.wait(2000);
    cy.get('#full-width-tabpanel-0 > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > div > label > span > input').click()
    cy.wait(2000);
    cy.get('[index="0"] > :nth-child(4) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(2000);
    cy.get('[index="0"] > :nth-child(5) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(3000)
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(3000)
}

export function View(){
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(2000)
    cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(1)').click()
    cy.wait(2000)
}