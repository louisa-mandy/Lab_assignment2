import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteToDo, editToDo }) => {
    return (
        <div className="Todo">
            <p className={task.completed ? 'completed' : ""}>{task.task}</p>

            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                />
                
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editToDo(task.id)}
                />

                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteToDo(task.id)}
                />
            </div>
        </div>
    );
};
