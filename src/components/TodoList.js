import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";
//this component will render the list of todos to the todo.js in form of an array
// it takes todos array and two functions as parameters
// will use .mao function to render the list in todo
function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default TodoList;