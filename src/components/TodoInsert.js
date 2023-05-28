import React, { useState, useEffect } from "react";
import { MdAddCircle } from 'react-icons/md'
import { TiTrash, TiPencil } from "react-icons/ti";
import './TodoInsert.css';

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate
}) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  const deleteTodo = async (id) => {
    try {
      await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          apikey: 'KDT5_nREmPe9B', // KDT 5기 APIKEY 입니다!
          username: 'KDT5_LeeYongSoo',
        },
      });
      onRemove(id);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder="할 일을 적어주세요"
          value={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <TiTrash
              onClick={() => {
                deleteTodo(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;