// src/tests/todo-list.spec.js

describe("Todo list", () => {
  it("should add, mark as completed and remove items", () => {
    // Go to the todo list page
    cy.visit("https://forhemer.github.io/React-Todo-List/");

    // Add three items
    cy.get("input[name='new-todo']")
      .type("Item 1")
      .type("{enter}");
    cy.get("input[name='new-todo']")
      .type("Item 2")
      .type("{enter}");
    cy.get("input[name='new-todo']")
      .type("Item 3")
      .type("{enter}");

    // Check that there are three items
    cy.get(".todo-list li").should("have.length", 3);

    // Mark one item as completed
    cy.get(".todo-list li:nth-child(2) .todo-checkbox")
      .click();

    // Check that the item is now completed
    cy.get(".todo-list li:nth-child(2)").should("have.text", "Item 2 (completed)");

    // Remove the item
    cy.get(".todo-list li:nth-child(2) .todo-close")
      .click();

    // Check that the item is no longer visible
    cy.get(".todo-list li:nth-child(2)").should("not.exist");
  });
});
