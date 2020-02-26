import React from "react";
import CardTitle from "../CardTitle";
import CardText from "../CardText";
import CardLink from "../CardLink";
import Button from "../Button";

function CardWrapper() {
    return (
        <div className="card">
            <div className="card-body">
                <CardTitle />
                <CardText />
                <Button />
                {/* <CardLink /> */}
            </div>
        </div>
    )
}

export default CardWrapper;