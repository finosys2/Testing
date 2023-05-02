import { Login } from "../../../Login.cy";

describe('Extended Jobs', () => {
    it('Extended Jobs CRUD', () => {
        Login();
        //Save();
        View();
        Edit();
        Download();
        print();
        Delete();
    })
})
export function Save() {
cy.visit("http://40.81.28.195:1110/Financials/Setup/ExtendedJobs")
cy.wait(1000);
cy.fixture('ExtendedJobs.json').then((payload) => {
    console.log({payload: payload.validData})
        const JobCode = payload.validData.JobCode
        const JobDesc = payload.validData.JobDesc
        const TentativeAmountBuy = payload.validData.TentativeAmountBuy
        const TentativeAmountSel = payload.validData.TentativeAmountSel
        const TentativeAmountOp = payload.validData.TentativeAmountOp
        cy.get('[aria-label="Add New"]').click()
        cy.wait(1000);
        cy.get('#ExtendedJobs-JobCode').type(JobCode)
        cy.wait(1000);
        //date picker
        cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root')
        .click()
        cy.get(':nth-child(4) > :nth-child(5)').click()
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click()
        cy.get('#Customer-undefined-option-0').click()
        cy.wait(1000);
        cy.get('#ExtendedJobs-JobDesc').type(JobDesc)
        cy.wait(1000);

        //selling
        cy.get(':nth-child(1) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > [style="color: inherit; width: 15%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
        .click()
        cy.get('#Account-undefined-option-0').click()
        cy.wait(1000);
        cy.get(':nth-child(1) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > [style="color: inherit; width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
        .clear()
        cy.get(':nth-child(1) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > [style="color: inherit; width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
        .type(TentativeAmountSel)
        cy.wait(1000);

        //buying
        cy.get(':nth-child(3) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(1) > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click()
        cy.get('#VendCat-undefined-option-1').click()
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(2)')
        .click()
        cy.get('#Account-undefined-option-0').click()
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > [style="color: inherit; width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
        .clear()
        cy.get(':nth-child(3) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > [style="color: inherit; width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
        .type(TentativeAmountBuy)
        cy.wait(1000);

        //operating
        cy.get(':nth-child(5) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > [style="color: inherit; width: 15%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .click()
        cy.get('#Account-undefined-option-0').click()
        cy.wait(1000);
        cy.get(':nth-child(5) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > [style="color: inherit; width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
        .clear()
        cy.get(':nth-child(5) > .MuiPaper-root > .Component-horizontalScrollContainer-12 > :nth-child(1) > [style="overflow-y: auto;"] > :nth-child(1) > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > [style="color: inherit; width: 10%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]')
        .type(TentativeAmountOp)

        cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000);
        cy.get('.MuiGrid-spacing-xs-3 > :nth-child(1) > .MuiButtonGroup-root').click()
})
}
export function View() {
    cy.visit("http://40.81.28.195:1110/Financials/Setup/ExtendedJobs")
cy.wait(1000);
    cy.get('[index="24"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
}
export function Edit() {
    cy.get('[index="24"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#ExtendedJobs-JobDesc').clear()
    cy.get('#ExtendedJobs-JobDesc').type('Test job description')
    cy.wait(1000);
    cy.get('#mui-227').clear()
    cy.get('#mui-227').type('2000')
    cy.wait(1000);
    cy.get('#mui-233').clear()
    cy.get('#mui-233').type('2500')
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);
}
export function Download() {
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="0"]')
    .click()
    cy.wait(1000);
    cy.get('.css-12re8tr > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    .click()
    cy.get('.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiPaper-root > .MuiList-root > [tabindex="-1"]')
    .click()
    cy.wait(1000);
}
export function print() {
    cy.get('[index="24"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);

}
export function Delete() {
    cy.get('[index="24"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="24"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}