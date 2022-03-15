import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./../../css/app.css";

export default function Post() {
    const [post, setPost] = React.useState({
        title: "",
        post: "",
        image: "",
    });
    const [validationError, setValidationError] = React.useState({});
    //const navigate = useNavigate();
    const csrf = () => axios.get("/sanctum/csrf-cookie");
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setPost((prevState) => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    };
    React.useEffect(() => {
        async function fetchCookie() {
            await csrf();
        }
        fetchCookie();
    }, []);
    function handleSubmit(event) {
        event.preventDefault();
    }
    async function handleClick() {
        console.log(post);
        await csrf();
        await axios
            .post("/api/post", post)
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
