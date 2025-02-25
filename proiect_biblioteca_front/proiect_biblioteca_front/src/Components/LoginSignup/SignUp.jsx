import React, {useState} from "react";
import user_icon from "../Assets/user_icon.png";
import email_icon from "../Assets/email_icon.png";
import password_icon from "../Assets/password_icon.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './LoginSignup.css';


const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        if(username && email && password) {
            e.preventDefault();
            try {
                const response = await axios.post("http://localhost:8080/register", {
                    username,
                    password,
                    email,
                });
                navigate("/login");
            } catch (err) {
                setError("Invalid credentials");
            }
        }else{
            setError("Empty fields");
        }
    };
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input type="text" placeholder="Name" value={username}  onChange={(e)=> setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Email Id" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword((e.target.value))} />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit gray" onClick={handleSubmit}>Sign Up</div>
                <div className="submit" onClick={()=>{navigate("/login")}}>Login</div>
            </div>
        </div>
    );
};

export default Signup;