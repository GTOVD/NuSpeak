import React from "react";
import "./../../css/app.css";
import { SearchIcon } from "@heroicons/react/solid";

export default function Header() {
    return (
        <header>
            <nav className="">
                <div className="navbar-main">
                    <img
                        className="navbar-logo"
                        src="./images/NuSpeak.png"
                        alt="logo"
                        href=""
                    />
                    <form className="navbar-searchbar">
                        <input
                            type="text"
                            className="navbar-searchfield"
                            placeholder="Search NuSpeak"
                        />
                        <button className="navbar-searchbutton">
                            <SearchIcon className="navbar-icon" />
                        </button>
                    </form>
                    <div className="navbar-navdiv">
                        <div className="navbar-navdivlogin">
                            <button className="navbar-login">Log In</button>
                        </div>
                        <button className="navbar-register">Register</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
