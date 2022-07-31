import './intro.scss';
import React from 'react';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';



export default function Intro() {

  const textRef = useRef();
  const mextRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Create","Build","Develop"],
      backSpeed:  50,
      typeSpeed:  80,
      cursorChar: "_",
    });
  }, [])

  useEffect(() => {
    init(mextRef.current, {
      showCursor: false,
      strings: ["Oguzhan Ozdemir","Ossan"],
      loop: false,
    });
  }, [])


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <h1>Hi, </h1>
        <h2>I'm <span ref={mextRef}></span></h2>
        <h3>Software Developer</h3>
        <h4>Need to help create things?</h4>
        <a href='#contact' className='flat-button'>CONTACT ME</a>
      </div>
      <div className="right">
        <div className="wrapper"> 
        <h5>
          <span ref={textRef}></span>
        </h5>
        <a href='#portfolio' className='flat-button'>My Works</a>
        </div>
      </div>
    </div>
  )
}
