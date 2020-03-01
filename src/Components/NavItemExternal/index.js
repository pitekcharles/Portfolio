import React from "react";

function NavItemExternal({href, name}) {
    return (
        <li class="nav-item">
            <a class="nav-link" href={href}>{name}</a>
        </li>
    );
}

export default NavItemExternal;