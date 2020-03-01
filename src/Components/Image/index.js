import React from "react";

function Image ({src, alt}) {
    return (
        <img src={src} className="rounded" alt={alt}></img>
    );
}

export default Image;