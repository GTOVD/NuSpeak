import React from "react";
import "./../../css/app.css";
import Post from "./Post";
import Messages from "./Messages";

export default function Welcome() {
    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
        axios.get("/get/post/list").then((response) => {
            setPost((prevState) => response.data);
        });
    }, []);

    const messages = post.map((posts) => {
        return <Messages key={posts.id} {...posts} />;
    });

    return (
        <>
            <Post />
            {messages}
        </>
    );
}
