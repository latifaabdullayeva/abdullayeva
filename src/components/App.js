import './App.css';
import React from 'react';
import ApplicationBar from "./menu/ApplicationBar";
import LandingCover from "./intro/LandingCover";
import Footer from "./Footer";
import {Divider} from "@material-ui/core";
import Education from "./intro/Education";
import WorkExperience from "./intro/WorkExperience";
import Accomplishments from "./intro/Accomplishments";
import Skills from "./intro/Skills";


function App() {
    return (
        <div>
            <ApplicationBar/>
            <LandingCover/>
            <Divider/>
            <Education/>
            <Divider/>
            <WorkExperience/>
            <Divider/>
            <Accomplishments/>
            <Divider/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default App;


// #2c66ff
// #a630ff
// #46cbfc
// #0adbfb
// #7a077e
