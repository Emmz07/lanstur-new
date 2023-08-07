// Menu.js
"use client"
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));

const data = [
{ name: 'Home', Link: '/' },
{ name: 'Home', Link: '/' },
{ name: 'Home', Link: '/' },
{ name: 'Home', Link: '/' },
];

const index = () => {
    const classes = useStyles();
    return <div className={classes.main}></div>;
};


export default Menu;
