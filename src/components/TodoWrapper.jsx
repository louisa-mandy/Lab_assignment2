import React, { useState } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { EditTodoForm } from './EditToDoForm';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";


export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);

    // Function to add a new task
    const addToDo = (task) => {
        setToDos([...toDos, { id: uuidv4(), task, completed: false, isEditing: false }]);
    };

    // Function to toggle task completion
    const toggleComplete = (id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    // Function to delete a task
    const deleteToDo = (id) => {
        setToDos(toDos.filter(todo => todo.id !== id));
    };

    // Function to switch a task to edit mode
    const editToDo = (id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, isEditing: true } : todo));
    };

    // Function to update the task after editing
    const editTask = (newTask, id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo));
    };

    // Function to toggle between completed tasks and all tasks
    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    const filteredTasks = showCompleted ? toDos.filter(todo => todo.completed) : toDos;

    return (
        <div className="TodoWrapper">
            

            <div className="button-container">
                <button className="toggle-btn" onClick={toggleCompletedFilter}>
                    {showCompleted ? 'Show All' : 'Show Completed'}
                </button>
            </div>

            <TodoForm addToDo={addToDo} />

            {filteredTasks.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} editToDo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                    />
                )
            )}

            {/* Home Button */}
            <Link to="/">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Back to Home
                </button>
            </Link>

            
        </div>

    
        
    );


    
};
