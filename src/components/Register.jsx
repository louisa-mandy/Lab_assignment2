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
        <div className="register-container">
            <h2>Register</h2>

            {error && <p className="error-text">{error}</p>}

            <form onSubmit={handleRegister}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <button type="submit" className="register-btn">
                    Register
                </button>
            </form>

            <p className="login-text">Already have an account?</p>
            <Link to="/login">
                <button className="login-btn">Login</button>
            </Link>
        </div>
    );
};

export default Register;
