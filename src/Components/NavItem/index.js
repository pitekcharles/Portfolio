import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavItem({ route, name}) {
    const location=useLocation();

    return (
        <li className="nav-item active">
            <Link to={route} className="nav-link">
                {name}
            </Link>
        </li>
    )
}

export default NavItem;