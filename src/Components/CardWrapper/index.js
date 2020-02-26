import React from "react";
import CardTitle from "../CardTitle";
import CardText from "../CardText";
import CardLink from "../CardLink";
import Button from "../Button";

function CardWrapper() {
    return (
        <div class="card">
            <div class="card-body">
                <CardTitle />
                <CardText />
                <Button />
                {/* <CardLink /> */}
            </div>
        </div>
    )
}

export default CardWrapper;