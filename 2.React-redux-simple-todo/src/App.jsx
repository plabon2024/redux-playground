import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deletetodo, toggletodo, updatetodo } from "./store";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRef = useRef(null);

  const handleadd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addtodo(input));
    }
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updatetodo({ id, newText: editText }));
      setEditingId(null);
      setEditText("");
    }
  };
  return (
    <>
      {" "}
      <div className="h-screen  bg-slate-700 text-white flex justify-center items-center place-items-center mx-auto ">
        <div className="max-w-sm   p-4 rounded flex flex-col gap-5">
          <h1 className="font-bold text-4xl text-slate-300">Redux Todo App</h1>
          {/* Form for new todo */}
          <form onSubmit={handleadd}>
            <input
              className=" border py-1 px-2 rounded-sm "
              ref={inputRef}
              value={input}
              maxLength={50}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a todo"
            />
            <button
              className="bg-black text-white py-1 px-2 rounded-md mx-2"
              type="submit"
            >
              Add
            </button>
          </form>
          <ul className="flex gap-2 flex-col">
            {todos.map((todo) => (
              <li className="list-disc" key={todo.id}>
                {editingId === todo.id ? (
                  <div className="flex justify-between">
                    <input
                      className=" border py-1 px-2 rounded-sm"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      autoFocus
                      maxLength={50}
                    />
                    <button
                      className="bg-black text-white py-1 px-2 rounded-md mx-2"
                      onClick={() => handleUpdate(todo.id)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-black text-white py-1 px-2 rounded-md"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between ">
                    <div
                      className="text-xl whitespace-normal break-words flex-1 "
                      onClick={() => dispatch(toggletodo(todo.id))}
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                        cursor: "pointer",
                      }}
                    >
                      {todo.text}
                    </div>
                    <div>
                      <button
                        className="bg-black text-white py-1 px-2 rounded-md mx-2"
                        onClick={() => {
                          setEditingId(todo.id);
                          setEditText(todo.text);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-black text-white py-1 px-2 rounded-md"
                        onClick={() => dispatch(deletetodo(todo.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
