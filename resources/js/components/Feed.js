import React from "react";
import "./../../css/app.css";
import Post from "./Post";
import Messages from "./Messages";

export default function Welcome() {
    return (
        <>
            <div className="feed">
                <div className="feed-contents">
                    <Post />
                </div>
            </div>

            <div className="feed">
                <div className="feed-contents">
                    <Messages />
                </div>
            </div>
        </>
    );
}
