import React from 'react';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from '@material-ui/core/Link';
import {NavLink} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import girl from '../images/about/girl.png'
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuItem from "@material-ui/core/MenuItem";

function About() {
    return (
        <Grid container style={{textAlign: 'center', padding: '2rem'}}>
            <Grid xs={12} style={{marginBottom: '1rem'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <NavLink to="/abdullayeva" style={{textDecoration: 'none'}}>
                        <Link color="textSecondary">Home</Link>
                    </NavLink>
                    <Link color="textPrimary" aria-current="page"
                    >About</Link>
                </Breadcrumbs>
            </Grid>
            <Grid container>
                <Grid item xs={12} style={{marginBottom: '1rem'}}>
                    <Typography variant="h3">Welcome</Typography>
                </Grid>
                <Grid item lg={3} md={2} style={{marginBottom: '1rem'}}></Grid>
                <Grid item lg={6} md={8} style={{marginBottom: '1rem'}}>
                    <Typography paragraph>
                        Hi, my name is Latifa Abdullayeva. I have recently graduated with a master's degree in computer
                        science from the University of Saarland.
                    </Typography>
                </Grid>
                <Grid item lg={3} md={2} style={{marginBottom: '1rem'}}></Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} style={{marginBottom: '1rem'}}>
                    <Typography variant="h3">Background</Typography>
                </Grid>
                <Grid item lg={3} md={2} style={{marginBottom: '1rem'}}></Grid>
                <Grid item lg={6} md={8} style={{marginBottom: '1rem'}}>
                    <Typography paragraph>
                        Most of the experience that I got comes from the university course in web development, my thesis
                        project, and my internship at Ergosign GmbH.
                        <ul>
                            <li>
                                Student Project in Web development course. The course project in web development was
                                based on the Angular framework where I've designed a web app for communication between
                                students and professors. Along with the frontend, I've also built a simple REST service
                                in node and express.js that was consumed by the web page to present data to the user.
                            </li>
                            <li>
                                During the internship I was responsible for automated testing by writing unit,
                                integration, and end-to-end tests using Jest and Cypress Javascript frameworks.
                            </li>
                            <li>
                                In my thesis project I implemented a prototype of the IoT system which includes two
                                Android apps and a REST API implemented in Java and the Spring framework. The android
                                clients can autonomously discover the service on the local network and communicate with
                                it. The service discovery is implemented using mDNS, while proximity measurements are
                                taken using Bluetooth and AltBeacon library on Android. Here is the repository:
                            </li>
                        </ul>
                        <a href="https://github.com/latifaabdullayeva/autonomous-system-thesis"
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{textDecoration: 'none', color: 'white'}}>
                            <MenuItem style={{
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: '#2E3047',
                                borderRadius: '10rem'
                            }}>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <GitHubIcon style={{color: 'white'}}/>
                                </IconButton>
                                Github
                            </MenuItem>
                        </a>
                    </Typography>
                </Grid>
                <Grid item lg={3} md={2} style={{marginBottom: '1rem'}}></Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} style={{marginBottom: '1rem'}}>
                    <Typography variant="h3">Interests</Typography>
                </Grid>
                <Grid item lg={3} md={2} style={{marginBottom: '1rem'}}></Grid>
                <Grid container lg={6} md={8} xs={12} style={{marginBottom: '1rem'}}>
                    <Grid item xs={12} sm={8} style={{justify: 'space-between', marginBottom: '1rem'}}>
                        <Typography paragraph>
                            In my spare time I like to write stories, articles and recently the reviews of papers that
                            draw
                            my interest. I am eager to learn more and more about the Internet of Things, observe how
                            people
                            communicate with 'things', and what we can do to increase user-awareness about what is
                            happening
                            behind the scene.
                            Currently, I am learning front-end technologies and have a few project that I can share with
                            you.
                            I like to focus on both quality of websites/applications such as testing the codebase and
                            beautiful user interfaces.
                            I am passionate about user experience, user interfaces, and the concepts of human-computer
                            interaction.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}
                          style={{justify: 'space-between', marginBottom: '1rem', marginLeft: '1rem'}}>
                        <img style={{height: '230px', width: '200px', border: 'solid white', borderRadius: '20px'}}
                             src={girl}/>
                    </Grid>

                </Grid>
                <Grid item lg={3} md={2} style={{marginBottom: '1rem'}}></Grid>
            </Grid>
        </Grid>
    );
}

export default About;
