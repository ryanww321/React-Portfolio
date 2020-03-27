import React from "react";

function Portfolio() {
    return (
        <div class="container">
            <h2>Portfolio</h2>
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div class="card card-outline mb-4 mt-4">
                        <img class="card-img-top" src="./Assets/password.png" alt="password generator" />
                        <div class="card-body"><a href="https://ryanww321.github.io/Password-Generator/"
                            target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary btn-lg btn-block">Password
                                Generator</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div class="card card-outline mb-4 mt-4">
                        <img class="card-img-top" src="./Assets/code-quiz.png" alt="code quiz" />
                        <div class="card-body"><a href="https://ryanww321.github.io/Code-Quiz-2.0/" target="_blank" rel="noopener noreferrer"><button
                            type="button" class="btn btn-primary btn-lg btn-block">Code
                                Quiz</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div class="card card-outline mb-4">
                        <img class="card-img-top" src="./Assets/scheduler.png" alt="day planner" />
                        <div class="card-body"><a href="https://ryanww321.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer"><button
                            type="button" class="btn btn-primary btn-lg btn-block">Work Day
                                Scheduler</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div class="card card-outline mb-4">
                        <img class="card-img-top" src="./Assets/weather-dashboard.png" alt="weather dashboard" />
                        <div class="card-body"><a href="https://ryanww321.github.io/Weather-Dashboard/"
                            target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary btn-lg btn-block">Weather
                                Dashboard</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" />
            <div class="col-lg-4 col-sm-6 col-xs-12">
                <div class="card card-outline mb-4">
                    <img class="card-img-top" src="./Assets/notetaker.png" alt="day planner" />
                    <div class="card-body"><a href="https://powerful-citadel-70509.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary btn-lg btn-block">Note Taker</button></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-xs-12">
                <div class="card card-outline mb-4">
                    <img class="card-img-top" src="./Assets/eatdaburger.png" alt="weather dashboard" />
                    <div class="card-body"><a href="https://quiet-everglades-33030.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary btn-lg btn-block">Eat-da-burger</button></a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div class="card card-outline mb-4">
                        <img class="card-img-top" src="./Assets/mywelljourney.png" alt="day planner" />
                        <div class="card-body"><a href="https://project-2-4.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary btn-lg btn-block">My Wellness Journey</button></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Portfolio;