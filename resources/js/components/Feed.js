import React from "react";
import "./../../css/app.css";
import Post from "./Post";
import Messages from "./Messages";
import axios from "axios";
import Swal from "sweetalert2";

export default function Welcome() {
    const [post, setPost] = React.useState([]);
    const csrf = () => axios.get("/sanctum/csrf-cookie");
    const [validationError, setValidationError] = React.useState({});
    React.useEffect(() => {
        async function fetchCookie() {
            await csrf();
        }
        fetchCookie();
        axios
            .get("/api/post")
            .then(({ data }) => {
                setPost((prevState) => data);
                console.log(data);
                Swal.fire({
                    icon: "success",
                    text: "Successfully pulled data from database!",
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
