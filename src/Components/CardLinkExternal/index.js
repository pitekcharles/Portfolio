import React from "react";

function CardLinkExternal ({children, name}) {
    return(
        <a href={children} className="card-link">{name}</a>
    );
}

export default CardLinkExternal;