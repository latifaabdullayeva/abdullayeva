import './App.css';
import React from 'react';
import ApplicationBar from "./menu/ApplicationBar";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Home from "./intro/Home";
import Penny from "./projects/Penny";
import Musicorum from "./projects/Musicorum";
import AutonomousSystem from "./projects/AutonomousSystem";
import Abdullayeva from "./projects/Abdullayeva";

function App() {
    return (
        <Router>
            <ApplicationBar/>
            <Switch>
                <Route path='/abdullayeva' exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='/projects' exact component={Projects}/>
                <Route path='/autonomousSystem' exact component={AutonomousSystem}/>
                <Route path='/projectAbdullayeva' exact component={Abdullayeva}/>
                <Route path='/musicorum' exact component={Musicorum}/>
                <Route path='/penny' exact component={Penny}/>
                <Route path='/blog' exact component={Blog}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;

// #2c66ff
// #a630ff
// #46cbfc
// #0adbfb
// #7a077e
