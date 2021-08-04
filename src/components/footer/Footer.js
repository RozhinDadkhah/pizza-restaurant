import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon /> <TwitterIcon /> <LinkedInIcon />
            </div>
            <p> &copy; 2021 pedrotechpizza.com</p>
        </div>
    )
}

export default Footer
