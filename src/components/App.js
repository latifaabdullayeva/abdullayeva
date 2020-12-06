import logoTransparent from './images/logo_transparent.png';
import profilePhoto from './images/profilePhoto.jpeg';
import blogIcon from './images/icons8-google-blog-search-512.png';
import projectIcon from './images/icons8-google-code-64.png';
import aboutIcon from './images/icons8-info-squared-64.png';
import './App.css';
import React, {useState} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import Typography from "@material-ui/core/Typography";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Avatar from "@material-ui/core/Avatar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

function App() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [open, setOpen] = React.useState(false);
    const [copySuccessMessage, setCopySuccessMessage] = useState('')
    const email = 'latifaabdullayeva@gmail.com'


    function copyEmail() {
        navigator.clipboard.writeText(email);
        setCopySuccessMessage(`${email} copied to clipboard`);
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={copyEmail}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <MailIcon/>
                </IconButton>
                Email
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <GitHubIcon/>
                </IconButton>
                <a href="https://github.com/latifaabdullayeva"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{textDecoration: 'none', color: 'black'}}>Github</a>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <LinkedInIcon/>
                </IconButton>
                <a href="https://www.linkedin.com/in/latifa-abdullayeva"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{textDecoration: 'none', color: 'black'}}>LinkedIn</a>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Avatar alt="Profile Picture" src={aboutIcon}/>
                </IconButton>
                <p>About</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Avatar alt="Profile Picture" src={projectIcon}/>
                </IconButton>
                <p>Projects</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Avatar alt="Profile Picture" src={blogIcon}/>
                </IconButton>
                <p>Blog</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Avatar alt="Profile Picture" src={profilePhoto}>
                    </Avatar>
                </IconButton>
                <p>Contacts</p>
            </MenuItem>
        </Menu>
    );

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
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Avatar alt="Profile Picture" src={profilePhoto}/>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {copySuccessMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default App;


// <img src={logoTransparent} className="App-logo" alt="logo" />
