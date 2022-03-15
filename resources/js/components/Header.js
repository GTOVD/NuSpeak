import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import Swal from "sweetalert2";
import "./../../css/app.css";
import { SearchIcon } from "@heroicons/react/solid";

export default function Header() {
    const csrf = () => axios.get("/sanctum/csrf-cookie");
    const [validationError, setValidationError] = React.useState({});
    //const navigate = useNavigate();
    React.useEffect(() => {
        async function fetchCookie() {
            await csrf();
        }
        fetchCookie();
    }, []);
    const logIn = async () => {
        await csrf();
        axios
            .get("/login")
            .then(({ data }) => {
                Swal.fire({
                    icon: "success",
                    text: data.message,
                });
                //navigate("/");
            })
            .catch(({ response }) => {
                if (response.status === 422) {
                    setValidationError(response.data.errors);
                } else {
                    Swal.fire({
                        text: response.data.message,
                        icon: "error",
                    });
                }
            });
    };
    const register = async () => {
        await csrf();
        axios
            .get("/register")
            .then(({ data }) => {
                Swal.fire({
                    icon: "success",
                    text: data.message,
                });
                //navigate("/");
            })
            .catch(({ response }) => {
                if (response.status === 422) {
                    setValidationError(response.data.errors);
                } else {
                    Swal.fire({
                        text: response.data.message,
                        icon: "error",
                    });
                }
            });
    };
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
                            <button className="navbar-login" onClick={logIn}>
                                Log In
                            </button>
                        </div>
                        <button className="navbar-register" onClick={register}>
                            Register
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
