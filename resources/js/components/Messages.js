import React from "react";
import "./../../css/app.css";

export default function Messages(props) {
    return (
        <>
            <div className="feed">
                <div className="feed-contents">
                    <h1 className="text">{props.title}</h1>
                    <p className="text">{props.post}</p>
                </div>
            </div>
        </>
    );
}
