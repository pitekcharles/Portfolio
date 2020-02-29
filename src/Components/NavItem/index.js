import React from "react";

function NavItem({ route, name}) {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={route}>{name} <span className="sr-only">(current)</span></a>
        </li>
    )
}

export default NavItem;