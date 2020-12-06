import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import mastersUni from "../../images/mastreUni.png";
import CardContent from "@material-ui/core/CardContent";
import bachelorsUni from "../../images/bachelorUni.png";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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

function Education() {
    const classes = useStyles();

    return (
        <Grid container style={{textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
            <Grid xs={12} style={{marginBottom: '1rem'}}>
                <Typography variant="h3">Education</Typography>
                <span>∞∞∞</span>
            </Grid>

            <Grid item sm={6} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root} style={{height: "13rem", width: "30rem", marginBottom: '1rem'}}>
                    <CardHeader
                        avatar={<Avatar aria-label="masters" className={classes.large} src={mastersUni}/>}
                        title="University of Saarland"
                        subheader="Master’s degree in CS"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The master's thesis project on the implementation and study of the interaction
                            between autonomous devices in Social Internet of Things environment. Graded 100/100
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={6} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root} style={{height: "13rem", width: "30rem", marginBottom: '1rem'}}>
                    <CardHeader
                        avatar={<Avatar aria-label="bachelors" className={classes.large} src={bachelorsUni}/>}
                        title="Azerbaijan State Oil Academy"
                        subheader="Bachelor’s degree in CS"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Graduated with Granted Honors Degree.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Education;
