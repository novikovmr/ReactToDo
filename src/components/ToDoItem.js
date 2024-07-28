import React from 'react';
import ToDoTime from './ToDoTime';

import './ToDoItem.css';
import ToDoTags from './ToDoTags';

function ToDoItem(props) {
  return (
    <div className='toDoItem'>
      <h3>{props.title}</h3>
      <div>{props.description}</div>
      <div className='toDoItem__bottom'>
        <ToDoTags />
        <ToDoTime date={props.date}/>
      </div>
    </div>
  )
}

export default ToDoItem