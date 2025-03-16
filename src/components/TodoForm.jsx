// JavaScript 
// src/AddTodo.js 
// import {db} from '../firebase' 
// import {collection, addDoc, Timestamp} from 'firebase/firestore'


// import { auth } from "../firebase"; 
import React, { useState } from 'react';

export const TodoForm = ({ addToDo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return; // Prevent adding empty tasks
        addToDo(value);
        setValue("");
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="todo-input"
                value={value}
                placeholder="Enter task"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
};
