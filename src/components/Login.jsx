import React, { useState } from "react";
// import { loginUser } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Reset errors

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/todo"); // ✅ Redirect to To-Do List on success
        } catch (err) {
            setError("Login failed. Check your email and password.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleLogin} className="flex flex-col">
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="mb-2 px-4 py-2 border rounded"
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="mb-2 px-4 py-2 border rounded"
                    required 
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;