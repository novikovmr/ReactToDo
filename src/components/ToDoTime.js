import React from 'react';

import './ToDoTime.css';

function ToDoTime(props) {


  return (
    
    <time className='date toDoItem__date'>
      <p className='date__item'>{props.date.toLocaleString('ru-Ru', {day: '2-digit'})}</p>
      <p className='date__item'>{props.date.toLocaleString('ru-Ru', {month: '2-digit'})}</p>
      <p className='date__item'>{props.date.getFullYear()}</p>
    </time>
    
  )
}

export default ToDoTime