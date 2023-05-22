import { Login } from "../../Login.cy";

describe('Delivery Order', () => {
    it('Delivery Order CRUD', () => {
        Login();
        Save();
        View();
        Edit();
        Download();
        Search();
        Print();
        ConvertToSales();
        UpdateExpiry();
        Delete();
        Post();
    })
})
export function Save() {
    cy.visit('https://apps.finosys-sbs.com/Sales/Transaction/DeliveryOrder')
    cy.wait(1000);
    cy.fixture('DeliveryOrder.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Discount_Cur = payload.validData.Discount_Cur
        const Freight_Cur = payload.validData.Freight_Cur
        const Description = payload.validData.Description
        const DriverName = payload.validData.DriverName
        const DocumentNo = payload.validData.DocumentNo
        const DriverContact = payload.validData.DriverContact
        const VehicleNo = payload.validData.VehicleNo

        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('.MuiGrid-grid-xs-true > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#SalesDispatch-cardInfo-option-0').click({ force: true })
        cy.wait(1000);
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#SalesDispatch-cardInfo-option-1').click({ force: true })
        cy.wait(1000);
        cy.get(':nth-child(7) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#SalesDispatch-cardInfo-option-0').click({ force: true })
        cy.wait(1000);
        cy.get('#Sales-CardInfo-Discount').type(Discount_Cur)
        cy.wait(1000);
        cy.get('#Sales-CardInfo-Freight').type(Freight_Cur)
        cy.wait(1000);
        cy.get('#Sales-CardInfo-Description').type(Description)
        cy.wait(1000);
        cy.get('#Sales-CardInfo-DriverName').type(DriverName)
        cy.wait(1000);
        cy.get('#Sales-CardInfo-DriverContact').type(DriverContact)
        cy.wait(1000);
        cy.get('#Sales-CardInfo-DocumentNo').type(DocumentNo)
        cy.wait(1000);
        cy.get('#Sales-CardInfo-VehicleNo').type(VehicleNo)
        cy.wait(1000);
        //Order No lookup
        // cy.get('[style="color: inherit; width: 10%; max-width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        // .click().get('#QTransNo-QTransNo-option-1').click({force: true})
        // cy.wait(1000);
        //Item lookup
        cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
            .click().get('#itemCode-paymentEntry-option-0').click({ force: true })
        cy.wait(1000);
        //save button
        cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000);
        //back button
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
    cy.fixture('DeliveryOrder.json').then((payload) => {
        console.log({ payload: payload.validData })
        const Discount_Cur = payload.validData.Discount_Cur
        const Freight_Cur = payload.validData.Freight_Cur
        const Description = payload.validData.Description
        const DriverName = payload.validData.DriverName
        const DocumentNo = payload.validData.DocumentNo
        const DriverContact = payload.validData.DriverContact
        const VehicleNo = payload.validData.VehicleNo

    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Discount').clear()
    cy.get('#Sales-CardInfo-Discount').type(Discount_Cur)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Freight').clear()
    cy.get('#Sales-CardInfo-Freight').type(Freight_Cur)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-Description').clear()
    cy.get('#Sales-CardInfo-Description').type(Description)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-DriverName').clear()
    cy.get('#Sales-CardInfo-DriverName').type(DriverName)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-DriverContact').clear()
    cy.get('#Sales-CardInfo-DriverContact').type(DriverContact)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-DocumentNo').clear()
    cy.get('#Sales-CardInfo-DocumentNo').type(DocumentNo)
    cy.wait(1000);
    cy.get('#Sales-CardInfo-VehicleNo').clear()
    cy.get('#Sales-CardInfo-VehicleNo').type(VehicleNo)
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]')
    .click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]')
    .click()
}
export function Search() {
    cy.get('#TransNo').type('SD-000034')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#Location').type('Location')
    cy.wait(1000);
    cy.get('#Location').clear()
}
export function Print() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
}
export function ConvertToSales() {
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
    cy.wait(1000);
}
export function UpdateExpiry() {
    cy.get('[index="1"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root')
    .click().get('.MuiDayPicker-monthContainer > :nth-child(5) > :nth-child(4)').click()
    cy.wait(1000);
    //update button
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > :nth-child(2)')
    .click()
    cy.wait(1000);
}
export function Delete() {
    cy.get('[index="5"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="5"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}
export function Post() {
    cy.get('[index="9"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="9"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}
