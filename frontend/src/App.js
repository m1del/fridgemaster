import React, { Component } from 'react';
import { makeStyles, Typography, AppBar, Card, CardActions, 
         CardContent, CardMedia, CssBaseline, 
         Grid, Toolbar, Container } 
         from '@material-ui/core';
import logo from './images/fridge-logo.png';
import fridge from './images/fridge-image.png';
import { render } from 'react-dom';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';


console.log(logo);
console.log(fridge);

function DisplayLogo() {
    return <img src={logo}
            style = {{ position: 'relative',
                        top: '30px',
                        left: '30px'}}/>;
}

function DisplayFridge() {
    return <img src = {fridge}
            style = {{ display: 'flex',
                    justifyContent: 'center'}}/>;
}

const App = () => {
    const myStyle = {
        backgroundColor: '#616265',
        height: '100.5vh',
        marginTop: '-10px',
        marginBottom: '-10px',
        marginLeft: '-10px',
        marginRight: '-10px',
        backgroundSize: 'cover',
    };
    return (
        <div className = 'App'
            style = {myStyle}>
            <DisplayFridge/>
            <DisplayLogo/>
            
        </div>
    );
}
export default App;