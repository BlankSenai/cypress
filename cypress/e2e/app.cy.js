class TestElements {
  elements = {
    addNewBtn: () => cy.get('.newNote'),
    input: () => cy.get('textarea'),
    deleteBtn: () => cy.get('.delete'),
    closeModal: () => cy.get('.close'),
    addNoteBtn: () => cy.get('.addNote'),
    noteCard: () => cy.get('.card'),
    editNote: () => cy.get('.edit')
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

describe('Editing note', () => {
  it('Enter site', () => {
    cy.visit('/')
  })

  it('Click in edit button', () => {
    testElements.elements.noteCard().trigger('mouseover')
    testElements.elements.editNote().click()
  })

  it('Input text', () => {
    testElements.elements.input().clear().type('Edited note')
  })

  it('Click in edit note button', () => {
    testElements.elements.addNoteBtn().click()
  })

  it('Check if note is edited', () => {
    testElements.elements.noteCard().children('p').should('contain.text', 'Edited note')
  })
})

describe('Deleting note', () => {
  it('Enter site', () => {
    cy.visit('/')
  })

  it('Click in delete button', () => {
    testElements.elements.noteCard().trigger('mouseover')
    testElements.elements.deleteBtn().click()
  })

  it('Check if element is deleted', () => {
    testElements.elements.noteCard().should('not.exist')
  })
})

describe('Validating input', () => {
  it('Enter site', () => {
    cy.visit('/')
  })

  it('Click add button', () => {
    testElements.elements.addNewBtn().click()
  })

  it('Click in add note button without any text', () => {
    testElements.elements.addNoteBtn().click()
  })

  it('Check if input is red', () => {
    testElements.elements.input().should('have.css', 'border-color', 'rgb(229, 57, 53)')
  })

  it('Close Modal', () => {
    testElements.elements.closeModal().click()
  })
})
