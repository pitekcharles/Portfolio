import React from "react";
import JumbotronWrapper from "../Components/JumbotronWrapper";
import CardWrapper from "../Components/CardWrapper";
import CardTitle from "../Components/CardTitle";
import CardText from "../Components/CardText";
import CardLink from "../Components/CardLink";

function Home() {
    return (
        <>
            <JumbotronWrapper title="Charles Pitek Portfolio" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <CardWrapper>
                            <CardTitle title="About" />
                            <CardText 
                                text="Learn more about Charles Pitek"
                            />
                            <CardLink route="/about" name="About" />
                        </CardWrapper>
                    </div>
                    <div className="col-md-4">
                        <CardWrapper>
                            <CardTitle title="Contact" />
                            <CardText 
                                text="How to reach Charles Pitek"
                            />
                            <CardLink route="/contact" name="Contact" />
                        </CardWrapper>
                    </div>
                    <div className="col-md-4">
                        <CardWrapper>
                            <CardTitle title="Projects" />
                            <CardText 
                                text="Check out some of my Projects"
                            />
                            <CardLink route="/projects" name="Projects" />
                        </CardWrapper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;