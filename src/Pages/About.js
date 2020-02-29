import React from "react";
import JumbotronWrapper from "../Components/JumbotronWrapper";
import CardWrapper from "../Components/CardWrapper";
import CardTitle from "../Components/CardTitle";

const description = "Charles Pitek is Awesome and you should hire him!"

function About(){
    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-1">
                        <CardWrapper>
                            <CardTitle title="About"></CardTitle>
                        </CardWrapper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;