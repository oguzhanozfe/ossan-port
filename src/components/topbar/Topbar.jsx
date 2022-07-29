import React from 'react';
import './topbar.scss';
import LogoS from '../assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faItchIo, faDiscord, faSpotify} from '@fortawesome/free-brands-svg-icons'

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' ><img className='logo' src={LogoS} alt='logo' /></a>
          <div className="itemContainer">
            <a target="_blank" className='icon' rel='noreferrer' href='https://www.linkedin.com/in/oguzhan-ozdemir-10b3621a3/'>
                <FontAwesomeIcon  icon={faLinkedin} color="#4d4d4e"/>
            </a>
            <a target="_blank" className='icon' rel='noreferrer' href='https://github.com/oguzhanozfe'>
                <FontAwesomeIcon   icon={faGithub} color="#4d4d4e"/>
            </a>
            <a target="_blank" className='icon' rel='noreferrer' href='https://ossanozfe.itch.io/'>
                <FontAwesomeIcon   icon={faItchIo} color="#4d4d4e"/>
            </a>
            <a target="_blank"  className='icon' rel='noreferrer' href='https://discord.gg/Y4RYsfdG'>
                <FontAwesomeIcon  icon={faDiscord} color="#4d4d4e"/>
            </a>
            <a target="_blank"  className='icon' rel='noreferrer' href='https://open.spotify.com/user/oguzhanozdemir-'>
                <FontAwesomeIcon icon={faSpotify} color="#4d4d4e"/>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line1'></span>
            <span className='line1'></span>
          </div>

        </div>
      </div>
    </div>
  )
}
