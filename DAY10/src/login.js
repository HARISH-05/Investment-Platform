import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate=useNavigate();
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(email);
        navigate('/dashboard');
    }
    return (
        <div className="body">
        <div className="l">
            <h1 className="h2"><u>Login</u></h1>
            <form className="l1" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br/>
                <button className="b" type="submit">Log In</button>
            </form>
            <Link to="/register"><button className="link-btn">Don't have an account? Register here.</button></Link>
        </div>
        </div>
    )
    
}