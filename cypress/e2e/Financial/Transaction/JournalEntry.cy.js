import { Login } from "../../Login.cy";

describe('Journal Entry', () => {
    it('Journal Entry CRUD', () => {
        // cy.visit('http://localhost:1750')  
        Login();
        // Save();
        // View();
        // Edit();
        // Download();   
        Post();
        print();
        Delete();  
    })
})
export function Save() {
    cy.visit('http://40.81.28.195:1550/Financials/Transaction/JournalEntry')
    cy.wait(2000);
    cy.get('.css-11lq3yg-MuiGrid-root > .MuiFab-root').click()
    cy.wait(1000);
    cy.get('.MuiStack-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiDayPicker-monthContainer > :nth-child(4) > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('#Decription').type('Trans testing')
    cy.wait(1000);
    cy.get('[style="color: inherit; width: 30%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"] > .MuiStack-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.wait(1000);
    cy.get('#aactCode-paymentEntry-option-0').click()
    cy.wait(1000);
    cy.get('#mui-49').type('20000')
    cy.wait(1000);
    cy.get('[index="0"] > [style="color: inherit; width: 15%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]').click()
    cy.wait(1000);
    // cy.get('#jobCode-journalEntry-option-1').click()
    cy.wait(1000);
    cy.get('[index="1"] > [style="color: inherit; width: 30%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]').click()
    cy.wait(1000);
    cy.get('#aactCode-paymentEntry-option-0').click()
    cy.wait(1000);
    cy.get('#mui-54').type('20000')
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(1) > .MuiButtonBase-root').click()
    cy.wait(7000);
    cy.get('.MuiButtonGroup-root > .MuiButtonBase-root').click()
    cy.wait(1000);
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
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.wait(1000);
    cy.get('#mui-200').clear()
    cy.get('#mui-200').type('3000')
    cy.wait(1000);
    cy.get('[index="2"] > [style="color: inherit; width: 30%; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"]').click()
    cy.wait(1000);
    cy.get('#aactCode-paymentEntry-option-2').click()
    cy.wait(1000);
    cy.get('#mui-207').type('10000')
    cy.wait(1000);
    cy.get('.MuiButtonGroup-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(1000);


}
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
export function Post() {
    cy.visit('http://40.81.28.195:1550/Financials/Transaction/JournalEntry')
    cy.wait(2000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiButton-outlined').click()
    cy.wait(1000);
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
}
export function print() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('.MuiList-root > :nth-child(5)').click()
    cy.wait(1000);

}
export function Delete() {
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > .MuiButtonBase-root').click()
    cy.wait(1000);
    cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > :nth-child(3)').click()
    cy.wait(1000);
    cy.get('.MuiGrid-root > .MuiButton-contained').click()
    cy.wait(1000);
}