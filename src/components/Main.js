import React from "react";
import girlImg from '../images/landing-page-girl.png';
import Grid from '@mui/material/Grid';
import Join from "./Join";


function Main(props){
    return (
        <div className="main">
            <div className="circle5"></div>
            <div className="circle4"></div>
            <div className="circle3"></div>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <div className="grid-block-girl">
                <img className="img-girl" src={girlImg} alt="Girl-img" />
            </div>
            <div className="grid-block-main">
                <h1>Feel the music</h1>
                <h4>Stream over 20 thousand songs with one click</h4>
                <button className="main-button" href={Join}>Join Us</button>
            </div>  
            </ Grid>
        </div>
        
        
    )
}

export default Main