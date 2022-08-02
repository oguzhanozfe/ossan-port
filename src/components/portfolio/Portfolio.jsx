import './portfolio.scss';
import React from 'react';
import Portlist from '../portlist/Portlist';
import { useEffect, useState } from 'react';
import { featuredPortfolio, webPortfolio, unityPortfolio, UnrealPortfolio, AiPortfolio } from '../data';

export default function Portfolio() {
  const [selected, setSelected] = React.useState("featured");
  const [data, setData] = useState([]);

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

  useEffect(() => {

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "unity":
        setData(unityPortfolio);
        break;
      case "unreal engine":
        setData(UnrealPortfolio);
        break;
      case "ai and ml":
        setData(AiPortfolio);
        break;
      default:
          setData(featuredPortfolio);
    }
  
  }, [selected]);
  

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
        {data.map((d) => (
          <div className='item'>
            <img src={d.img}
            alt=""
             />
            <h3>{d.title}</h3>
        </div>
        ))}
      </div>

    </div>
  )
}
