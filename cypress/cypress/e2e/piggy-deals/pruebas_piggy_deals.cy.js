describe('Pruebas End to End de PiggyDeals', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.get('.general-ui-module__G9rtfa__loginButton').click()
      cy.get('#email').type('Alejarodriguez10@gmail.com')
      cy.get('#password').type('Andresbsc2004')
      cy.get('form > button').click()
    })

    it('Prueba 3: Validar que cargue la pagina principal', () => {
        cy.get('.page-module__GsSXCa__title').should('be.visible')
        cy.get('.page-module__GsSXCa__searchBar').should('be.visible')
        cy.get('main > :nth-child(3)').should('be.visible')
    })      


    it('Prueba 4: Validar la búsqueda de un producto', () => {
      cy.get('main > :nth-child(3) > :nth-child(1) > :nth-child(1)').click()
      cy.get('.page-module__GsSXCa__searchContainer > input').type('PC Gamer')
      cy.get('.page-module__GsSXCa__searchButton').click()
      //delay de 20 segundos para que se cargue la pagina
      cy.wait(20000)
      cy.get('.products-module__GkCdHa__productsSection > :nth-child(1)').should('be.visible')
    })

    it('Prueba 5: Validar que no se busque un producto sin categoría', () => {
      cy.get('.page-module__GsSXCa__searchContainer > input').type('PC Gamer')
      cy.get('.page-module__GsSXCa__searchButton').click()
      cy.get('.page-module__GsSXCa__errorMessage').should("be.visible")
    })
  
    it('Prueba 6: validar cierre de sesion', () => {
      cy.get('.general-ui-module__G9rtfa__loginButton').click()
      cy.get(':nth-child(3) > a > .user-layout-module__MkbyVq__userLink > p').click()
      cy.get('.general-ui-module__G9rtfa__loginButton').should("be.visible")
    })

    it('Prueba 7: Validar footer de la página', () => {
      cy.get('.general-ui-module__G9rtfa__footer > :nth-child(1) > [href="/"]').click()
      cy.get('.page-module__GsSXCa__title').should('be.visible')
      cy.get(':nth-child(2) > a').should('have.text', ' Términos y condiciones ')
      cy.get('[href="/about-us"] > p').click()
      cy.get('.about-us-module__4zO1tq__title').should("be.visible")
    })
    
    it('Prueba 8: Agregar a favoritos', () => {
      cy.get('main > :nth-child(3) > :nth-child(1) > :nth-child(1)').click()
      cy.get('.page-module__GsSXCa__searchContainer > input').type('PC Gamer')
      cy.get('.page-module__GsSXCa__searchButton').click()
      //delay de 20 segundos para que se cargue la pagina
      cy.wait(20000)
      cy.get(':nth-child(1) > .products-module__GkCdHa__imageContainer > #favoriteButton > img').click()
      cy.wait(3000)
      cy.get('.general-ui-module__G9rtfa__loginButton').click()
      cy.get(':nth-child(2) > a > .user-layout-module__MkbyVq__userLink').click()
      cy.get('.favorite-module__OQtUma__productCard').should('be.visible')
      cy.get('.favorite-module__OQtUma__favoriteButton > img').click()
      cy.wait(3000)
    })
    
    it('Prueba 9: Cambiar y quitar categoría', () => {
      cy.get('main > :nth-child(3) > :nth-child(1) > :nth-child(1)').click()
      cy.get('.page-module__GsSXCa__categorieButton > p').should('have.text', 'Tecnología')
      cy.get('main > :nth-child(3) > :nth-child(2) > :nth-child(1)').click()
      cy.get('.page-module__GsSXCa__categorieButton > p').should('have.text', 'Accesorios')
      cy.get('.page-module__GsSXCa__categorieButton > button').click()
      cy.get('.page-module__GsSXCa__categorieButton > p').should('have.text', 'Categoría')
    })
    
    it('Prueba 10: validar pagina de informacion', () => {
      cy.get('[href="/about-us"] > p').click()
      cy.get('.about-us-module__4zO1tq__title').should('be.visible')
      cy.get('.about-us-module__4zO1tq__aboutContainer > img').should('be.visible')
      cy.get(':nth-child(1) > p').should('be.visible')
    })
    
})