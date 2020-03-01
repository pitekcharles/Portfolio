import React from "react";
import NavItem from "../NavItem";
import NavItemExternal from "../NavItemExternal";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">Charles Pitek</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavItem route="/" name="Home" />
                    <NavItem route="/about" name="About" />
                    <NavItem route="/contact" name="Contact" />
                    <NavItem route="/projects" name="Projects" />
                    <NavItemExternal href="https://linkedin.com/in/charles-pitek-8b1bb4198" name="linkedin" />
                    <NavItemExternal href="https://github.com/pitekcharles" name="Github" />
                </ul>
            </div>
        </nav>
    );
}

export default Nav;