import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import daad from "../../images/daadscholar.png"
import imprs from "../../images/maxPlankScholar.png"
import junior from "../../images/juniorAchScholar.gif"

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

function Accomplishments() {
    const classes = useStyles();

    return (
        <Grid container style={{textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
            <Grid item xs={12} style={{marginBottom: '1rem'}}>
                <Typography variant="h3">Accomplishments</Typography>
                <span>∞∞∞</span>
            </Grid>
            <Grid item md={4} sm={6} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root} style={{height: "14rem", width: "30rem", marginBottom: '1rem'}}>
                    <CardHeader
                        avatar={<Avatar aria-label="masters" className={classes.large} src={imprs} />}
                        title="IMPRS-CS Scholarship"
                        subheader="Oct 2016 - Mar 2018"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Granted Scholarship from International Max Planck Research School for Master’s Program in
                            Computer Science
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} sm={6} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root} style={{height: "14rem", width: "30rem", marginBottom: '1rem'}}>
                    <CardHeader
                        avatar={<Avatar aria-label="bachelors" className={classes.large}><img style={{maxWidth: '100%'}} src={daad}/></Avatar>}
                        title="STIBET III DAAD Scholarship"
                        subheader="May 2020 - Aug 2020"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Granted Saarland scholarship for international students for Master’s Program
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root} style={{height: "14rem", width: "30rem", marginBottom: '1rem'}}>
                    <CardHeader
                        avatar={<Avatar aria-label="masters" className={classes.large} src={junior}/>}
                        title="Junior achievement Scholarship"
                        subheader="Sep 2013 - Oct 2014"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Granted Scholarship for Youth Business Leadership Project and provided
                            professional development trainings. USAID was partnering with
                            British Petroleum (BP) and American Chamber of Commerce
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Accomplishments;
