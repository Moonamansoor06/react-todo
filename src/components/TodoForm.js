
  
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {v4 as uuid} from "uuid";

// this compinent will render the todo form with necesary filds and actions
//use state is a react hook

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });
//this function is an event handler
  // this will handle change in task input and take that event as parameter
  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4 });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        // everytime change takes place the event handler will be called
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
