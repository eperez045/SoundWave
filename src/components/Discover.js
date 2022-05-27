import React from "react";
import cover from '../images/covers.jpg';
import micro from '../images/microphone.svg';
import album from '../images/albums.svg';
import more from '../images/more.svg';
import Grid from '@mui/material/Grid';



function Discover(props){
    return (
        <div className="discover">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <div className="grid-block">
                    <h1>Discover new music</h1>
                    <Grid container direction="row" alignItems="center">
                        <div className="grid-simbol">
                            <img className="simbol" src={micro} alt="Micro" />
                            <p>Charts</p>
                        </div>
                        <div className="grid-simbol">
                            <img className="simbol" src={album} alt="Album" />
                            <p>Albums</p>
                        </div>
                        <div className="grid-simbol">
                            <img className="simbol" src={more} alt="More" />
                            <p>More</p>
                        </div>
                    </Grid>
                    <p>By joining you can benefit by listening to the latest albums relasead</p>
                </div>
                <div className="grid-block">
                    <img className="cover" src={cover} alt="Cover" />
                </div>
            </Grid>
        </div>
        
    )
}

export default Discover