import { Login } from "../Login.cy";

describe('User', () => {
    it('User CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        Search();
        View();
        Edit();
        Delete();
    })

});

export function Save() {
    var name = "Rimsha" + new Date().getMilliseconds() + "090021"
    // cy.get('.css-h4y409-MuiList-root > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.css-h4y409-MuiList-root > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.wait(2000);
    cy.get(
        '[href="/Security/User"] > .MuiListItemText-root > .MuiTypography-root'
    ).click();
    cy.wait(2000);
    cy.get(".css-1ibeobj > .MuiFab-root").click();
    cy.wait(2000);
    cy.get("#UserName").type(name);
    cy.get("#Password").type("Rim@123");
    cy.get("#ConfirmPassword").type("Rim@123");
    cy.get("#demo-multiple-checkbox").click();
    cy.get("#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(1) > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input"
    ).click();
    cy.get("body").trigger("keydown", { keyCode: 27 });
    cy.get(".MuiAutocomplete-root > .MuiFormControl-root").click();
    cy.get("#CompanyCode--option-0").click();
    cy.get("#Designation").type("Developer");
    cy.get("#Email").type("rim@gmail.com");
    cy.get("#ContactNo").type("0333303789");
    cy.get(".MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root").click();
    cy.wait(3000);
}

export function Search(){
    cy.get('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > div')
    .type('Ahm')
    cy.get(20000);

}
export function View() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    //cy.get('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(18) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click()
    cy.wait(2000);
    cy.get('.MuiList-root > [tabindex="0"]').click()
    // cy.get(
    //     '[href="/Security/User"] > .MuiListItemText-root > .MuiTypography-root'
    // ).click();
    // cy.wait(2000);
    // cy.get('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(2) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click();
    cy.wait(2000);
    cy.visit('http://localhost:1750/Security/User')

    // cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    // cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(1)').click()
    // cy.get('#root > div > main > div > div:nth-child(2) > div > div > div.MuiCardActions-root.MuiCardActions-spacing.css-8xjt7c-MuiCardActions-root > div > div:nth-child(3) > div > div > div:nth-child(1) > button').click()
}
export function Edit() {
    var name = "RAFAY" + new Date().getMilliseconds()
    cy.get(2000);
    cy.get('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(2) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click()
    cy.wait(2000);
    cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(2)').click()
    cy.wait(2000);
    // cy.get('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(2) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click();
    // cy.wait(2000);
    // cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(2)').click();
    // cy.get(2000);
    cy.get('#Password').clear();
    cy.get('#Password').type("password123");
    cy.get("#ConfirmPassword").clear();
    cy.get("#ConfirmPassword").type("password123");

    cy.get("#demo-multiple-checkbox").click();
    cy.get("#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(3) > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input"
    ).click();
    cy.get("body").trigger("keydown", { keyCode: 27 });
    cy.get(".MuiAutocomplete-root > .MuiFormControl-root").click();
    cy.get('#CompanyCode--option-2').click();
    cy.get('#Designation').clear();
    cy.get("#Designation").type("node Developer");
    cy.get('#Email').clear();
    cy.get("#Email").type("rafay@gmail.com");
    cy.get('#ContactNo').clear();
    cy.get("#ContactNo").type("03160299171");
    // cy.get("#UserName").clear();
    // cy.get("#UserName").type(name);
    //cy.get('#root > div > main > div > div:nth-child(2) > div > div > div.MuiCardActions-root.MuiCardActions-spacing.css-8xjt7c-MuiCardActions-root > div > div:nth-child(3) > div > div > div:nth-child(1) > button').click();
    //cy.get(".MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root").click()
    // cy.get(".MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root")
    //     .click()
    //     .then(() => {
    //         cy.get('#element-id').should('have.text', 'expected text')
    //     })
    //     .should(() => {
    //         // Check if the button was clicked
    //         expect(cy.get('#element-id')).to.exist.to.equal(true)
    //         // Display an error message if the button was not clicked
    //         cy.log('Error: The button was not clicked')
    //     })
    cy.get("#root > div > main > div > div:nth-child(2) > div > div > div.MuiCardActions-root.MuiCardActions-spacing.css-8xjt7c-MuiCardActions-root > div > div:nth-child(3) > div > div > div:nth-child(1) > button").click();
    //cy.visit('http://localhost:1750/Security/User')
    cy.wait(3000);
}

export function Delete() {
    //cy.get('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(3) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click()
    cy.get('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(2) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click()
    cy.wait(2000);
    cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(3)').click();
    cy.wait(2000);
    cy.get('body > div.MuiModal-root.css-79ws1d-MuiModal-root > div:nth-child(3) > div > div.MuiCardActions-root.MuiCardActions-spacing.css-gdzt7s-MuiCardActions-root > div > button.MuiButton-root.MuiButton-contained.MuiButton-containedError.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-10fwo5v-MuiButtonBase-root-MuiButton-root').click();
    cy.wait(3000);
    cy.visit('http://localhost:1750/Security/User');
    cy.get('#root > div > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation2.css-yl3kvk-MuiPaper-root > div.MuiBox-root.css-187halg > div > div > div > table > tbody > tr:nth-child(6) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingNone.MuiTableCell-sizeMedium.css-18gecpw-MuiTableCell-root > div > button').click()
    cy.wait(2000);
    cy.get('#simple-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1xbokmk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(3)').click();
    cy.wait(2000);
    cy.get('body > div.MuiModal-root.css-79ws1d-MuiModal-root > div:nth-child(3) > div > div.MuiCardActions-root.MuiCardActions-spacing.css-gdzt7s-MuiCardActions-root > div > button.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButtonBase-root.css-1t7t7fh-MuiButtonBase-root-MuiButton-root').click();
    cy.wait(2000);
    //cy.get('#cdjm8zc').should();
}
