import React from 'react';
import {NavLink} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import filterbubble from "../images/blogs/filterbubble.png"
import hri from "../images/blogs/hri.jpg"
import proxemics from "../images/blogs/proxemics.png"
import uCtoIoT from "../images/blogs/uCtoIoT.jpeg"
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
});

function Blog() {
    const classes = useStyles();

    return (
        <Grid container style={{textAlign: 'center', padding: '2rem'}}>
            <Grid xs={12} style={{marginBottom: '1rem'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <NavLink to="/abdullayeva" style={{textDecoration: 'none'}}>
                        <Link color="textSecondary">Home</Link>
                    </NavLink>
                    <Link color="textPrimary" aria-current="page"
                    >Blog</Link>
                </Breadcrumbs>
            </Grid>
            <Grid item sm={6} md={4} xs={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <Card className={classes.root}>
                    <CardActionArea style={{height: '20rem'}}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={uCtoIoT}
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{height: '3rem'}}>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                What changed from Ubiquitous Computing to the Social Internet of Things (SIoT)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Chip label="IoT" style={{background:'#3f51b5', color: 'white'}}/>
                    <Chip label="SIoT" style={{background:'#673ab7', color: 'white'}}/>
                    <CardActions style={{height: '3rem'}}>
                        <a href="https://latifaabdullayeva.medium.com/what-changed-from-ubiquitous-computing-to-the-social-internet-of-things-siot-31df7269b4b8"
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{textDecoration: 'none', color: 'black'}}>
                            <Button size="small" color="primary">Learn More</Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item sm={6} md={4} xs={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <Card className={classes.root}>
                    <CardActionArea style={{height: '20rem'}}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={proxemics}
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{height: '3rem'}}>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                The application of Proxemics in Internet of Things
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Chip label="IoT" style={{background:'#3f51b5', color: 'white'}}/>
                    <Chip label="Proxemics" style={{background:'#00bcd4', color: 'white'}}/>
                    <CardActions style={{height: '3rem'}}>
                        <a href="https://latifaabdullayeva.medium.com/the-application-of-proxemics-on-the-internet-of-things-9217155085a5"
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{textDecoration: 'none', color: 'black'}}>
                            <Button size="small" color="primary">Learn More</Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item sm={6} md={4} xs={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <Card className={classes.root}>
                    <CardActionArea style={{height: '20rem'}}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={hri}
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{height: '3rem'}}>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                The role of Emotions in Human-Robot Interaction (HRI)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Chip label="IoT" style={{background:'#3f51b5', color: 'white'}}/>
                    <Chip label="Robotics" style={{background:'#e91e63', color: 'white'}}/>
                    <Chip label="HRI" style={{background:'#03a9f4', color: 'white'}}/>
                    <CardActions style={{height: '3rem'}}>
                        <a href="https://latifaabdullayeva.medium.com/the-role-of-emotions-in-human-robot-interaction-hri-d9c787c8b6b3"
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{textDecoration: 'none', color: 'black'}}>
                            <Button size="small" color="primary">Learn More</Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item sm={6} md={4} xs={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <Card className={classes.root}>
                    <CardActionArea style={{height: '20rem'}}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={filterbubble}
                            title="Contemplative Reptile"
                        />
                        <CardContent style={{height: '3rem'}}>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Пузыри фильтров и почему вам о них стоит знать
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Chip label="social-media" style={{background:'#ff9800', color: 'white'}}/>
                    <Chip label="recomendation-systems" style={{background:'#2196f3', color: 'white'}}/>
                    <CardActions style={{height: '3rem'}}>
                        <a href="https://latifaabdullayeva.medium.com/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D0%B8-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%BE%D0%B2-%D0%B8-%D1%81-%D1%87%D0%B5%D0%BC-%D0%B5%D0%B3%D0%BE-%D0%B5%D0%B4%D1%8F%D1%82-593bda44cd6c"
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{textDecoration: 'none', color: 'black'}}>
                            <Button size="small" color="primary">Learn More</Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Blog;

// <DeployGitHubIO/>
// <EmotionsinHRI/>
// <Proxemics/>
// <UCtoIoT/>
