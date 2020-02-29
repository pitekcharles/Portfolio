import React from "react";
import { Link, useLocation } from "react-router-dom";

function CardLink({route, name}) {
    return (
        <Link to={route} className="card-link">
            {name}
        </Link>
    );
}

export default CardLink;