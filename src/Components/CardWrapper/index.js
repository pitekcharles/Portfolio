import React from "react";
import CardTitle from "../CardTitle";
import CardText from "../CardText";
import CardLink from "../CardLink";
import Button from "../Button";
import FormWrapper from "../FormWrapper";

function CardWrapper({ children }) {
    return (
        <div className="card text-center">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default CardWrapper;