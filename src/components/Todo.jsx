import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

    return todos.map((todo, index) => (
    
        //click on the text

    // <div
    //     className={todo.isComplete ? "todo-row complete" : "todo-row"}
    //     key={index}
    // >
    //     <div key={todo.id} onClick={() => completeTodos(todo.id)}>
    //     {todo.text}
    //         </div>
        
        
        //click anywhere on the list
        
    <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
            onClick={() => completeTodos(todo.id)}
    >
        <div key={todo.id}>
        {todo.text}
            </div>
            

        <div className="icons">
            <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className="delete-icons"
            />
            <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-icons"
            />
        </div>
    </div>
));
}

export default Todo;
