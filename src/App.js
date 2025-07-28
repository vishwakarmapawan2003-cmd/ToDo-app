import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import backgroundImage from './assets/bbd.jpg';  

function App() {
  const [listTodo, setListTodo] = useState([]);
  const addList = (inputText) => {
    if (inputText.trim() !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',   
  };

  return (
    <div style={appStyle} className="main-container">  
      <div className="center-container">
        <h1 className="app-heading">To-Do </h1>
        <TodoInput addList={addList} />
        <ul className="list">
          {listTodo.map((item, index) => (
            <TodoList
              key={index}
              index={index}
              item={item}
              deleteItem={deleteListItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
