import { Login} from "../../Login.cy.js"

describe('Item Class', () => {
    it('Item Class CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        //Save();       
        Edit();
        Delete();
        Download();
    })
})

export function Save() {
    //cy.visit('http://40.81.28.195:1110/Inventory/Setup/ItemClass')
    cy.visit('https://apps.finosys-sbs.com/Inventory/Setup/ItemClass')
    cy.wait(2000);
    cy.fixture('ItemClass.json').then((payload) => {
        console.log({ payload: payload.validData })
        const ItemClassCode = payload.validData.ItemClassCode
        const ItemClass = payload.validData.ItemClass
        const AttributeCode = payload.validData.AttributeCode

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#ItemClass-ItemClassCode').type(ItemClassCode)
    cy.wait(1000);
    cy.get('#ItemClass-ItemClass-1').type(ItemClass)
    cy.wait(1000);
    cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#UOMClass-undefined-option-0').click({force: true})
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#TaxSchedule-undefined-option-1').click({force: true})
    cy.wait(1000);
    //add item 
    cy.get('.MTableToolbar-title-9 > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#ItemClass-AttributeCode').type(AttributeCode)
    cy.wait(1000);
    cy.get('#ItemClass-AttributeType').click().get('[data-value="DropDown"]').click({force:true})
    cy.wait(1000);
    //Save button
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //back button
    //cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()

})}

export function Edit() {
    cy.visit('https://apps.finosys-sbs.com/Inventory/Setup/ItemClass')
    cy.wait(2000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#ItemClass-ItemClass-1').clear()
    cy.wait(1000);
    cy.get('#ItemClass-ItemClass-1').type("test1")
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(2000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(2000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(2000);
}