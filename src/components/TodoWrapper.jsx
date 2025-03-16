import React, { useState, useEffect } from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { EditTodoForm } from './EditToDoForm';
import { db, auth } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const navigate = useNavigate();
    const user = auth.currentUser;

    useEffect(() => {
        if (!user) return;

        const q = query(collection(db, "todos"), where("userId", "==", user.uid));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setToDos(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        });

        return () => unsubscribe();
    }, [user]);

    // ✅ Add new task
    const addToDo = async (task) => {
        if (!user) {
            alert("Please log in to add tasks.");
            return;
        }

        try {
            await addDoc(collection(db, "todos"), {
                task: task,
                completed: false,
                isEditing: false,
                userId: user.uid,  // Ensure task belongs to logged-in user
                timestamp: new Date()
            });
        } catch (error) {
            console.error("❌ Error adding task: ", error);
            alert("Error adding task: " + error.message);
        }
    };

    // ✅ Toggle task completion
    const toggleComplete = async (id, completed) => {
        try {
            const taskRef = doc(db, "todos", id);
            await updateDoc(taskRef, { completed: !completed });
        } catch (error) {
            console.error("❌ Error toggling completion: ", error);
        }
    };

    // ✅ Delete task
    const deleteToDo = async (id) => {
        try {
            await deleteDoc(doc(db, "todos", id));
        } catch (error) {
            console.error("❌ Error deleting task: ", error);
        }
    };

    // ✅ Enable edit mode
    const editToDo = async (id) => {
        try {
            await updateDoc(doc(db, "todos", id), { isEditing: true });
        } catch (error) {
            console.error("❌ Error enabling edit mode: ", error);
        }
    };

    // ✅ Update edited task
    const editTask = async (newTask, id) => {
        try {
            await updateDoc(doc(db, "todos", id), { task: newTask, isEditing: false });
        } catch (error) {
            console.error("❌ Error updating task: ", error);
        }
    };

    // ✅ Toggle completed filter
    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    // ✅ Logout function
    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    const filteredTasks = showCompleted ? toDos.filter(todo => todo.completed) : toDos;

    return (
        <div className="TodoWrapper">
            <div className="header flex justify-between">
                <h2>To-Do List</h2>
                {user && <p>Welcome, {user.email}</p>}
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <button className="toggle-btn" onClick={toggleCompletedFilter}>
                {showCompleted ? 'Show All' : 'Show Completed'}
            </button>

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

            <Link to="/landingpage">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Landing Page
                </button>
            </Link>
        </div>
    );
};