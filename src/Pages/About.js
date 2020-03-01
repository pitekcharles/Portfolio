import React from "react";
import CardWrapper from "../Components/CardWrapper";
import CardTitle from "../Components/CardTitle";
import CardText from "../Components/CardText";
import Image from "../Components/Image";
import Pic from "../Images/Charles-Pitek-Profile-Pic.JPG";

const description = "I am a full-stack web developer who recently completed a full-stack web development certificate from the University of Denver. I have a background in Mining and Mineral Processing Engineering with a degree from Virginia Tech. I enjoy building web apps using React because of the planning, organization, and problem solving opportunities that arise. I am currently searching for a web development position in the Denver, CO area."

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