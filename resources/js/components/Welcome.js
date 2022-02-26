import React from "react";
import "./../../css/app.css";

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
                <div className="feed">
                    <div className="feed-contents">
                        <input
                            value={count}
                            onChange={handleChange}
                            placeholder="Create Post"
                            className="createpost"
                        />
                        <textarea
                            className="textarea"
                            placeholder="Text (optional)"
                        />
                    </div>
                </div>
                <div className="feed">
                    <div className="feed-contents">
                        <input
                            value={count}
                            onChange={handleChange}
                            placeholder="Create Post"
                            className="createpost"
                        />
                        <textarea
                            className="textarea"
                            placeholder="Text (optional)"
                        />
                    </div>
                </div>
            </div>
            <div className="welcome-community">
                <div className="feed">
                    <div className="feed-contents">
                        <input
                            value={count}
                            onChange={handleChange}
                            placeholder="Create Post"
                            className="createpost"
                        />
                        <textarea
                            className="textarea"
                            placeholder="Text (optional)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
