import React from "react";
import JumbotronHeadline from "../JumbotronHeadline";

function JumbotronWrapper() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <JumbotronHeadline />
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
    )
}

export default JumbotronWrapper;