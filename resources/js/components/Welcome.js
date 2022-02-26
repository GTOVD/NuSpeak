import React from "react";
import "./../../css/app.css";
import Feed from "./Feed";

export default function Welcome() {
    const [count, setCount] = React.useState("");

    console.log(localStorage);

    const onStorageUpdate = (e) => {
        const { key, newValue } = e;
        if (key === "count") {
            setCount(newValue);
        }
    };

    const handleChange = (e) => {
        setCount(e.target.value);
        localStorage.setItem("count", e.target.value);
    };

    React.useEffect(() => {
        setCount(localStorage.getItem("count") || "");
        window.addEventListener("storage", onStorageUpdate);
        return () => {
            window.removeEventListener("storage", onStorageUpdate);
        };
    }, []);

    return (
        <div className="welcome-main">
            <div className="welcome-feed">
                <Feed />
                <Feed />
                <Feed />
            </div>
            <div className="welcome-community">
                <Feed />
                <Feed />
            </div>
        </div>
    );
}
