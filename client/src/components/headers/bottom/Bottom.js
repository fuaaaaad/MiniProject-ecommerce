import React from 'react';
import './Bottom.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link } from 'react-router-dom';

const Bottom = () => {
  return (
    <div className="bottom">
      <p>Contact me:</p>
      <br/>
      <a href="https://www.facebook.com/fuaadv/">
      <FacebookIcon /></a>
      <a href="https://github.com/fuaaaaad">
     <GitHubIcon /></a>
     <a href="https://www.instagram.com/f.u.x.x.d_/">
     <InstagramIcon />
     </a>
     <a href="https://www.linkedin.com/in/muhammed-fuaad-39345515a/">
      <LinkedInIcon /></a>

    </div>
  );
}

export default Bottom;
