class TestElements {
  addNewBtn = () => cy.get('.newNote')
  input = () => cy.get('textarea')
  deleteBtn = () => cy.get('.delete')
  closeModal = () => cy.get('.close')
  addNoteBtn = () => cy.get('.addNote')
  noteCard = () => cy.get('.card')
  editNote = () => cy.get('.edit')
}

const testElements = new TestElements()

describe('Creating note', () => {
  it('Enter site', () => {
    cy.visit('/')
  })
  
  it('Click add button', () => {
    testElements.addNewBtn().click()
  })
  
  it('Write text in input', () => {
    testElements.input().type('New note')
  })
  
  it('Click in add note button', () => {
    testElements.addNoteBtn().click()
  })

  it('Confirm if note is created', () => {
    testElements.noteCard().should('exist')
    testElements.noteCard().children('p').should('contain.text', 'New note')
  })
})

describe('Editing note', () => {
  it('Enter site', () => {
    cy.visit('/')
  })

  it('Click in edit button', () => {
    testElements.noteCard().trigger('mouseover')
    testElements.editNote().click()
  })

  it('Input text', () => {
    testElements.input().clear().type('Edited note')
  })

  it('Click in edit note button', () => {
    testElements.addNoteBtn().click()
  })

  it('Check if note is edited', () => {
    testElements.noteCard().children('p').should('contain.text', 'Edited note')
  })
})

describe('Deleting note', () => {
  it('Enter site', () => {
    cy.visit('/')
  })

  it('Click in delete button', () => {
    testElements.noteCard().trigger('mouseover')
    testElements.deleteBtn().click()
  })

  it('Check if element is deleted', () => {
    testElements.noteCard().should('not.exist')
  })
})

describe('Validating input', () => {
  it('Enter site', () => {
    cy.visit('/')
  })

  it('Click add button', () => {
    testElements.addNewBtn().click()
  })

  it('Click in add note button without any text', () => {
    testElements.addNoteBtn().click()
  })

  it('Check if input is red', () => {
    testElements.input().should('have.css', 'border-color', 'rgb(229, 57, 53)')
  })

  it('Close Modal', () => {
    testElements.closeModal().click()
  })
})
