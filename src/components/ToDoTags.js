import React from 'react';

import './ToDoTags.css';

function ToDoTags() {
  return (
    <div className='tags toDoItem__tags'>
      <ul className='tags__list'>
        <li className='tags__item'>
          <a href='/' className='tags__link'>#sport</a>
        </li>
        <li className='tags__item'>
          <a href='/' className='tags__link'>#shopping</a>
        </li>
        <li className='tags__item'>
          <a href='/' className='tags__link'>#weekend</a>
        </li>
      </ul>
    </div>
  )
}

export default ToDoTags