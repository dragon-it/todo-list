import React from 'react';
import './TodoTemplate.css';

const TodoTemplate = ({ children, todoLength }) => {
    const today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
        };
    const watchDate = today.toLocaleDateString(undefined, options);

    return (
        <div className="todo-template">
            <h1>Todo List</h1>
            <h2>{watchDate}</h2>
            <div className='left_todo'>
                    오늘 할 일 ({todoLength})
                </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default TodoTemplate;