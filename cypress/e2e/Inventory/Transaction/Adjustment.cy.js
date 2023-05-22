import { Login} from "../../Login.cy.js"

describe('Adjustments', () => {
    it('Adjustments CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        //Save(); 
        View();      
        Edit();  
        Download();
        Search();
        Delete();
        Post();
       
    })
})

export function Save() {
    //cy.visit('http://40.81.28.195:1110/Inventory/Transaction/Adjustments')
    cy.visit('https://apps.finosys-sbs.com/Inventory/Transaction/Adjustments')
    cy.wait(3000);
    cy.fixture('Adjustment.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Description = payload.validData.Description
        const UserDef1 = payload.validData.UserDef1
        const UserDef2 = payload.validData.UserDef2
        const UserDef3 = payload.validData.UserDef3
        const UserDef4 = payload.validData.UserDef4
        const Packing_Quantity = payload.validData.Packing_Quantity
        const Quantity = payload.validData.Quantity

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#IR--option-0').click({force: true})
    cy.wait(1000);
    cy.get('#Adjustment-UserDef1').type(UserDef1)
    cy.wait(1000);
    cy.get('#Adjustment-UserDef2').type(UserDef2)
    cy.wait(1000);
    cy.get('#Adjustment-Description').type(Description)
    cy.wait(1000);
    cy.get('#Adjustment-UserDef3').type(UserDef3)
    cy.wait(1000);
    cy.get('#Adjustment-UserDef4').type(UserDef4)
    cy.wait(1000);
    //Item lookup
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#itemCode-paymentEntry-option-0').click({force: true})
    cy.wait(1000);
   //Pack UOM lookup
//    cy.get('[index="0"] > [value=""][style="color: inherit; width: 8%; max-width: 8%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
//     .click().get('#Packing_UOM-Pack UOM-option-0').click({force: true})
//     cy.wait(1000);
    cy.get('#mui-81').clear()
    cy.get('#mui-81').type(Packing_Quantity)
    cy.wait(1000);
    cy.get('#mui-82').clear()
    cy.get('#mui-82').type(Quantity)
    cy.wait(1000);
    //save
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //back
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function View() {
    cy.visit('https://apps.finosys-sbs.com/Inventory/Transaction/Adjustments')
    cy.wait(3000);
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('Adjustment.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Description = payload.validData.Description
        const UserDef1 = payload.validData.UserDef1
        const UserDef2 = payload.validData.UserDef2
        const UserDef3 = payload.validData.UserDef3
        const UserDef4 = payload.validData.UserDef4

    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#Adjustment-UserDef1').clear()
    cy.get('#Adjustment-UserDef1').type(UserDef1)
    cy.wait(1000);
    cy.get('#Adjustment-UserDef2').clear()
    cy.get('#Adjustment-UserDef2').type(UserDef2)
    cy.wait(1000);
    cy.get('#Adjustment-Description').clear()
    cy.get('#Adjustment-Description').type(Description)
    cy.wait(1000);
    cy.get('#Adjustment-UserDef3').clear()
    cy.get('#Adjustment-UserDef3').type(UserDef3)
    cy.wait(1000);
    cy.get('#Adjustment-UserDef4').clear()
    cy.get('#Adjustment-UserDef4').type(UserDef4)
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
    cy.get('#TransNo').type('ADJ-000013')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#RFormType').type('Consumption')
    cy.wait(1000);
    cy.get('#RFormType').clear()
}
export function Delete() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function Post() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
