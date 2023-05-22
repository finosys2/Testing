import { Login } from "../../Login.cy";

describe("Sale Order", () => {
    it("Sale Order CRUD", () => {
        Login();
        Save();  
        View();
        Edit();
        Download();
        Search();
        Print();
        Delete();
        Post();
    });
});

export function Save() {
    cy.fixture('Gatepass.json').then((payload) => {
        const Remarks = payload.validData.Remarks;
        const DriverName = payload.validData.DriverName;
        const DriverContact = payload.validData.DriverContact;
        const DocumentNo = payload.validData.DocumentNo;
        const VehicleNo = payload.validData.VehicleNo;
    cy.visit('https://apps.finosys-sbs.com/Sales/Transaction/GatePass')
    cy.wait(1000);
    cy.get('[aria-label="Add New"]').click()
    cy.wait(1000);
    //Select Order lookup
    cy.get('.MuiGrid-grid-xs-5 > .MuiButtonBase-root')
    .click().get('[index="1"] > :nth-child(1)').click({force: true})
    cy.wait(1000);
    //Shipping lookup
    cy.get(':nth-child(5) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#SalesDispatch-cardInfo-option-0').click({force: true})
    cy.wait(1000);
    cy.get('#sales-GatePassCard-Remarks').clear()
    cy.get('#sales-GatePassCard-Remarks').type(Remarks)
    cy.wait(1000);
    cy.get('#sales-GatePassCard-DriverName').clear()
    cy.get('#sales-GatePassCard-DriverName').type(DriverName)
    cy.wait(1000);
    cy.get('#sales-GatePassCard-DriverContact').clear()
    cy.get('#sales-GatePassCard-DriverContact').type(DriverContact)
    cy.wait(1000);
    cy.get('#sales-GatePassCard-DocumentNo').clear()
    cy.get('#sales-GatePassCard-DocumentNo').type(DocumentNo)
    cy.wait(1000);
    cy.get('#sales-GatePassCard-VehicleNo').clear()
    cy.get('#sales-GatePassCard-VehicleNo').type(VehicleNo)
    cy.wait(1000);
    //Item lookup
    cy.get('[style="color: inherit; width: 25%; max-width: 25%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit; text-align: center;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click().get('#itemCode-paymentEntry-option-0').click({force: true})
    cy.wait(1000);
    //save button
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    //back button
    //cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
})
}
export function View() {

}
export function Edit() {
    cy.fixture('Gatepass.json').then((payload) => {
        const Remarks = payload.validData.Remarks;
        const DriverName = payload.validData.DriverName;
        const DriverContact = payload.validData.DriverContact;
        const DocumentNo = payload.validData.DocumentNo;
        const VehicleNo = payload.validData.VehicleNo;
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('#sales-GatePassCard-Remarks').clear()
    cy.get('#sales-GatePassCard-Remarks').type(Remarks)
    cy.wait(1000);
    cy.get('#sales-GatePassCard-DriverName').clear()
    cy.get('#sales-GatePassCard-DriverName').type(DriverName)
    cy.wait(1000);
    cy.get('#sales-GatePassCard-DriverContact').clear()
    cy.get('#sales-GatePassCard-DriverContact').type(DriverContact)
    cy.wait(1000);
    cy.get('#sales-GatePassCard-DocumentNo').clear()
    cy.get('#sales-GatePassCard-DocumentNo').type(DocumentNo)
    cy.wait(1000);
    cy.get('#sales-GatePassCard-VehicleNo').clear()
    cy.get('#sales-GatePassCard-VehicleNo').type(VehicleNo)
    cy.wait(1000);
    //save button
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
})}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]')
    .click()
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]')
    .click()
}
export function Search() {
    cy.get('#TransNo').type('GP-000020')
    cy.wait(1000);
    cy.get('#TransNo').clear()
    cy.get('#Customer').type('Test Customer')
    cy.wait(1000);
    cy.get('#Customer').clear()
}
export function Print() {
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
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
    cy.get('[index="8"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="8"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()

}