import selectors from "../support/selectors"

describe('Pricing page test suite', () => {
    beforeEach(() => {
        cy.visit('/pricing')
    })

    it('Check monthly and annually pricing', () => {
        const monthCost = [
            '0',
            '75',
            '300',
            'Let\'s chat'
        ]

        const annualCost = [
            '0',
            '67',
            '267',
            'Let\'s chat'
        ]

        cy.get(selectors.priceMontlyBtn).click()
        cy.url().should('include', '/#monthly')
        cy.get(selectors.pricePlanCard).each(($el, index, $list) => {
            expect($list).to.have.length(4)
            expect(cy.wrap($el).contains(monthCost[index]))
        })

        cy.get(selectors.priceAnnuallyBtn).click()
        cy.url().should('include', '/#annually')
        cy.get(selectors.pricePlanCard).each(($el, index, $list) => {
            expect($list).to.have.length(4)
            expect(cy.wrap($el).contains(annualCost[index]))
        })
    })

    it('Check currency switches', () => {
        const monthCost = [
            '0',
            '60',
            '240',
            'Let\'s chat'
        ]

        const annualCost = [
            '0',
            '53',
            '213',
            'Let\'s chat'
        ]

        cy.get(selectors.priceMontlyBtn).click()
        cy.url().should('include', '/#monthly')
        // no legit selector for currency swap element
        cy.contains('USD').parent().click()
        cy.get(selectors.priceCurrencyList).contains('GBP').click()
        cy.get(selectors.pricePlanCard).each(($el, index, $list) => {
            expect($list).to.have.length(4)
            expect(cy.wrap($el).contains(monthCost[index]))
        })

        cy.get(selectors.priceAnnuallyBtn).click()
        cy.url().should('include', '/#annually')
        cy.get(selectors.pricePlanCard).each(($el, index, $list) => {
            expect($list).to.have.length(4)
            expect(cy.wrap($el).contains(annualCost[index]))
        })
    })
})