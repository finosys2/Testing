import { Login } from "../Login.cy";

describe('Roles', () => {
    it('Role CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();
        Edit();
        Delete();
        Clear();
        Search();
    })

});
export function Save() {
    cy.get(':nth-child(2) > .MuiListItemButton-root').click()
    //cy.get('.css-h4y409-MuiList-root > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get(
        '[href="/Security/Roles"] > .MuiListItemText-root > .MuiTypography-root'
    ).click();
    cy.wait(1000);
    cy.get(".MuiContainer-root > .MuiFab-root").click();
    cy.wait(1000);
    cy.get('#RoleName').type('Arabish')
    cy.get('#Remarks').type('testing done')
    cy.wait(1000);
    cy.get(':nth-child(3) > [data-rbd-draggable-context-id="0"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get(':nth-child(4) > [data-rbd-draggable-context-id="0"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > [data-rbd-draggable-context-id="0"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(3000)
    cy.get(':nth-child(6) > [data-rbd-draggable-context-id="0"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(3000)
    cy.get('#full-width-tab-1').click()
    cy.wait(1000);
    cy.get(':nth-child(3) > [data-rbd-draggable-context-id="1"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(3000)
    cy.get(':nth-child(5) > [data-rbd-draggable-context-id="1"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(3000)
    cy.get(':nth-child(7) > [data-rbd-draggable-context-id="1"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(3000)
    cy.get('#full-width-tab-2').click()
    cy.wait(1000);
    cy.get(':nth-child(4) > [data-rbd-draggable-context-id="2"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(3000)
    cy.get(':nth-child(6) > [data-rbd-draggable-context-id="2"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(3000)
    cy.get('#full-width-tab-3').click()
    cy.wait(1000);
    cy.get(':nth-child(3) > [data-rbd-draggable-context-id="3"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    cy.get(':nth-child(5) > [data-rbd-draggable-context-id="3"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    cy.get('#full-width-tab-4').click()
    cy.wait(1000);
    cy.get(':nth-child(4) > [data-rbd-draggable-context-id="4"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    //cy.get(':nth-child(6) > [data-rbd-draggable-context-id="2"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    cy.get('#full-width-tab-5').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > [data-rbd-draggable-context-id="5"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    cy.get('#full-width-tab-6').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > [data-rbd-draggable-context-id="6"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    cy.get(':nth-child(6) > [data-rbd-draggable-context-id="6"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    cy.get('#full-width-tab-7').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > [data-rbd-draggable-context-id="7"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    cy.get('#full-width-tab-8').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > [data-rbd-draggable-context-id="8"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    //cy.get(':nth-child(6) > [data-rbd-draggable-context-id="9"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1)').click()
    //cy.wait(1000)
    cy.get('#full-width-tab-9').click()
    cy.wait(1000);
    cy.get(':nth-child(6) > [data-rbd-draggable-context-id="9"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000)
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(7000)
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(3000)
}

export function View() {

    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000)
    cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(1)').click()
    cy.wait(1000);
    cy.get('#full-width-tab-1').click()
    cy.wait(1000);
    cy.get('#full-width-tab-2').click()
    cy.wait(1000);
    cy.get('#full-width-tab-3').click()
    cy.wait(1000);
    cy.get('#full-width-tab-4').click()
    cy.wait(1000);
    cy.get('#full-width-tab-5').click()
    cy.wait(1000);
    cy.get('#full-width-tab-6').click()
    cy.wait(1000);
    cy.get('#full-width-tab-7').click()
    cy.wait(1000);
    cy.get('#full-width-tab-8').click()
    cy.wait(1000);
    cy.get('#full-width-tab-9').click()
    cy.wait(1000);
    cy.visit('http://localhost:1750/Security/Roles')
}
export function Edit() {
    cy.get(':nth-child(2) > .MuiListItemButton-root').click()
    //cy.get('.css-h4y409-MuiList-root > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.wait(1000);
    cy.get(
        '[href="/Security/Roles"] > .MuiListItemText-root > .MuiTypography-root'
    ).click();
    cy.wait(1000);
    cy.get('#root > div > main > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(2) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click()
    cy.wait(1000);
    cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(2)').click()
    cy.wait(1000);
    cy.get('#RoleName').clear()
    cy.get('#RoleName').type('FaizUllah')
    cy.get('#Remarks').clear()
    cy.get('#Remarks').type('donee')
    cy.wait(1000);
    cy.get('#full-width-tab-0').click()
    cy.wait(1000);
    cy.get(':nth-child(4) > [data-rbd-draggable-context-id="0"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get(':nth-child(6) > [data-rbd-draggable-context-id="0"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('#full-width-tab-3').click()
    cy.wait(1000);
    cy.get(':nth-child(6) > [data-rbd-draggable-context-id="1"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('#full-width-tab-6').click()
    cy.wait(1000);
    cy.get(':nth-child(5) > [data-rbd-draggable-context-id="2"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('#full-width-tab-9').click()
    cy.wait(1000);
    cy.get(':nth-child(7) > [data-rbd-draggable-context-id="3"] > [style="text-align: center; display: flex; flex-direction: column; align-items: center;"] > :nth-child(1) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('#root > div > main > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(2) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click()
    cy.wait(1000);
    cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
    cy.get('#root > div > main > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(2) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click()
    cy.wait(1000);
    cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
}
export function Clear() {
    cy.get(".MuiContainer-root > .MuiFab-root").click();
    cy.wait(1000);
    cy.get('#RoleName').type('Arabish')
    cy.get('#Remarks').type('fine')
    cy.get('[index="0"] > :nth-child(3) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[index="1"] > :nth-child(4) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('[index="1"] > :nth-child(6) > div > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
    cy.wait(1000);
    cy.get('#root > div > main > div > div > div.MuiGrid-root.css-vj1n65-MuiGrid-root > div > div > div > div.MuiCardActions-root.MuiCardActions-spacing.css-8xjt7c-MuiCardActions-root > div > div:nth-child(3) > div > div > div:nth-child(3) > button').click()
    cy.wait(1000);
    cy.visit('http://localhost:1750/Security/Roles')
}
export function Search() {
    cy.get('#RoleName').type('Arabish')
    cy.get('#Remarks').type('testing done')
    cy.wait(1000);
    cy.get('#RoleName').clear()
    cy.get('#Remarks').clear()
}