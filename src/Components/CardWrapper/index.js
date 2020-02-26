import React from "react";
import CardTitle from "../CardTitle";
import CardText from "../CardText";
import CardLink from "../CardLink";
import Button from "../Button";
import FormWrapper from "../FormWrapper";

function CardWrapper() {
    return (
        <div className="card">
            <div className="card-body">
                <CardTitle />
                <CardText />
                <FormWrapper />
                <Button />
                <CardLink />
            </div>
        </div>
    )
}

export default CardWrapper;