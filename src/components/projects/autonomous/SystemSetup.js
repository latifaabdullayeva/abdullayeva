import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

function SystemSetup() {
    return (
        <Grid container style={{paddingLeft: '7rem', paddingRight: '7rem'}}>
            <Grid item xs={12} style={{marginBottom: '1rem', textAlign: 'center'}}>
                <Typography variant="h3">Configuration</Typography>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography paragraph>
                    The AutonomousSystemThesis can be configured in the following way:
                    To run the server, we pass the following arguments in the terminal:
                </Typography>

                <div style={{
                    border: "gray solid", background: '#f8f8f8',
                    borderWidth: '.1em .1em .1em .8em', padding: '1em 3em', marginBottom: '1rem'
                }}>
                    <code>
                    <span style={{color: "#000000"}}>
                                mvn spring-boot:run -e -X -Dspring-boot.run.arguments</span>
                        <span style={{color: "#ce5c00", fontWeight: "bold"}}>=-</span>
                        <span style={{color: "#000000"}}>hueUsername</span>
                        <span style={{color: "#ce5c00", fontWeight: "bold"}}>=</span>
                        <span style={{color: "#204a87", fontWeight: "bold"}}>&lt;hue_username&gt;</span>
                        <span style={{color: "#000000"}}>,</span>
                        <span style={{color: "#ce5c00", fontWeight: "bold"}}>-</span>
                        <span style={{color: "#000000"}}>hueIPAddress=</span>
                        <span style={{color: "#204a87", fontWeight: "bold"}}>&lt;hue_ip_address&gt;</span>
                        <span style={{color: "#000000"}}>,</span>
                        <span style={{color: "#ce5c00", fontWeight: "bold"}}>-</span>
                        <span style={{color: "#000000"}}>musicFolderPath=</span>
                        <span style={{color: "#204a87", fontWeight: "bold"}}>&lt;music_folder_path&gt;</span>
                    </code>
                </div>


                <Typography paragraph>
                    The Spring Boot Maven Plugin is used to run spring boot applications and
                    generate build information.

                    Here, <span style={{color: "#204a87", fontWeight: "bold"}}>&lt;hue_ip_address&gt;</span> is an IP
                    address assigned to our Philips Hue bridge. Since you will
                    have your
                    smart lamps, you need to discover the IP address of your bridge. The quickest way to discover it
                    is to <b><a href="https://discovery.meethue.com/" style={{color: 'white'}}>visit this
                    website</a></b> which will display the internal IP
                    address of your bridge.

                    The username can be obtained by visiting the following website:
                </Typography>

                <div style={{
                    border: "gray solid", background: '#f8f8f8',
                    borderWidth: '.1em .1em .1em .8em', padding: '1em 3em', marginBottom: '1rem'
                }}>
                    <code>
                        <span style={{color: "#000000"}}>https://</span>
                        <span style={{color: "#204a87", fontWeight: "bold"}}>&lt;bridgeIPaddress&gt;</span>
                        <span style={{color: "#000000"}}>/debug/clip.html</span>
                    </code>
                </div>

                <Typography>
                    where <span style={{color: "#204a87", fontWeight: "bold"}}>&lt;bridge ip address&gt;</span> is the
                    internal IP address of your bridge. The step- by-step
                    instructions on how to get username and IP address of the Philips Hue bridge is described in
                    Appendix A.3. The more detailed guideline on how to discover the IP address and username of your
                    bridge you can find in the official <b><a
                    href="https://developers.meethue.com/develop/get-started-2/"
                    style={{color: 'white'}}>Philips Hue Documentation</a></b>. The <span
                    style={{color: "#204a87", fontWeight: "bold"}}>&lt;music_folder_path&gt;</span> is the path to all
                    songs played when mascot approaches the speakers. This path can be configurable and depends on where
                    the project is saved.
                </Typography>
            </Grid>

            <Grid item xs={12} style={{marginBottom: '1rem', textAlign: 'center'}}>
                <Typography variant="h3">System setup</Typography>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography variant="h5">Setting up the client applications</Typography>

                <Typography paragraph>
                    To set up the client application for the first time perform the following steps:
                </Typography>
                <ul>
                    <li>Turn on the Bluetooth and the location on your tablet.</li>
                    <li>Start the tablet application by running MyTabletApp.</li>
                    <li>Grant the required permission for the tablet application.</li>
                    <li>Register a tablet, a lamp, and the speakers in the system by following the
                        instructions on the screen.
                    </li>
                    <li>Turn on the Bluetooth and the location on your smartphone.</li>
                    <li>Start the mascot application by running MyMascotApp.</li>
                    <li>Grant the required permission for the mascot application.</li>
                    <li>Register your mascot in the system by following the instructions on the
                        screen.
                    </li>
                </ul>
                <Typography variant="h5">Setting up the database</Typography>
                <Typography paragraph>
                    To set up the server for the first time perform the following steps:
                    <ul>
                        <li>Download pgAdmin tool
                            <b><a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads"
                                  style={{color: 'white'}}> EDB installer</a></b> from this website. You can choose the
                            alternative methods on how to install the postgres.
                        </li>
                        <li>
                            When installing the database, specify the <i>superusername</i> and the <i>password</i>
                            <li>Default port is - <b>5432</b></li>
                            <li>Default hostname is <b>localhost</b></li>
                        </li>
                        <li>When connected to the postgresql server in pgAdmin, create a new database
                            with ***autonomousSystem*** name. The database name must match to the name
                            specified in <i>application.properties</i> file of a server. When you choose
                            a custom name for a database, specify it in a server configuration file.
                        </li>
                        <li>Specify the data base username and password in **application.properties.</li>
                    </ul>
                </Typography>
            </Grid>

        </Grid>
    );
}

export default SystemSetup;
