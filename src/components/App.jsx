import React, { useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [inputText, setInputText] = useState();
  const [addTodo, setAddTodo] = useState([]);

  function handleHange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setAddTodo((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setAddTodo((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleHange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addTodo.map((todo, index) => (
            <ToDo key={index} id={index} text={todo} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
