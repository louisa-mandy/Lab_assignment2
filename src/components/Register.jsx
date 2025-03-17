import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(""); // Reset errors

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration successful!");
            navigate("/todo"); // ✅ Redirect to To-Do List on success
        } catch (err) {
            setError("Registration failed. " + err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Register</h2>

            {error && <p className="text-red-500 mb-2">{error}</p>}

            <form onSubmit={handleRegister} className="flex flex-col w-80 bg-white p-6 rounded-lg shadow-md">
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

                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Register
                </button>
            </form>

            {/* Login Button */}
            <p className="mt-4 text-gray-600">Already have an account?</p>
            <Link to="/login">
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Login
                </button>
            </Link>
        </div>
    );
};

export default Register;
