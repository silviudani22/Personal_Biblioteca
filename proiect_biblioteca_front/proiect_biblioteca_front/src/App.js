import './App.css';
import Login from "./Components/LoginSignup/LogIn";
import SignUp from "./Components/LoginSignup/SignUp";
import {Route, Routes} from "react-router-dom";
import Books from "./Components/LoginSignup/Books";

function App() {
    return (

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/books" element={<Books />} />
            </Routes>

    );
}

export default App;
