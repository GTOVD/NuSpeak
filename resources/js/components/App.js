import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Header";
import Welcome from "./Welcome";
import "./../../css/app.css";

function App() {
    return (
        <div className="app-main">
            <Navbar />
            <Welcome />
        </div>
    );
}

export default App;
