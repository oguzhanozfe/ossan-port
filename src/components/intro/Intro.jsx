import './intro.scss';
import React from 'react';
import me from '../assets/me.png';
import TypeAnimation from 'react-type-animation';


export default function Intro() {


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <h1>
          Hi,
          <br />
          I'm <span className='name'>Oğuzhan Özdemir</span>
          <br />
          Software Developer
        </h1>
        <div className="imgcontainer">
          <img className='me' src={me} alt="me" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">

        </div>

      </div>
    </div>
  )
}
