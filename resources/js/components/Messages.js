import React from "react";
import "./../../css/app.css";

export default function Messages(props) {
    return (
        <>
            <div className="feed">
                <div className="feed-contents">
                    <div className="feed-top"></div>
                    <div className="feed-center">
                        {props.title && (
                            <h1 className="feed-postTitle">{props.title}</h1>
                        )}
                        {
                            <img
                                src={props.image}
                                alt="image"
                                className="feed-image"
                            />
                        }
                        {props.post && (
                            <p className="feed-postBody">{props.post}</p>
                        )}
                    </div>
                    <div className="feed-bottom"></div>
                </div>
            </div>
        </>
    );
}
