import { Login} from "../../Login.cy.js"

describe('Requisition', () => {
    it('Requisition CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save(); 
        View();      
        Edit();
        Download();
        Search();
        ConvertToTransfer();
        Delete();
        Post();
    })
})
export function Save() {
    //cy.visit('http://40.81.28.195:1110/Inventory/Transaction/Requisition')
    cy.visit('https://apps.finosys-sbs.com/Inventory/Transaction/Requisition')
    cy.wait(2000);
    cy.fixture('Requisitions.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Description = payload.validData.Description
        const UserDef1 = payload.validData.UserDef1
        const UserDef2 = payload.validData.UserDef2
        const UserDef3 = payload.validData.UserDef3
        const UserDef4 = payload.validData.UserDef4
        const Quantity = payload.validData.Quantity
        const Packing_Quantity = payload.validData.Packing_Quantity

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#IR--option-0').click({force: true})
    cy.wait(1000);
    cy.get('#Requisition-UserDef1').type(UserDef1)
    cy.wait(1000);
    cy.get('#Requisition-UserDef2').type(UserDef2)
    cy.wait(1000);
    cy.get('#Requisition-Description').type(Description)
    cy.wait(1000);
    cy.get('#Requisition-UserDef3').type(UserDef3)
    cy.wait(1000);
    cy.get('#Requisition-UserDef4').type(UserDef4)
    cy.wait(1000);
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#itemCode-paymentEntry-option-1').click({force: true})
    cy.wait(1000);
    cy.get('#mui-82').clear()
    cy.get('#mui-82').type(Packing_Quantity)
    cy.wait(1000);
    cy.get('#mui-83').clear()
    cy.get('#mui-83').type(Quantity)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('Requisitions.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Description = payload.validData.Description
        const UserDef1 = payload.validData.UserDef1
        const UserDef2 = payload.validData.UserDef2

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#Requisition-UserDef1').clear()
    cy.get('#Requisition-UserDef1').type(UserDef1)
    cy.wait(1000);
    cy.get('#Requisition-UserDef2').clear()
    cy.get('#Requisition-UserDef2').type(UserDef2)
    cy.wait(1000);
    cy.get('#Requisition-Description').clear()
    cy.get('#Requisition-Description').type(Description)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
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
export function Search() {
    cy.get('#TransNo').type('IR-000003')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#Location').type('Location')
    cy.wait(1000);
    cy.get('#Location').clear()

}
export function Delete() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function ConvertToTransfer() {
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
    cy.wait(1000);
}
export function Post() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}