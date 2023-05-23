import { Login} from "../../Login.cy.js"

describe('Purchase Invoice', () => {
    it('Purchase Invoice CRUD', () => {
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
    cy.fixture('PurchaseInvoice.json').then((payload) => {
        const  Description  = payload.validData.Description;
        const  Freight_Cur  = payload.validData.Freight_Cur;
        const Discount_Cur = payload.validData.Discount_Cur;
        const  Packing_Quantity  = payload.validData.Packing_Quantity;
        const  Quantity  = payload.validData.Quantity;
        const  Price  = payload.validData.Price;

    //cy.visit('http://40.81.28.195:1110/Purchases/Transaction/PurchaseInvoice')
    cy.visit('https://apps.finosys-sbs.com/Purchases/Transaction/PurchaseInvoice')
    cy.wait(2000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-grid-xs-true > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#purchaseInvoice-cardInfo-option-0').click({force:true})
    cy.wait(1000);
    cy.get('#Description').type(Description)
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#purchaseInvoice-cardInfo-option-1').click({force:true})
    cy.wait(1000);
    cy.get('#mui-119').clear()
    cy.get('#mui-119').type(Freight_Cur)
    cy.wait(1000);
    cy.get('#mui-118').clear()
    cy.get('#mui-118').type(Discount_Cur)
    cy.wait(1000);

    cy.get('.MuiTableRow-root > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#GTransNo-GTransNo-option-0').click({force:true})
    cy.wait(1000);
    cy.get(':nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#itemCode-paymentEntry-option-0').click({force:true})
    cy.wait(1000);
    cy.get('#mui-121').clear()
    cy.get('#mui-121').type(Packing_Quantity)
    cy.wait(1000);
    cy.get('#mui-122').clear()
    cy.get('#mui-122').type(Quantity)
    cy.wait(1000);
    cy.get('#mui-123').clear()
    cy.get('#mui-123').type(Price)
    cy.wait(1000);
    //save
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //back
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
})
}
export function View() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('PurchaseInvoice.json').then((payload) => {
        const  Description  = payload.validData.Description;
        const  Freight_Cur  = payload.validData.Freight_Cur;
        const  Price  = payload.validData.Price;
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root > [data-testid="MoreVertIcon"]').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Description').clear()
    cy.get('#Description').type(Description)
    cy.wait(1000);
    cy.get('#mui-254').clear()
    cy.get('#mui-254').type(Freight_Cur)
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#purchaseInvoice-cardInfo-option-1').click({force:true})
    cy.wait(1000);
    cy.get('#mui-258').clear()
    cy.get('#mui-258').type(Price)
    cy.wait(1000);
    //save
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
    cy.get('#TransNo').type('PI-000009')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#Vendor').type('Test Supplier')
    cy.wait(1000);
    cy.get('#Vendor').clear()
}
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function Post() {
    cy.get('[index="5"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="5"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
