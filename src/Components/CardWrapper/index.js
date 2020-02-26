import React from "react";
import CardTitle from "../CardTitle";
import CardText from "../CardText";

function CardWrapper() {
    return (
        <div class="card">
            <div class="card-body">
                <CardTitle />
                <CardText />
            </div>
        </div>
    )
}

export default CardWrapper;