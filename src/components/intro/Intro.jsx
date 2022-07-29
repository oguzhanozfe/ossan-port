import './intro.scss';
import React from 'react';
import TypeAnimation from 'react-type-animation';


export default function Intro() {


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <h1>
          Hi,
          <br />
          <TypeAnimation
            cursor={false}
            sequence={['React typing animation based on typical', 1000, '']}
            wrapper="h1"
          />
        </h1>
      </div>
      <div className="right">
        <div className="wrapper">

        </div>

      </div>
    </div>
  )
}
