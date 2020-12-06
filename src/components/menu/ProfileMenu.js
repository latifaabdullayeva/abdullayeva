import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Menu from "@material-ui/core/Menu";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = React.useState(false);
    const [copySuccessMessage, setCopySuccessMessage] = useState('')
    const email = 'latifaabdullayeva@gmail.com'


    function copyEmail() {
        navigator.clipboard.writeText(email)
            .then(function () {
                /* clipboard successfully set */
                setCopySuccessMessage(`${email} copied to clipboard`);
            }, function () {
                /* clipboard write failed */
            });
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id='primary-search-account-menu'
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={copyEmail}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <MailIcon style={{color: '#2E3047'}}/>
                </IconButton>
                Email
            </MenuItem>
            <MenuItem>
                <a href="https://github.com/latifaabdullayeva"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{textDecoration: 'none', color: 'black'}}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <GitHubIcon style={{color: '#2E3047'}}/>
                    </IconButton>
                    Github
                </a>
            </MenuItem>
            <MenuItem>
                <a href="https://www.linkedin.com/in/latifa-abdullayeva"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{textDecoration: 'none', color: 'black'}}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <LinkedInIcon style={{color: '#2E3047'}}/>
                    </IconButton>
                    LinkedIn
                </a>
            </MenuItem>
        </Menu>
    )
    return (
        <div>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls='primary-search-account-menu'
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
                {/*<Avatar alt="Profile Picture" src={profilePhoto}/>*/}
                <Typography variant="button" noWrap>
                    Contacts
                </Typography>
            </IconButton>
            {renderMenu}
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {copySuccessMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ProfileMenu;
