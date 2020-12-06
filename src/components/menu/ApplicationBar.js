import logoTransparent from '../images/logo_transparent.png';
import './App.css';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Typography from "@material-ui/core/Typography";
import ProfileMenu from "./ProfileMenu";
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

function ApplicationBar() {
    const classes = useStyles();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <img src={logoTransparent} className="App-logo" alt="logo"/>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Abdullayeva
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <Typography className={classes.title} variant="button" noWrap>
                                About
                            </Typography>
                        </IconButton>
                        <IconButton color="inherit">
                            <Typography className={classes.title} variant="button" noWrap>
                                Projects
                            </Typography>
                        </IconButton>
                        <IconButton color="inherit">
                            <Typography className={classes.title} variant="button" noWrap>
                                Blog
                            </Typography>
                        </IconButton>
                    </div>
                    <ProfileMenu/>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls='primary-search-account-menu-mobile'
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <MobileMenu handleMobileMenuClose={handleMobileMenuClose} mobileMoreAnchorEl={mobileMoreAnchorEl}/>
        </div>
    );
}

export default ApplicationBar;
