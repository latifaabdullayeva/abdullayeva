import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import german from '../../images/german.png'
import russian from '../../images/russian.png'
import english from '../../images/english.png'
import turkish from '../../images/turkish.png'
import azerb from '../../images/azerbaijan.png'
import Avatar from "@material-ui/core/Avatar";
import js from '../../images/icons8-javascript-48.png'
import ts from '../../images/icons8-typescript-48.png'
import html from '../../images/icons8-html-5-48.png'
import css from '../../images/iconCss.png'
import angular from '../../images/icons8-angularjs-48.png'
import vue from '../../images/icons8-vue-js-48.png'
import react from '../../images/icons8-react-100.png'
import jest from '../../images/iconJest.png'
import cypress from '../../images/iconCypress.png'
import java from '../../images/icons8-java-48.png'
import spring from '../../images/iconSpring.png'
import hibernate from '../../images/iconHibernate.png'
import sql from '../../images/iconSql.png'
import rProg from '../../images/iconR.jpeg'

function Skills() {
    return (
        <Grid container style={{textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
            <Grid xs={12} style={{marginBottom: '1rem'}}>
                <Typography variant="h3">Skills</Typography>
                <span>∞∞∞</span>
            </Grid>
            <Grid item md={6} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card style={{height: "15rem", width: "20rem", marginBottom: '1rem', paddingTop: '1rem'}}>
                    <ListItemIcon>
                        <Avatar alt="Profile Picture" src={js}/>
                        <Avatar alt="Profile Picture" src={ts}/>
                    </ListItemIcon>
                    <ListItemText primary="JavaScript & Typescript"/>
                    <ListItemIcon>
                        <Avatar alt="Profile Picture" src={html}/>
                        <Avatar alt="Profile Picture" src={css}/>
                    </ListItemIcon>
                    <ListItemText primary="HTML & CSS"/>

                    <ListItemIcon>
                        <Avatar alt="Profile Picture" src={angular}/>
                        <Avatar alt="Profile Picture" src={react}/>
                        <Avatar alt="Profile Picture" src={vue}/>
                    </ListItemIcon>
                    <ListItemText primary="Angular, React and Vue.js"/>

                </Card>
            </Grid>
            <Grid item md={6} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card style={{height: "15rem", width: "20rem", marginBottom: '1rem', paddingTop: '1rem'}}>
                    <ListItemIcon>
                        <Avatar alt="Profile Picture" src={jest}/>
                        <Avatar alt="Profile Picture" src={cypress}/>
                    </ListItemIcon>
                    <ListItemText primary="Jest & Cypress Testing Frameworks"/>

                    <ListItemIcon>
                        <Avatar alt="Profile Picture" src={java}/>
                        <Avatar alt="Profile Picture" src={spring}/>
                        <Avatar alt="Profile Picture" src={hibernate}/>
                        <Avatar alt="Profile Picture" src={sql}/>
                    </ListItemIcon>
                    <ListItemText primary="Java, Spring, Hibernate & SQL"/>

                    <ListItemIcon>
                        <Avatar alt="Profile Picture" src={rProg}/>
                    </ListItemIcon>
                    <ListItemText primary="R Language"/>

                </Card>
            </Grid>
            <Grid item md={12} xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <Card style={{height: "18rem", width: "20rem"}}>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar alt="Profile Picture" src={english}/>
                        </ListItemIcon>
                        <ListItemText primary="English – fluent"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar alt="Profile Picture" src={russian}/>
                        </ListItemIcon>
                        <ListItemText primary="Russian – native"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar alt="Profile Picture" src={german}/>
                        </ListItemIcon>
                        <ListItemText primary="German – beginner"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar alt="Profile Picture" src={azerb}/>
                        </ListItemIcon>
                        <ListItemText primary="Azerbaijani – native"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar alt="Profile Picture" src={turkish}/>
                        </ListItemIcon>
                        <ListItemText primary="Turkish – fluent"/>
                    </ListItem>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Skills;
