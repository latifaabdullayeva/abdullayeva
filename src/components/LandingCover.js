import React from 'react';
import {Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import profilePhoto from "../images/myPhotoBlackWhite.png"
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import './LandingCover.css';

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
    root: {
        display: 'flex',
        borderRadius: '0rem 0rem 3rem 3rem',

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 250,
    },
}));


function LandingCover() {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.sectionWeb} style={{height: "40rem"}}>
                <div id="box1" style={{borderRadius: '0 0 10rem 10rem'}}></div>
                <div id="box2">
                    <div id="text">
                        <Typography variant="h1" noWrap>Hello,</Typography>
                        <Typography variant="h1" noWrap>I'm Latifa</Typography>
                    </div>
                </div>
            </Container>
            <Box display="flex" justifyContent="center" className={classes.sectionMobile}
                 style={{background: "white", borderRadius: '0rem 0rem 3rem 3rem'}}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h1">
                            Hello,
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                            I'm Latifa
                        </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={profilePhoto}
                    title="Live from space album cover"
                />
            </Box>
        </div>
    );
}

export default LandingCover;
