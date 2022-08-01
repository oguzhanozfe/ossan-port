import './portfolio.scss';
import React from 'react';
import Portlist from '../portlist/Portlist';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [selected, setSelected] = React.useState("featured");

  const list =[
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web",
    },
    {
      id: "unity",
      title: "Unity",
    },
    {
      id: "unreal engine",
      title: "Unreal Engine",
    },
    {
      id: "ai and ml",
      title: "AI and ML",
    },
  ];
  

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <Portlist
           title={item.title}
           active={selected === item.id}
           setSelected={setSelected}
           id={item.id}
           />
        ))}
      </ul>
      <div className='container'>
        <div className='item'>
          <img src="https://raw.githubusercontent.com/oguzhanozfe/Nba_Mvp_correlation/master/testPNG.PNG" 
          alt="nba" />
          <h3>NBA MVP Analysis</h3>
        </div>
        <div className='item'>
          <img src="https://raw.githubusercontent.com/oguzhanozfe/Nba_Mvp_correlation/master/testPNG.PNG" 
          alt="nba" />
          <h3>NBA MVP Analysis</h3>
        </div>
        <div className='item'>
          <img src="https://raw.githubusercontent.com/oguzhanozfe/Nba_Mvp_correlation/master/testPNG.PNG" 
          alt="nba" />
          <h3>NBA MVP Analysis</h3>
        </div>
        <div className='item'>
          <img src="https://raw.githubusercontent.com/oguzhanozfe/Nba_Mvp_correlation/master/testPNG.PNG" 
          alt="nba" />
          <h3>NBA MVP Analysis</h3>
        </div>
        <div className='item'>
          <img src="https://raw.githubusercontent.com/oguzhanozfe/Nba_Mvp_correlation/master/testPNG.PNG" 
          alt="nba" />
          <h3>NBA MVP Analysis</h3>
        </div>
      </div>

    </div>
  )
}
