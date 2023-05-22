import { Login} from "../../Login.cy.js"

describe('Item', () => {
    it('Item CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();       
        Edit();
        Delete();
        Download();
    })
})

export function Save()
{ 
    //cy.visit('http://40.81.28.195:1110/Inventory/Setup/Items')
    cy.visit('https://apps.finosys-sbs.com/Inventory/Setup/Items')
    cy.wait(2000);
    cy.fixture('Items.json').then((payload) => {
        console.log({ payload: payload.validData })
        const ItemCode = payload.validData.ItemCode
        const Item = payload.validData.Item
        const Description = payload.validData.Description
        const LSTPPRICE = payload.validData.LSTPPRICE
        const RetailPrice = payload.validData.RetailPrice
        const TradePrice = payload.validData.TradePrice
        const SalesPrice = payload.validData.SalesPrice
        const UnitQuantity = payload.validData.UnitQuantity
        const Tolerance = payload.validData.Tolerance

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('#Item-ItemCode').type(ItemCode)
    cy.wait(1000);
    cy.get('#Item-Item-1').type(Item)
    cy.wait(1000);
    cy.get('.MuiCardContent-root > .MuiGrid-container > :nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#ItemClass-undefined-option-1').click({force: true})
    cy.wait(1000);
    cy.get('#Item-Description').type(Description)
    cy.wait(1000);
    cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#ItemClass-undefined-option-1').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#ItemClass-undefined-option-2').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(8) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#ItemClass-undefined-option-3').click({force: true})
    cy.wait(1000);
    cy.get('.MuiGrid-grid-xs-7 > .MuiGrid-container > :nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#TaxSchedule-undefined-option-1').click({force: true})
    cy.wait(1000);
    cy.get('#Item-UnitQuantity').clear()
    cy.get('#Item-UnitQuantity').type(UnitQuantity)
    cy.wait(1000);
    cy.get('#Item-LSTPPRICE').clear()
    cy.get('#Item-LSTPPRICE').type(LSTPPRICE)
    cy.wait(1000);
    cy.get('#Item-RetailPrice').clear()
    cy.get('#Item-RetailPrice').type(RetailPrice)
    cy.wait(1000);
    cy.get('#Item-TradePrice').clear()
    cy.get('#Item-TradePrice').type(TradePrice)
    cy.wait(1000);
    cy.get('#Item-SalesPrice').clear()
    cy.get('#Item-SalesPrice').type(SalesPrice)
    cy.wait(1000);
    cy.get('#Item-Tolerance').clear()
    cy.get('#Item-Tolerance').type(Tolerance)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function Edit() {
    cy.fixture('Items.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Item = payload.validData.Item
        const Description = payload.validData.Description
        const LSTPPRICE = payload.validData.LSTPPRICE
        const RetailPrice = payload.validData.RetailPrice
        const TradePrice = payload.validData.TradePrice
        const SalesPrice = payload.validData.SalesPrice

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#Item-Item-1').clear()
    cy.get('#Item-Item-1').type(Item)
    cy.wait(1000);
    cy.get('#Item-Description').clear()
    cy.get('#Item-Description').type(Description)
    cy.wait(1000);
    cy.get('#Item-LSTPPRICE').clear()
    cy.get('#Item-LSTPPRICE').type(LSTPPRICE)
    cy.wait(1000);
    cy.get('#Item-RetailPrice').clear()
    cy.get('#Item-RetailPrice').type(RetailPrice)
    cy.wait(1000);
    cy.get('#Item-TradePrice').clear()
    cy.get('#Item-TradePrice').type(TradePrice)
    cy.wait(1000);
    cy.get('#Item-SalesPrice').clear()
    cy.get('#Item-SalesPrice').type(SalesPrice)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function Delete() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
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