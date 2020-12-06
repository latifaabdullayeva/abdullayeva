import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import aboutIcon from "../images/icons8-info-squared-64.png";
import projectIcon from "../images/icons8-google-code-64.png";
import blogIcon from "../images/icons8-google-blog-search-512.png";
import Menu from "@material-ui/core/Menu";

function MobileMenu(props) {
    const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);

    return (
        <Menu
            anchorEl={props.mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id='primary-search-account-menu-mobile'
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={props.handleMobileMenuClose}
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
        </Menu>
    )

}

export default MobileMenu;
