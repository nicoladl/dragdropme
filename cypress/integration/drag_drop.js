import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types"

describe('Drag and drop test', () => {
  it('move block', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.box')
      .trigger('mousedown', { which: 1 })
      .should('have.class', 'draggable')
      .wait(1000)
      .trigger('mousemove', { clientX: 550, clientY: 560 })
      .wait(1000)
      .trigger('mouseup', { force: true })
      .should('not.have.class', 'draggable')
  })
})