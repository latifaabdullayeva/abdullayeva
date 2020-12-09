import React from 'react';
import {NavLink} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Motivation from "./autonomous/Motivation";
import SystemArchitecture from "./autonomous/SystemArchitechture";
import SystemSetup from "./autonomous/SystemSetup";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function AutonomousSystem() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container style={{padding: '2rem'}}>
            <Grid xs={12} style={{marginBottom: '1rem'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <NavLink to="/abdullayeva" style={{textDecoration: 'none'}}>
                        <Link color="textSecondary">Home</Link>
                    </NavLink>
                    <NavLink to="/projects" style={{textDecoration: 'none'}}>
                        <Link color="textSecondary">Projects</Link>
                    </NavLink>
                    <Link color="textPrimary" aria-current="page"
                    >AutonomousSystem</Link>
                </Breadcrumbs>
            </Grid>
            <Grid>
                <AppBar position="static" style={{background: 'transparent'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                          TabIndicatorProps={{style: {background: 'white'}}}>
                        <Tab label="Motivation" {...a11yProps(0)} />
                        <Tab label="System Architecture" {...a11yProps(1)} />
                        <Tab label="System Setup" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Motivation/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SystemArchitecture/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SystemSetup/>
                </TabPanel>
            </Grid>
        </Grid>
    );
}

export default AutonomousSystem;
