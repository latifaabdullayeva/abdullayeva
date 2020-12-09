import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import pers from "../../../images/projects/autonomous/MascotRegistrationUI.png"

function SystemArchitecture() {
    return (
        <Grid container style={{paddingLeft: '7rem', paddingRight: '7rem'}}>
            <Grid item xs={12} style={{marginBottom: '1rem', textAlign: 'center'}}>
                <Typography variant="h3">System Architecture</Typography>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography paragraph>
                    For multi-device support used centralized architecture, where all devices inform the server about
                    their state in real-time. Subsequently, the server changes the states of all other devices
                    accordingly. Moreover, the centralized system has a simpler design that excludes any consensus
                    problem. All devices communicate with each other through the server that makes decisions.
                </Typography>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '1rem', textAlign: 'center'}}>
                <Typography variant="h3">Database and server</Typography>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography paragraph>
                    Network requests are handled by controllers using the Spring framework on the server-side. It also
                    allows easy data access to simply connecting and working with the database.
                    For database management, I use an open-source relational database system known as PostgreSQL.
                    Database schema and models are defined using Hibernate - an ORM (object relation mapping) framework.
                    Hibernate is also responsible for managing database tables in PostgreSQL. For the detailed
                    instructions on how to set up the database and run the server see the following page:
                </Typography>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem'}}>
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
                <Typography variant="h3">Registering devices in the system</Typography>
            </Grid>
            <Grid container xs={12} style={{marginBottom: '1rem'}}>
                <Grid item xs={12} sm={8} style={{justify: 'space-between', marginBottom: '1rem'}}>
                    <Typography paragraph>
                        Every user can register its mascot in the system by running MyMascotApp and following the
                        instructions on the screen. The detailed description of how to configure the smartphone for the
                        mascot application is given here:
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
                        The registration of such devices as the tablet, the lamp, and the speakers must be performed by
                        the developers using MyTabletApp. So, the tablet application is the device that registers all
                        other devices with a fixed location. Also, the tablet application registers in the system all
                        five personality traits with their associated actions such as color, music type, and the
                        vibration level. The registration of all devices and the personality traits can be performed by
                        following the instructions on the screen. This page shows the information of the data that will
                        be sent to the server about the personality traits and associated actions.

                        You can also find the step-by-step instructions on how to run both the mascot and the tablet
                        applications in system setup page:
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
                <Grid item xs={12} sm={3}
                      style={{justify: 'space-between', marginBottom: '1rem', marginLeft: '2rem'}}>
                    <img style={{height: '350px', width: '200px', border: 'solid white', borderRadius: '20px'}}
                         src={pers}/>
                    <figcaption>The visual representation of the device registration.</figcaption>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SystemArchitecture;
