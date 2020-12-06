import './Footer.css';
import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
    return (
        <footer className="page-footer" style={{color: '#ffffff', bottom: 0, position: "relative"}}>
            <small>© Copyright 2020. All rights reserved.</small>
            <div>
                <MenuItem>
                    <a href="https://github.com/latifaabdullayeva"
                       target="_blank"
                       rel="noopener noreferrer"
                       style={{textDecoration: 'none', color: '#ffffff'}}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <GitHubIcon/>
                        </IconButton>
                        Github
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="https://www.linkedin.com/in/latifa-abdullayeva"
                       target="_blank"
                       rel="noopener noreferrer"
                       style={{textDecoration: 'none', color: '#ffffff'}}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <LinkedInIcon/>
                        </IconButton>
                        LinkedIn
                    </a>
                </MenuItem>
            </div>
        </footer>
    );
}

export default Footer;
