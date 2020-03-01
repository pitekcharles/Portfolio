import React from "react";
import CardWrapper from "../Components/CardWrapper";
import CardTitle from "../Components/CardTitle";
import CardText from "../Components/CardText";

function Contact(){
    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-1">
                        <CardWrapper>
                            <CardTitle title="Contact"></CardTitle>
                            <CardText text="Feel free to reach out to me" />
                            <CardText text="Phone: 434-872-3010" />
                            <CardText text="Email: charles.pitek@gmail.com" />
                            <CardText text="Location: Denver, CO" />
                        </CardWrapper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;