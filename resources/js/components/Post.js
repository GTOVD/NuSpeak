import axios from "axios";
import React from "react";
import "./../../css/app.css";

export default function Post() {
    const [count, setCount] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [post, setPost] = React.useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handlePost = (event) => {
        setPost(event.target.value);
    };

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
        axios.get("/get/post/list").then((response) => {});
        setCount(localStorage.getItem("count") || "");
        window.addEventListener("storage", onStorageUpdate);
        return () => {
            window.removeEventListener("storage", onStorageUpdate);
        };
    }, []);

    return (
        <div className="feed">
            <div className="feed-contents">
                <form onSubmit={handlePost}>
                    <input
                        value={title}
                        onChange={handleTitle}
                        placeholder="Create Post"
                        className="createpost"
                    />
                    <textarea
                        value={post}
                        onChange={handlePost}
                        className="textarea"
                        placeholder="Text (optional)"
                    />
                </form>
            </div>
        </div>
    );
}
