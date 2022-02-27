import React from "react";
import "./../../css/app.css";
import Post from "./Post";
import Messages from "./Messages";

export default function Welcome() {
    const [post, setPost] = React.useState([]);

    console.log(post);

    React.useEffect(() => {
        axios.get("/get/post/list").then((response) => {
            setPost((prevState) => response.data);
            console.log(response);
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
