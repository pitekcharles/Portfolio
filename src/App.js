import React from "react";
import Nav from "./Components/Nav"
import JumbotronWrapper from "./Components/JumbotronWrapper";
import CardWrapper from "./Components/CardWrapper";
import FooterWrapper from "./Components/FooterWrapper";

function App() {
    return (
        <div>
            <Nav />
            <JumbotronWrapper />
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <CardWrapper />
                    </div>
                </div>
            </div>
            <FooterWrapper />
        </div>
    );
}

export default App;