import React, {useState} from "react";
import user_icon from "../Assets/user_icon.png";
import password_icon from "../Assets/password_icon.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './LoginSignup.css';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        if(username && password) {
            e.preventDefault();
            try {
                const response = await axios.post("http://localhost:8080/login", {
                    username,
                    password,
                });
                navigate("/books")
            } catch (err) {
                setError("Invalid credentials");
            }
        }else
        {
            setError("Empty fields");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="Username"/>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon"/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit gray" onClick={handleSubmit}>Login</div>
                <div className="submit" onClick={()=>{navigate("/register")}}>Sign Up</div>
            </div>
        </div>
    );
};

export default Login;