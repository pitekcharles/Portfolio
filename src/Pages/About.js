import React from "react";
import JumbotronWrapper from "../Components/JumbotronWrapper";
import CardWrapper from "../Components/CardWrapper";
import CardTitle from "../Components/CardTitle";
import CardText from "../Components/CardText";
import Image from "../Components/Image";
import Pic from "../Images/Charles-Pitek-Profile-Pic.JPG";

const description = "Charles Pitek is awesome and you should hire him!"

function About(){
    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-1">
                        <CardWrapper>
                            <CardTitle title="About"></CardTitle>
                            <Image src={Pic} alt="Picture of Charles Pitek in Japan" />
                            <CardText text={description} />
                        </CardWrapper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;