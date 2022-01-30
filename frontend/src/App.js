import './App.css';
import Form from './components/Form';
import React from 'react';
import logo from './images/fridge-logo.png';
import fridge from './images/fridge-image.png';
import { makeStyles, Typography, AppBar, Card, CardActions, 
    CardContent, CardMedia, CssBaseline, 
    Grid, Toolbar, Container } 
    from '@material-ui/core';


console.log(logo);
console.log(fridge);

function DisplayLogo() {
    return <img src={logo}
            style = {{ 
                position: 'relative',
                top: '5px',
                left: '30px'}}/>;
}

function DisplayFridge() {
    return <img src = {fridge}/>;
}

function App() {

    const myStyle = {
        backgroundColor: '#616265',
        position: 'relative',
        height: '100.5vh',
        marginTop: '-10px',
        marginBottom: '-10px',
        marginLeft: '-10px',
        marginRight: '-10px',
        backgroundSize: 'cover',
    };

  return (
    <div className="App"
        style = {myStyle}>
            <AppBar position = "relative"
                    style = {{height: "10%",
                            backgroundColor: "#616265"}}>
                <Toolbar>
                    <DisplayLogo/>
                </Toolbar>
            </AppBar>
        <div style = {{justifyContent: 'center'}}>
            <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                    <DisplayFridge/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Form />
                </Grid>
            </Grid>
        </div>
    </div>
  );
};

export default App;
