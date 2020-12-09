import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import interaction from "../../../images/projects/autonomous/interaction.png"
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import mascotReg from "../../../images/projects/autonomous/MascotRegistrationUI.png"
import architecht from "../../../images/projects/autonomous/architecht.png"

function Motivation() {
    return (
        <Grid container style={{paddingLeft: '7rem', paddingRight: '7rem'}}>
            <Grid item xs={12} style={{marginBottom: '1rem', textAlign: 'center'}}>
                <Typography variant="h3">Motivation</Typography>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography paragraph>
                    This is a centralized system that maintains the interaction between Smartphones (aka
                    Mascots),
                    Lamps, Tablets, and Speakers. Here, a users' smartphones become their personal Mascots being
                    able to autonomously connect to four other devices, i.e., other Mascots, lamps, tablets, and
                    speakers. The proximity is used to initiate communication between these devices. However,
                    while
                    the device interaction enhances network navigability, the decisions made by smart devices
                    are
                    not always in line with a user’s expectation. The goal of a user study was to find an
                    approach
                    that will take user’s context into account.
                </Typography>
                <figure style={{marginTop: '2rem', marginBottom: '2rem', textAlign: 'center'}}>
                    <p><img src={interaction}
                            width="500" height="200"
                            alt="Eiffel tower"
                            style={{border: 'solid white', borderRadius: '20px'}}/>
                        <figcaption>The visual representation of the interactions between devices.</figcaption>
                    </p>
                </figure>
                <Typography paragraph>
                    In this project I implemented a prototype of the IoT system which includes two Android apps
                    and
                    a REST API implemented in Java and the Spring framework:
                </Typography>
            </Grid>

            <Grid container xs={12} style={{marginBottom: '1rem'}}>
                <Grid item xs={12} sm={5} style={{marginBottom: '1rem'}}>
                    <li>the client side uses Android with AltBeacon library.</li>
                </Grid>
                <Grid item xs={12} sm={2} style={{marginBottom: '1rem'}}/>
                <Grid item xs={12} sm={5}
                      style={{marginBottom: '1rem'}}>
                    <li>the client side uses Android with AltBeacon library.</li>
                </Grid>

            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography>The android clients can autonomously discover the service on the local network and
                    communicate with it. The service discovery is implemented using mDNS, while proximity
                    measurements are taken using Bluetooth and AltBeacon library on Android.</Typography>
            </Grid>

            <Grid container xs={12} style={{marginBottom: '1rem'}}>
                <Grid item xs={12} sm={7} style={{marginBottom: '1rem'}}>
                    <Typography>For more information about system architecture, technical requirements and
                        hardware,
                        follow the link:</Typography>
                </Grid>
                <Grid item xs={12} sm={1} style={{marginBottom: '1rem'}}/>
                <Grid item xs={12} sm={4}
                      style={{marginBottom: '1rem'}}>
                    <MenuItem style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#2E3047',
                        borderRadius: '10rem'
                    }}>
                        System Architecture
                    </MenuItem>
                </Grid>

            </Grid>

            <Grid container xs={12} style={{marginBottom: '1rem'}}>
                <Grid item xs={12} sm={7} style={{marginBottom: '1rem'}}>
                    <Typography>You can also read the documentation about system setup in the next
                        page:</Typography>
                </Grid>
                <Grid item xs={12} sm={1} style={{marginBottom: '1rem'}}/>
                <Grid item xs={12} sm={4}
                      style={{marginBottom: '1rem'}}>
                    <MenuItem style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#2E3047',
                        borderRadius: '10rem'
                    }}>
                        System Setup
                    </MenuItem>
                </Grid>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography>Here is the repository of the project:</Typography>
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
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem', textAlign: 'center'}}>
                <Typography variant="h3">Goal of Study</Typography>
            </Grid>
            <Grid xs={12} style={{marginBottom: '1rem'}}>
                <Typography paragraph>
                    Considering the role of the human in the IoT environment, in this system, the personality
                    with
                    preset actions serves as an interface for the interaction between a user and devices.
                </Typography>
                <Typography>
                    Therefore, as an input, we use:
                    <ul>
                        <li>the configuration of mascot’s personality</li>
                        <li>proximity information of the user’s movements</li>
                    </ul>
                    As an output, we use actions that all devices display based on the personality information
                    that
                    the user configured:
                    <ul>
                        <Grid container>
                            <Grid item lg={3} md={3} xs={12} style={{marginBottom: '1rem'}}>
                                <li>change of light</li>
                            </Grid>
                            <Grid item lg={3} md={3} xs={12} style={{marginBottom: '1rem'}}>
                                <li>vibration</li>
                            </Grid>
                            <Grid item lg={3} md={3} xs={12} style={{marginBottom: '1rem'}}>
                                <li>music play</li>
                            </Grid>
                            <Grid item lg={3} md={3} xs={12} style={{marginBottom: '1rem'}}>
                                <li>screen color alteration</li>
                            </Grid>
                        </Grid>
                    </ul>
                </Typography>
                <Typography>
                    The resulting behavior of devices are influenced by the predefined "personality" of the
                    user’s
                    Mascot.
                </Typography>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem', textAlign: 'center'}}>
                <Typography variant="h3">User Documentation</Typography>
            </Grid>
            <Grid container xs={12} style={{marginBottom: '1rem'}}>
                <Grid item xs={12} sm={8} style={{justify: 'space-between', marginBottom: '1rem'}}>
                    <Typography paragraph>
                        When a user runs the android application for the first time, it displays the form that a
                        user has to fill in order to configure his phone. For that, the user needs to follow the
                        steps:
                        <ul>
                            <li>Choose the beacon ID that will help this application to measure the distance
                                between
                                devices.
                            </li>
                            <li>Give his mascot a custom name.</li>
                            <li>Choose one out of five personalities displayed on the screen.</li>
                        </ul>
                        The screenshot shows the user interface of the mascot application during the device
                        registration.

                        After pressing the next button, such information as beacon ID, the type, name, and the
                        personality of the device are sent to the server and saved in the database.
                        Starting from here, no further user interaction with the mobile phone is needed, the
                        user
                        can walk around and approach other devices such as other smartphones, lamps, speakers,
                        and
                        tablets. The application starts to measure the distance to all other beacons according
                        to
                        the users’ movements and sends this information to a server.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}
                      style={{justify: 'space-between', marginBottom: '1rem', marginLeft: '2rem'}}>
                    <img style={{height: '350px', width: '200px', border: 'solid white', borderRadius: '20px'}}
                         src={mascotReg}/>
                    <figcaption>The visual representation of the interactions between devices.</figcaption>
                </Grid>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem', textAlign: 'center'}}>
                <Typography variant="h3">Project Presentation</Typography>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography paragraph>The project consists of the client-side with two Android applications for
                    mascot i.e. smartphone and tablet. The server is responsible for coordinating client
                    applications.</Typography>
                <Typography paragraph>The AutonomousSystemThesis consists of three directories:
                    <ul>
                        <li><i>MyMascotApp:</i> The android application registers the phone in the system and
                            measures the distance from the phone and to all beacon tags located in the room.
                        </li>
                        <li><i>MyTabletApp:</i> The android application that is registering the tablet in the
                            system
                            and displaying colors according to the personality of approaching mascot
                        </li>
                        <li><i>server:</i> allows the management of all devices and beacons, and the
                            coordination of
                            all client applications.
                        </li>
                    </ul>
                </Typography>
                <Typography>The project structure is demonstrated below:</Typography>
                <figure style={{textAlign: 'center'}}>
                    <p><img src={architecht}
                            width="400" height="150"
                            alt="Eiffel tower"
                            style={{
                                height: '150px',
                                width: '400px',
                                border: 'solid white',
                                borderRadius: '20px'
                            }}/>
                        <figcaption>The visual representation of the interactions between devices.</figcaption>
                    </p>
                </figure>
            </Grid>
        </Grid>
    );
}

export default Motivation;
