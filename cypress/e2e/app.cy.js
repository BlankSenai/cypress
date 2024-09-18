class TestElements {
  elements = {
    addNewBtn: () => cy.get('.newNote'),
    input: () => cy.get('textarea'),
    deleteBtn: () => cy.get('.delete'),
    closeModal: () => cy.get('.close'),
    addNoteBtn: () => cy.get('.addNote'),
    noteCard: () => cy.get('.card')
  }
}

const testElements = new TestElements()

describe('Creating note', () => {
  it('Enter site', () => {
    cy.visit('/')
  })

  it('Click add button', () => {
    testElements.elements.addNewBtn().click()
  })

  it('Write text in input', () => {
    testElements.elements.input().type('New note')
  })

  it('Click in add note button', () => {
    testElements.elements.addNoteBtn().click()
  })

  it('Confirm if note is created', () => {
    testElements.elements.noteCard().should('exist')
    testElements.elements.noteCard().children('p').should('contain.text', 'New note')
  })
})