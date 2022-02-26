import React from "react";
import "./../../css/app.css";

export default function Post() {
    return (
        <>
            <input value="" placeholder="Create Post" className="createpost" />
            <textarea className="textarea" placeholder="Text (optional)" />
        </>
    );
}
