import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer(props){
    return (
        <div>
            <nav className = "footer">
                <ul class = "items-footer">
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
                <ul class = "items-footer">
                    <li><TwitterIcon className = "logo"/> Twitter</li>
                    <li><FacebookIcon className = "logo"/> Facebook</li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Footer