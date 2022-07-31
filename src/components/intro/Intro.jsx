import './intro.scss';
import React from 'react';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';



export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Create","Build","Develop"],
    });
  }, [])
  


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <h1>Hi, </h1>
        <h2>I'm Oguzhan Ozdemir</h2>
        <h3>Software Developer</h3>
        <h4>Need to help create things?</h4>
        <a href='#contact' className='flat-button'>CONTACT ME</a>
      </div>
      <div className="right">
        <div className="wrapper"> 
        <h5>
          <span ref={textRef}></span>
        </h5>
        </div>
      </div>
    </div>
  )
}
