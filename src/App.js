import React from "react";
import Nav from "./Components/Nav"
import JumbotronWrapper from "./Components/JumbotronWrapper";
import CardWrapper from "./Components/CardWrapper";
import FooterWrapper from "./Components/FooterWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default App;