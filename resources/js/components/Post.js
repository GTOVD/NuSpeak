import React from "react";
import "./../../css/app.css";

export default function Post() {
    const [count, setCount] = React.useState("");

    const onStorageUpdate = (event) => {
        const { key, newValue } = event;
        if (key === "count") {
            setCount(newValue);
        }
    };

    const handleChange = (event) => {
        setCount(event.target.value);
        localStorage.setItem("count", event.target.value);
    };

    React.useEffect(() => {
        setCount(localStorage.getItem("count") || "");
        window.addEventListener("storage", onStorageUpdate);
        return () => {
            window.removeEventListener("storage", onStorageUpdate);
        };
    }, []);

    return (
        <>
            <input
                value={count}
                onChange={handleChange}
                placeholder="Create Post"
                className="createpost"
            />
            <textarea className="textarea" placeholder="Text (optional)" />
        </>
    );
}
