import { Login} from "../../Login.cy.js"

describe('Transfers', () => {
    it('Transfers CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save(); 
        View();      
        Edit();
        Download();
        Search();
        Delete();
        Post();
    })
})

export function Save() {
    //cy.visit('http://40.81.28.195:1110/Inventory/Transaction/Transfers')
    cy.visit('https://apps.finosys-sbs.com/Inventory/Transaction/Transfers')
    cy.wait(2000);
    cy.fixture('Transfer.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Description = payload.validData.Description
        const Quantity = payload.validData.Quantity

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get(':nth-child(4) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#XFR-Location-option-0').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(6) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#XFR-DestinationLocation-option-1').click({force: true})
    cy.wait(1000);
    cy.get('#Transfer-Description').type(Description)
    cy.wait(1000);
    //RequisitionNo lookup
    cy.get('[style="color: inherit; width: 10%; max-width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#RTransNo-RTransNo-option-0').click({force: true})
    cy.wait(1000);
    //Item lookup
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#itemCode-paymentEntry-option-1').click({force: true})
    cy.wait(1000);
    cy.get('#mui-100').clear()
    cy.get('#mui-100').type(Quantity)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function View() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#Transfer-Description').clear()
    cy.get('#Transfer-Description').type("Description of Stock Transfer")
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
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
export function Search(){
    cy.get('#TransNo').type('TR-000005')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.wait(1000);
    cy.get('#Location').type('Location')
    cy.wait(1000);
    cy.get('#Location').clear()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
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