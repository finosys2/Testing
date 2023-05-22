import { Login } from "../../../Login.cy";

describe('Payment Modes', () => {
    it('Payment Modes CRUD', () => {
        Login();
        Save();
        View();
        Edit();
        Download();
        Search();
        Delete();
    })
})
export function Save() {
//cy.visit('http://40.81.28.195:1550/Financials/Setup/PaymentModes')
cy.visit('http://40.81.28.195:1110/Financials/Setup/PaymentTerms')
cy.fixture('paymentModes.json').then((payload) => {
    console.log({payload: payload.validData})
    const PayModeCode  = payload.validData.PayModeCode
    const PayModeDesc  = payload.validData.PayModeDesc
// })
console.log({PayModeCode,PayModeDesc})

cy.wait(1000);
cy.get('[aria-label="Add New"]').click()
cy.wait(1000);
cy.get('#PaymentTerms-PayTermCode').type(PayModeCode, { force: true }).blur()
cy.wait(1000);
cy.get('#PaymentTerms-PayTermDesc').type(PayModeDesc, { force: true }).blur()
cy.wait(1000);
cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2.css-1o7apob-MuiGrid-root > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
cy.wait(1000);
cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
cy.wait(1000);

})
}
export function View() {
    cy.get('[index="4"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButton-root').click()
    cy.wait(1000);
}

export function Edit() {
    cy.fixture('paymentModes.json').then((payload) => {
        console.log({payload: payload.validData})
        const PayModeDesc  = payload.validData.PayModeDesc
    cy.get('[index="2"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#PaymentTerms-PayTermDesc').clear()
    cy.get('#PaymentTerms-PayTermDesc').type(PayModeDesc)
    cy.wait(1000);
    cy.get('#alert-dialog-slide-description > div > div > div:nth-child(2) > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2.css-1o7apob-MuiGrid-root > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-wvbhqt-MuiButtonBase-root-MuiCheckbox-root > input').click()
    cy.wait(1000);
    cy.get('.css-zw3mfo-MuiModal-root-MuiDialog-root > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(2)').click()
    cy.wait(7000);
})}

export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click()
    cy.wait(1000);
}
export function Search() {
    cy.get('#PayTermCode').type('00')
    cy.get('#PayTermDesc').type('Cash')
    cy.wait(1000);
    cy.get('#PayTermCode').clear()
    cy.get('#PayTermDesc').clear()
}
export function Delete() {
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
    cy.wait(1000);
}