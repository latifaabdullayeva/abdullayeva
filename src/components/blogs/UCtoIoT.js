import React from 'react';
import {NavLink} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function UCtoIoT() {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <NavLink to="/abdullayeva" style={{textDecoration: 'none'}}>
                    <Link color="textSecondary">Home</Link>
                </NavLink>
                <NavLink to="/blog" style={{textDecoration: 'none'}}>
                    <Link color="textSecondary">Blog</Link>
                </NavLink>
                <Link color="textPrimary" aria-current="page"
                >UCtoIoT</Link>
            </Breadcrumbs>
            <p>BLOG UCtoIoT</p>
        </div>
    );
}

export default UCtoIoT;
