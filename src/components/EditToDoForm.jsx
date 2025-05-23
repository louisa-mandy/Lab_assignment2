// JavaScript 
// src/AddTodo.js 
import {collection, addDoc, Timestamp} from 'firebase/firestore'

// import { auth } from "../firebase"; 
import React, { useState } from 'react';

export const EditTodoForm = ({ editToDo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        editToDo(value, task.id);
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder='Update task'
            />
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    );
};
