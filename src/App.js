import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import Snowflake from './components/SnowFlake';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import { makeSnowflake } from './components/SnowFlakeUtils';
import TodoInsert from './components/TodoInsert';


let nextId = 1;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([]);


  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = text => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <div className="App">
      <TodoTemplate todoLength={todos.length}>
        <TodoList 
          todos={todos}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        <div className='add_button' onClick={onInsertToggle}>
          <MdAddCircle />
        </div>
        {insertToggle && (
          <TodoInsert
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            selectedTodo={selectedTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </TodoTemplate>   
      <Snowflake />
    </div>
  );
}

export default App;