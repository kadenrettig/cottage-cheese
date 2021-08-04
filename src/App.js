import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import Toggle from "./components/Toggle";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "Make to do list",
      description: "Write the to do app for day 4 of Trace camp",
      id: 1,
      stillTodo: true,
    },
    {
      title: "Be amazing",
      description: "You got this one down free",
      id: 2,
      stillTodo: false,
    },
  ]);

  const [visible, setVisible] = useState(false);

  const handleAdd = (title, description) => {
    /* add code for adding an item to the list with the input title and description */
    const newItem = {
      title,
      description,
      id: todo.length + 1,
      stillTodo: true,
    };

    setTodo((todo) => [...todo, newItem]);
  };

  function handleDelete(id) {
    console.log(id);
    //remove item
    const newList = todo.filter((todo) => todo.id !== id);

    setTodo(newList);
  }

  const handleDone = (id) => {
    setTodo(
      todo.map((newList) => {
        if (id === newList.id) {
          return { ...newList, stillTodo: false };
        }
        return newList;
      })
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* add a switch to toggle visibility on finished items */}
      <Toggle toggleVisibility={() => setVisible(!visible)} />
      {/* add dynamic array transformations to components */}
      {todo.map((todo) => (
        <TodoItem
          title={todo.title}
          description={todo.description}
          id={todo.id}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      ))}
      <Form handleSubmit={handleAdd} />
      <footer>© Kaden Rettig 2021. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
