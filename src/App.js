import React from "react";
import Nav from "./Components/Nav"
import JumbotronWrapper from "./Components/JumbotronWrapper";
import CardWrapper from "./Components/CardWrapper";
import FooterWrapper from "./Components/FooterWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import "./App.css";

function App() {
    return (
        <>
            <div className="wrapper">
                <Router>
                    <div>
                        <Nav />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/projects" component={Projects} />
                    </div>
                </Router>
            </div>
            <FooterWrapper />
        </>
    );
}

export default App;