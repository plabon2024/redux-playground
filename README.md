
# Redux CLI Todo App

This is a command-line Todo application built with **Redux** and **Node.js**.
It demonstrates how Redux can be used outside of React to manage state in a simple interactive console app.

---

## Features

* **Add Todo**: Add new todo items with unique IDs.
* **Update Todo**: Update the text of an existing todo by ID.
* **Toggle Todo**: Mark a todo as completed or incomplete.
* **Delete Todo**: Remove a todo from the list.
* **List Todos**: Display all current todos with their status.
* **Exit**: Quit the program.

---

## Requirements

* [Node.js](https://nodejs.org/) (v14 or later recommended)

---

## Installation

1. Clone the repository or copy the script.
2. Install dependencies (Redux):

```bash
npm install redux
```

3. Run the program:

```bash
node todo.js
```

*(Replace `index.js` with your file name if different)*

---

## Usage

When you start the app, you’ll see a menu like this:

```
____TODO____ 
1. Add Todo
2. Update Todo
3. Toggle Todo
4. Delete Todo
5. List Todo
6. Exit
_____________
Chose a Option:
```

### Examples

* **Add a Todo**
  Choose `1`, then enter a todo text.

* **Update a Todo**
  Choose `2`, enter the todo ID you want to update, then enter new text.

* **Toggle a Todo**
  Choose `3`, enter the todo ID to mark it completed/incomplete.

* **Delete a Todo**
  Choose `4`, enter the todo ID to remove it.

* **List Todos**
  Choose `5` to view all current todos.

---

## Example Session

```
____TODO____
1. Add Todo
2. Update Todo
3. Toggle Todo
4. Delete Todo
5. List Todo
6. Exit
_____________
Chose a Option: 1
Enter todo text: Learn Redux

Chose a Option: 5
Current Todos are:
Id: 1693578123456, Todo: Learn Redux - Incomplete
```




