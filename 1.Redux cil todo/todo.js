const { combineReducers, createStore } = require("redux");
const readline = require("readline");
const { exit } = require("process");

// reducer
function todoReducer(state = [], action) {
  switch (action.type) {
    case "add_todo":
      return [
        ...state,
        { id: Date.now(), text: action.payload, complete: false },
      ];
    case "update_todo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "toggle_todo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    case "delete_todo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

// store
const reducer = combineReducers({ todo: todoReducer });
const store = createStore(reducer);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\n____TODO____ ");
  console.log("1. Add Todo");
  console.log("2. Update Todo");
  console.log("3. Toggle Todo");
  console.log("4. Delete Todo");
  console.log("5. List Todo");
  console.log("6. Exit");
  console.log("_____________");
  rl.question("Chose a Option: ", handleInput);
}

function handleInput(option) {
  switch (option.trim()) {
    case "1":
      rl.question("Enter todo text: ", (text) => {
        store.dispatch({ type: "add_todo", payload: text });
        showMenu();
      });
      break;
    case "2":
      rl.question("Enter todo id to Update: ", (id) => {
        rl.question("Enter new  text : ", (text) => {
          store.dispatch({
            type: "update_todo",
            payload: { id: Number(id), text },
          });
          showMenu();
        });
      });
      break;
    case "3":
      rl.question("Enter todo id to toggle: ", (id) => {
        store.dispatch({ type: "toggle_todo", payload: { id: Number(id) } });
        showMenu();
      });
      break;
    case "4":
      rl.question("Enter todo id to Delete: ", (id) => {
        store.dispatch({ type: "delete_todo", payload: Number(id) });
        showMenu();
      });
      break;
    case "5":
      listTodo();
      showMenu();
      break;
    case "6":
      exit()
      break;

    default:
      console.log("¯(°_o)/¯  Invalid option ");
      showMenu();
  }
}

function listTodo() {
  const todo = store.getState().todo;
  console.log("\nCurrent Todos are: ");
  if (todo.length === 0) console.log("No todo Found !");
  todo.forEach((todo) => {
    console.log(
      `Id: ${todo.id}, Todo: ${todo.text} - ${
        todo.complete ? "Completed" : "Incomplete"
      }`
    );
  });
}
showMenu();
