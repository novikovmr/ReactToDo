import { useState } from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

const INITIAL__TODO = [
  {
    id: Math.random(),
    title: 'Зайти в спортмастер',
    description: 'Купить ракетки, набор мячей и пару батончиков батончиковбатончиковб атончиковбатончиковбатончиковбат ончиковбатончиковбатонч иковбатончиковбатончиков',
    date: new Date(2024, 6, 25),
  },
  {
    id: Math.random(),
    title: 'Проект',
    description: 'До воскр до доверстать сайт.',
    date: new Date(2024, 6, 26),
  },
  {
    id: Math.random(),
    title: 'Зайти в спортмастер',
    description: 'Купить ракетки, набор мячей и пару батончиков',
    date: new Date(2024, 6, 27),
  },
]

function App() {

  const [toDoList, setToDoList] = useState(INITIAL__TODO)
  
  const addToDoHandler = (item) => {
    setToDoList(prev => {
      return [item, ...prev]
    })
  }

  return (
    <div className="App container">
      <h2>To Do List</h2>
      <ToDoInput onAddToDo={addToDoHandler}/>
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
