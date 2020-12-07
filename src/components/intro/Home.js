import React from 'react';
import LandingCover from "./LandingCover";
import {Divider} from "@material-ui/core";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Accomplishments from "./Accomplishments";
import Skills from "./Skills";
import {BrowserRouter as Router} from 'react-router-dom';

function Home() {
    return (
        <Router>
            <div>
                <LandingCover/>
                <Divider/>
                <Education/>
                <Divider/>
                <WorkExperience/>
                <Divider/>
                <Accomplishments/>
                <Divider/>
                <Skills/>
            </div>
        </Router>
    );
}

export default Home;
