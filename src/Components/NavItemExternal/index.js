import React from "react";

function NavItemExternal({href, name}) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={href}>{name}</a>
        </li>
    );
}

export default NavItemExternal;