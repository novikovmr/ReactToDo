import React, { useState } from 'react';
import './ToDoInput.css';

function ToDoInput(props) {

  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  // const [inputDate, setInputDate] = useState('');

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  }

  const descriptionChangeHandler = (event) => {
    setInputDescription(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const saveData = {
      title: inputTitle,
      description: inputDescription,
      date: new Date(),
    };

    props.onAddToDo(saveData);
    setInputTitle('');
    setInputDescription('')
  }

  return (
    <div className='todo-input'>
      <form className='todo-input__form' onSubmit={submitHandler}>
        <div className='todo-input__left'>
          <div className='todo-input__title'>
            <input 
              type='text' 
              id='todoTitle' 
              name='todoTitle' 
              placeholder='Заголовок' 
              value={inputTitle} 
              onChange={titleChangeHandler}>
            </input>
          </div>
          <div className='todo-input__description'>
            <textarea 
              type='text-area' 
              id='todoDescription' 
              name='todoDescription' 
              rows="5" cols="33" 
              placeholder='Опишите заметку' 
              value={inputDescription} 
              onChange={descriptionChangeHandler}>
            </textarea>
          </div>
        </div>
        <div className='todo-input__right'>
          <button className='button input__btn' type='submit'>Добавить таску</button>
        </div>
      </form>
    </div>
  )
}

export default ToDoInput