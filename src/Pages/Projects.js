import React from "react";
import CardTitle from "../Components/CardTitle";
import CardText from "../Components/CardText";
import CardWrapper from "../Components/CardWrapper";

function Projects() {
    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <CardWrapper>
                            <CardTitle title="Adventure Weather" />
                            <CardText
                                text="A weather app that pulls snowfall data for the past 3 days to help decide to ski or not to ski"
                            />
                            <br />
                            <a href="https://iampopov.github.io/adventureWeather/" className="card-link">Adventure Weather</a>
                        </CardWrapper>
                    </div>
                    <div className="col-md-4">
                        <CardWrapper>
                            <CardTitle title="IMS" />
                            <CardText
                                text="A simple inventory app that can be used to create new items, adjust quantities, with an added customer info page."
                            />
                            <br />
                            <a href="https://whispering-badlands-47825.herokuapp.com/" className="card-link">IMS</a>
                        </CardWrapper>
                    </div>
                    <div className="col-md-4">
                        <CardWrapper>
                            <CardTitle title="Guild Assistant" />
                            <CardText
                                text="An app that helps to manage key guild metrics such as attendence, Currently under construction link to be included later."
                            />
                            <a href=" https://fierce-wildwood-24206.herokuapp.com/guildleaderhome" className="card-link">Guild Assistant</a>
                        </CardWrapper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;