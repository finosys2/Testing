import { Login} from "../../Login.cy.js"

describe('Purchase Order', () => {
    it('Purchase Order CRUD', () => {
        // cy.visit('http://localhost:1750')
        Login();
        Save();
        View();       
        Edit();
        ConvertToGR();
        Download();
        Search();
        Delete();
        Post();
    })
})

export function Save() {
    cy.fixture('PurchaseOrder.json').then((payload) => {
        const  Description  = payload.validData.Description;
        const  Freight_Cur  = payload.validData.Freight_Cur;
        const  Packing_Quantity  = payload.validData.Packing_Quantity;
        const  Quantity  = payload.validData.Quantity;
        const  Price  = payload.validData.Price;
        
    //cy.visit('http://40.81.28.195:1110/Purchases/Transaction/PurchaseOrder')
    //cy.wait(2000);
    cy.visit('https://apps.finosys-sbs.com/Purchases/Transaction/PurchaseOrder')
    cy.wait(2000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    cy.get('.MuiGrid-grid-xs-true > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Requisition-cardInfo-option-0').click({force:true})
    cy.wait(1000);
    cy.get('#Description').type(Description)
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Requisition-cardInfo-option-1').click({force:true})
    cy.wait(1000);
    cy.get('#mui-119').clear()
    cy.get('#mui-119').type(Freight_Cur)
    cy.wait(1000);
    cy.get('.MuiTableRow-root > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#RTransNo-RTransNo-option-0').click({force:true})
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
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Edit() {
    cy.fixture('PurchaseOrder.json').then((payload) => {
        const  Description  = payload.validData.Description;
        const  Freight_Cur  = payload.validData.Freight_Cur;
        const  Packing_Quantity  = payload.validData.Packing_Quantity;

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#Description').clear()
    cy.get('#Description').type(Description)
    cy.wait(1000);
    cy.get('#mui-426').clear()
    cy.get('#mui-426').type(Freight_Cur)
    cy.wait(1000);
    cy.get('.MuiGrid-container > :nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#Requisition-cardInfo-option-1').click({force:true})
    cy.wait(1000);
    cy.get('#mui-428').clear()
    cy.get('#mui-428').type(Packing_Quantity)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})
}
export function ConvertToGR() {
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
    cy.wait(1000);
}
export function Search() {
    cy.get('#TransNo').type('PO-000031')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#Vendor').type('Decent Traders')
    cy.wait(1000);
    cy.get('#Vendor').clear()
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
export function Delete() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function Post() {
    cy.get('[index="17"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="17"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
