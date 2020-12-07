import React from 'react';
import {NavLink} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function Penny() {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <NavLink to="/abdullayeva" style={{textDecoration: 'none'}}>
                    <Link color="textSecondary">Home</Link>
                </NavLink>
                <NavLink to="/projects" style={{textDecoration: 'none'}}>
                    <Link color="textSecondary">Projects</Link>
                </NavLink>
                <Link color="textPrimary" aria-current="page"
                >Penny</Link>
            </Breadcrumbs>
            <p>PROJECTS Penny</p>
        </div>
    );
}

export default Penny;
