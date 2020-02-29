import React from "react";
import JumbotronHeadline from "../JumbotronHeadline";
import JumbotronParagraph from "../JumbotronParagraph";

function JumbotronWrapper({title, description}) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <JumbotronHeadline title={title} />
                <JumbotronParagraph description={description} />
            </div>
        </div>
    )
}

export default JumbotronWrapper;