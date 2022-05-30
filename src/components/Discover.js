import React from "react";
import cover from '../images/covers.jpg';
import micro from '../images/microphone.svg';
import album from '../images/albums.svg';
import more from '../images/more.svg';
import Grid from '@mui/material/Grid';



function Discover(props){
    let url = "https://open.spotify.com/playlist/1oDFhhelWwfCnWsD74Jfq0?si=0b2ec78969684623"
    return (
        <div className="discover">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <div className="grid-block">
                    <h1>Discover new music</h1>
                    <Grid container direction="row" alignItems="center" className="box">
                        <div className="grid-simbol">
                            <img className="simbol" src={micro} alt="Micro" />
                            <a className="link-discover" href={url} target="_blank" rel="noopener noreferrer">Charts</a>
                        </div>
                        <div className="grid-simbol">
                            <img className="simbol" src={album} alt="Album" />
                            <a className="link-discover" href={url} target="_blank" rel="noopener noreferrer">Albums</a>
                        </div>
                        <div className="grid-simbol">
                            <img className="simbol" src={more} alt="More" />
                            <a className="link-discover" href={url} target="_blank" rel="noopener noreferrer">More</a>
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