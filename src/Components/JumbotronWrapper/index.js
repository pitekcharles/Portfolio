import React from "react";
import JumbotronHeadline from "../JumbotronHeadline";
import JumbotronParagraph from "../JumbotronParagraph";

function JumbotronWrapper() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <JumbotronHeadline />
                <JumbotronParagraph />
            </div>
        </div>
    )
}

export default JumbotronWrapper;