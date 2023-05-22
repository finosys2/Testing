import { Login} from "../../Login.cy";

describe('Purchase Requisition', () => {
    it('Purchase Requisition CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save(); 
        View();      
        Edit();
        Download();
        ConvertToPO();
        Search();
        Delete();
        Post();
    })
})

export function Save() {
    //cy.visit('http://40.81.28.195:1110/Purchases/Transaction/PurchaseRequisition')
    cy.visit('https://apps.finosys-sbs.com/Purchases/Transaction/PurchaseRequisition')
    cy.wait(2000);
    cy.fixture('Requisition.json').then((payload) => {
        const Description = payload.validData.Description;
        const Freight_Cur = payload.validData.Freight_Cur;
        const Packing_Quantity = payload.validData.Packing_Quantity;
        const Price = payload.validData.Price;
        const Quantity = payload.validData.Quantity;

    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-grid-xs-true > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Requisition-cardInfo-option-0').click({force:true})
    cy.wait(1000);
    cy.get('#Description').type(Description)
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Requisition-cardInfo-option-1').click({force:true})
    cy.wait(1000);
    // cy.get(':nth-child(4) > .NumberFormat > .MuiFormControl-root').clear()
    cy.get('#mui-137').clear()
    cy.get('#mui-137').type(Freight_Cur)
    cy.wait(1000);

    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#itemCode-paymentEntry-option-0').click({force:true})
    cy.wait(1000);
    cy.get('#mui-89').clear()
    cy.get('#mui-89').type(Packing_Quantity)
    cy.wait(1000);
    cy.get('#mui-90').clear()
    cy.get('#mui-90').type(Quantity)
    cy.wait(1000);
    cy.get('#mui-91').clear()
    cy.get('#mui-91').type(Price)
    cy.wait(1000);
    //save
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //back
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function View() {
    
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('Requisition.json').then((payload) => {
        const Description = payload.validData.Description;
        const Freight_Cur = payload.validData.Freight_Cur;
        const Quantity = payload.validData.Quantity;

    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Description').clear()
    cy.get('#Description').type(Description)
    cy.wait(1000);
    cy.get('#mui-339').clear()
    cy.get('#mui-339').type(Freight_Cur)
    cy.wait(1000);
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Requisition-cardInfo-option-0').click({force:true})
    cy.wait(1000);
    cy.get('#mui-342').clear()
    cy.get('#mui-342').type(Quantity)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})
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
export function ConvertToPO() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function Search() {
    cy.get('#TransNo').type('PR-000010')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#Vendor').type('Decent Traders')
    cy.wait(1000);
    cy.get('#Vendor').clear()
}
export function Delete() {
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
export function Post() {
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="3"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
