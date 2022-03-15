import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Header";
import Welcome from "./Welcome";
import "./../../css/app.css";

function App() {
    return (
        <main className="app-main">
            <Navbar />
            <div className="app-content">
                <Welcome />
            </div>
        </main>
    );
}
export default App;
