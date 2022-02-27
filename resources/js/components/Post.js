import axios from "axios";
import React from "react";
import "./../../css/app.css";

export default function Post() {
    const [title, setTitle] = React.useState("");
    const [post, setPost] = React.useState({
        title: "",
        post: "",
        image: "https://preview.redd.it/kaopcso5hqw61.jpg?width=640&crop=smart&auto=webp&s=cbb5b1d898cd15644f5a434366ac45965b4915d2",
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setPost((prevState) => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    };

    React.useEffect(() => {}, []);

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleClick() {
        //axios put
    }

    return (
        <div className="feed">
            <div className="feed-contents">
                <form onSubmit={handleSubmit}>
                    <div className="feed-top"></div>
                    <div className="feed-center">
                        <input
                            value={post.title}
                            onChange={handleChange}
                            placeholder="Create Post"
                            className="feed-title"
                            name="title"
                        />
                        <textarea
                            value={post.post}
                            onChange={handleChange}
                            className="feed-textarea"
                            placeholder="Text (optional)"
                            name="post"
                        />
                    </div>
                    <div className="feed-bottom">
                        <button className="feed-button" onClick={handleClick}>
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
