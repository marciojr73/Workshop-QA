describe ('Registro de usuario', ()=> {
    beforeEach (()=> {
        it
        cy.visit('https://alura-fotos.herokuapp.com/%27')
    })
    it('verificar o máximo de caractesres de todos os espaços', ()=> {
    cy.contains('Register now').click()
    cy.get('input[formcontrolname="userName"]').type('ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
    cy.get('input[formcontrolname="email"]').type('sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
      cy.get('input[formcontrolname="fullName"]').type('mssssssssssssssssssssssssssssssssssssssss');
      //cy.get('input[]').type('');
      cy.get('input[formcontrolname="password"]').type('sssssssssssssssssss');
      cy.contains('button','Register').click();    
    }) 

})
        