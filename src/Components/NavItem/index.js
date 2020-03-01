import React from "react";
import { Link } from "react-router-dom";

function NavItem({ route, name}) {

    return (
        <li className="nav-item active">
            <Link to={route} className="nav-link">
                {name}
            </Link>
        </li>
    )
}

export default NavItem;