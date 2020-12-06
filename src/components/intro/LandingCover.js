import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import './LandingCover.css';
import myPhoto from "../../images/myPhotoBlackWhite.png";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
    sectionWeb: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap'
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center"
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 400,
    },
}));


function LandingCover() {
    const classes = useStyles();

    return (
        <Grid container className="page-main">
            <Grid xs={12} className={classes.sectionWeb} style={{justifyContent: "center"}}>
                <Grid class="boxText" item sm={10} md={5}
                      style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <Typography variant="h3">Hello! I'm Latifa</Typography>
                    <Typography variant="caption"> I have recently graduated with a master's degree in computer science
                        from the University of
                        Saarland.</Typography>
                </Grid>
                <Grid class="boxImage" item sm={10} md={5} style={{ }}>
                    <img src={myPhoto} alt={"sonfbs"} style={{height: '20rem', opacity:'0.7'}}/>
                </Grid>
            </Grid>
            <Grid xs={12} className={classes.sectionMobile}
                  style={{background: "transparent", justifyContent: "center"}}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h3">Hello,</Typography>
                        <Typography variant="h3">I'm Latifa</Typography>
                        <Typography variant="caption"> I have recently graduated with a master's degree in computer
                            science from the University of
                            Saarland.</Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={myPhoto}
                    title="Live from space album cover"
                />
            </Grid>
        </Grid>
    );
}

export default LandingCover;
