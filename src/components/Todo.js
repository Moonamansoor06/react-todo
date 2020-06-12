import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
// we use them to add react builtin styling in  the code
import CloseIcon from "@material-ui/icons/Close";
import React from "react";


//todo component is created to render todos and handle actions on to do
//it takes todo as parameter with two functions from App components
// this function would return checkbox, task and button to where it is called from
// in this case parent is App 
function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
// list items, typography checkbox, close icon and icon button are used as sustitute of regular HTML
// these are used bcoz we included @materials
  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;