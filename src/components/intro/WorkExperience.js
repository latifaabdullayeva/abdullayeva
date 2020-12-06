import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ergosignIntern from "../../images/ergosignIntern.png"
import ministryIntern from "../../images/ministryIntern.png"
import sazzIntern from "../../images/sazzIntern.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    large: {
        border: '1px solid #949CB5',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function WorkExperience() {
    const classes = useStyles();

    return (
        <Grid container style={{textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography variant="h3">Work Experience</Typography>
                <span>∞∞∞</span>
            </Grid>
            <Grid item md={4} sm={6} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root} style={{height: "15rem", width: "30rem", marginBottom: '1rem'}}>
                    <CardHeader
                        avatar={<Avatar aria-label="masters" className={classes.large} src={ergosignIntern}/>}
                        title="Ergosign Ergonomie und Design GmbH"
                        subheader="UX Software Engineer Intern"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <li>Increased the test coverage from 0% to 80% by writing unit tests using the Jest
                                framework.
                            </li>
                            <li>Configured the infrastructure and implemented reference e2e tests using the Cypress
                                framework.
                            </li>
                            <li>Implemented a dynamic order form in Vue.js.</li>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} sm={6} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root} style={{height: "15rem", width: "30rem", marginBottom: '1rem'}}>
                    <CardHeader
                        avatar={<Avatar aria-label="bachelors" className={classes.large} src={ministryIntern}/>}
                        title="Ministry of Communication"
                        subheader="Undergraduate Intern"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Implemented SQL queries for exporting aggregated phone call data using Oracle Database 11g.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root} style={{height: "15rem", width: "30rem", marginBottom: '1rem'}}>
                    <CardHeader
                        avatar={<Avatar aria-label="masters" className={classes.large} src={sazzIntern}/>}
                        title="Sazz internet service provider"
                        subheader="Undergraduate Intern"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Analyzed geo and population data in low coverage signal regions of
                            Azerbaijan retrieved from the National Data Bank to find the optimal
                            locations for new cell towers using R language.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default WorkExperience;
