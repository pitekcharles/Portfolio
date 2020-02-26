import React from "react";
import JumbotronHeadline from "../JumbotronHeadline";
import JumbotronParagraph from "../JumbotronParagraph";

function JumbotronWrapper() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <JumbotronHeadline />
                <JumbotronParagraph />
            </div>
        </div>
    )
}

export default JumbotronWrapper;