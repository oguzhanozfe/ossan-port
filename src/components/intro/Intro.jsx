import "./intro.scss";
import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const mextRef = useRef();


  useEffect(() => {
    init(mextRef.current, {
      showCursor: true,
      strings: ["Software Developer", "Unreal Engine Developer", "Web Developer", "Game Developer", "Simulation Engineer"],
      cursorChar: "_",
    });
  }, []);

  return (
    <div className="intro" id="intro">
        <div className="wrapper">
          <h1>Hi, </h1>
          <h2>
            I'm Oguzhan Ozdemir
          </h2>
          <h3> 
            <span ref={mextRef}></span>
          </h3>
          <h4>Need to help create things?</h4>
          <a href="#contact" className="flat-button">
            CONTACT ME
          </a>
        </div>
      
    </div>
  );
}
