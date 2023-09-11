import selectors from "../support/selectors"

describe('Main page test suite', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Check visibility of main elements', () => {
        cy.get(selectors.mainLoginBtn).should('be.visible')
        cy.get(selectors.mainInstallBtn).should('be.visible')
        cy.get(selectors.mainDocumentationBtn).should('be.visible')
    })

    it('Check login redirection', () => {
        // since there are no in-house Cypress tools for accessing a new tab or window, this construct has been added
        cy.get(selectors.mainLoginBtn).invoke('removeAttr', 'target').click()
        cy.url().should('include', '/login')
        cy.get(selectors.logServiceList)
            .contains('GitHub').should('be.visible')
            cy.get(selectors.logServiceList).contains('Google').should('be.visible')
            cy.get(selectors.logServiceList).contains('SSO').should('be.visible')
            cy.get(selectors.logServiceList).contains('email').should('be.visible')
    })

    it('Check install modal', () => {
        cy.get(selectors.mainInstallBtn).click()
        cy.get(selectors.mainModalNpmInstallBtn).should('be.visible')
        cy.get(selectors.mainModalDownloadBtn).should('be.visible')
    })
    
    it('Check pricing page transition', () => {
        cy.get(selectors.mainPricingBtn).click()
        cy.url().should('include', '/pricing')
        cy.get(selectors.pricePeriodToggle).should('be.visible')
        cy.get(selectors.priceMontlyBtn).should('be.visible')
        cy.get(selectors.priceAnnuallyBtn).should('be.visible')
        cy.contains('USD').parent().parent().should('be.visible')
    })
})