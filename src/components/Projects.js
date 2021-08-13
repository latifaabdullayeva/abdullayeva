import React from 'react';
import {NavLink} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import autonom from "../images/projects/autonom.jpg"
import musicorum from "../images/projects/musicorum.jpeg"
import penny from "../images/projects/penny.jpg"
import abdullayeva from "../images/myPhotoBlackWhite.png"

const useStyles = makeStyles({
    root: {
        margin: '1rem',
    },
    media: {
        paddingTop: '100%',
    }
});

function Projects() {
    const classes = useStyles();

    return (
        <Grid container style={{textAlign: 'center', padding: '2rem'}}>
            <Grid xs={12} style={{marginBottom: '1rem'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <NavLink to="/abdullayeva" style={{textDecoration: 'none'}}>
                        <Link color="textSecondary">Home</Link>
                    </NavLink>
                    <Link color="textPrimary" aria-current="page"
                    >Projects</Link>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{justify: 'space-between', marginBottom: '1rem'}}>
                <NavLink to="/autonomousSystem" activeClassName="is-active"
                         style={{textDecoration: 'none', color: 'white'}}
                         exact={true}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            {/*<Link to="/tracks" style={{textDecoration: 'none', color: 'black'}}>*/}
                            <CardMedia className={classes.media}
                                       image={autonom}
                                       src={autonom}
                            />
                            <GridListTileBar title={"Autonomous System"}
                                             subtitle={<span>Master's thesis project</span>}/>
                            {/*</Link>*/}
                        </CardActionArea>
                    </Card>
                </NavLink>
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{justify: 'space-between', marginBottom: '1rem'}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        {/*<Link to="/tracks" style={{textDecoration: 'none', color: 'black'}}>*/}
                        <a href="https://latifaabdullayeva.github.io/musicorum/"
                        target="_blank"
                           rel="noopener noreferrer"
                           style={{textDecoration: 'none', color: 'black'}}>
                        <CardMedia className={classes.media}
                                   image={musicorum}
                                   src={musicorum}
                        />
                        <GridListTileBar title={"Musicorum"}
                                         subtitle={<span>Music web application </span>}/>
                        {/*</Link>*/}
                        </a>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{justify: 'space-between', marginBottom: '1rem'}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        {/*<Link to="/tracks" style={{textDecoration: 'none', color: 'black'}}>*/}
                        <a href="https://github.com/latifaabdullayeva/abdullayeva"
                        target="_blank"
                           rel="noopener noreferrer"
                           style={{textDecoration: 'none', color: 'black'}}>
                        <CardMedia className={classes.media}
                                   image={abdullayeva}
                                   src={abdullayeva}
                        />
                        <GridListTileBar title={"Abdullayeva"}
                                         subtitle={<span>Personal website </span>}/>
                        {/*</Link>*/}
                        </a>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{justify: 'space-between', marginBottom: '1rem'}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        {/*<Link to="/tracks" style={{textDecoration: 'none', color: 'black'}}>*/}
                        <CardMedia className={classes.media}
                                   image={penny}
                                   src={penny}
                        />
                        <GridListTileBar title={"Penny"}
                                         subtitle={<span>Currency converter application </span>}/>
                        {/*</Link>*/}
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Projects;
{/*<AutonomousSystem/>*/
}
{/*<Abdullayeva/>*/
}
{/*<Musicorum/>*/
}
{/*<Penny/>*/
}
