describe('Pruebas de autenticación', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('Prueba 1: validar registro', () => {
      cy.get('.general-ui-module__G9rtfa__loginButton').click()
      cy.get('p > span').click()
      cy.get('#name').type('Prueba')
      cy.get('#email').type('prueba@prueba.com')
      cy.get('#province').select('Manabí')
      cy.get('#city').select('Chone')
      cy.get('#password').type('Prueba123')
      cy.get('#confirmPassword').type('Prueba123')
      cy.get('form > button').click()
    })
  
    it('Prueba 2: validar inicio de sesión', () => {
      cy.get('.general-ui-module__G9rtfa__loginButton').click()
      cy.get('#email').type('Alejarodriguez10@gmail.com')
      cy.get('#password').type('Andresbsc2004')
      cy.get('form > button').click()
    })
})