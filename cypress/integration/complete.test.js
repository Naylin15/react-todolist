describe('end to end testing', () => {
    it('add note', () => {
      cy.visit('/');
      cy.get('#noteTitle').type('abc');
      cy.get('#addNoteBtn').click();
      cy.get('#0 h2:first').should('have.text', 'abc');
    });

    it('edit note', () => {
      cy.get('.ellipsis.vertical.icon').click();
      cy.get('#editNote-0').click();
      cy.get('#editInput-0').type('de');
      cy.get('#saveButton-0').click();
      cy.get('#0 h2:first').should('have.text', 'abcde');
    });

    it('remove note', () => {
      cy.get('.ellipsis.vertical.icon').click();
      cy.get('#removeNote-0').click();
      cy.get('#0').should('not.exist');
    });
  })