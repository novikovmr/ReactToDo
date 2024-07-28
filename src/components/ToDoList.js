import React from 'react';
import ToDoItem from './ToDoItem';

import './ToDoList.css';

function ToDoList(props) {


  return (
    <div className='toDoList'>
      {props.toDoList.map((item) => (
        <ToDoItem key={item.id} title={item.title} description={item.description} date={item.date}/>
      ))}
      
      
    </div>
  )
}

export default ToDoList