import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import aboutIcon from "../../images/icons8-info-squared-64.png";
import projectIcon from "../../images/icons8-google-code-64.png";
import blogIcon from "../../images/icons8-google-blog-search-512.png";
import Menu from "@material-ui/core/Menu";
import {Link, NavLink} from "react-router-dom";
import homeIcon from "../../images/icons8-home-page-64.png"
import './Menu.css';

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
            <NavLink to="/abdullayeva" style={{textDecoration: 'none'}} exact={true}>
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Avatar alt="Profile Picture" src={homeIcon}/>
                    </IconButton>
                    <p>Home</p>
                </MenuItem>
            </NavLink>
            <NavLink to="/about" style={{textDecoration: 'none'}} exact={true}>
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Avatar alt="Profile Picture" src={aboutIcon}/>
                    </IconButton>
                    <p>About</p>
                </MenuItem>
            </NavLink>
            <NavLink to="/projects" style={{textDecoration: 'none'}} exact={true}>
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Avatar alt="Profile Picture" src={projectIcon}/>
                    </IconButton>
                    <p>Projects</p>
                </MenuItem>
            </NavLink>
            <NavLink to="/blog" style={{textDecoration: 'none'}} exact={true}>
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Avatar alt="Profile Picture" src={blogIcon}/>
                    </IconButton>
                    <p>Blog</p>
                </MenuItem>
            </NavLink>
        </Menu>
    )

}

export default MobileMenu;
