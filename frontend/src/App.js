import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import logo from './images/fridge-logo.png';
import fridge from './images/fridge-image.png';
import Form from './/components/Form'

console.log(logo);
console.log(fridge);



const myStyle = {
    backgroundColor: '#616265',
    height: '100.5vh',
    marginTop: '-10px',
    marginBottom: '-10px',
    marginLeft: '-10px',
    marginRight: '-10px',
    backgroundSize: 'cover',
};

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
    return (
        <div 
            className="App"
            style = {myStyle}>
                <AppBar 
                    position = "relative"
                    style = {{height: "10%",
                    backgroundColor: "#616265"}}>
                        <Toolbar
                            position = "relative">
                                <DisplayLogo/>
                        </Toolbar>
                </AppBar>
            <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <DisplayFridge/>
                    </Grid>
                    <Grid item xs={6}>
                        <Form/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default App;