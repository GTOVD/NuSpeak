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
                        {console.log(props)}
                        {
                            <img
                                //src={`/storage/${props.image}`}
                                src={props.image}
                                //src="https://i.imgflip.com/30b1gx.jpg"
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
