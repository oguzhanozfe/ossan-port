import "./portfolio.scss";
import React from "react";
import axios from "axios";
import Portlist from "../portlist/Portlist";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = React.useState("featured");
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  const list = [
    {
      id: "web",
      title: "Web",
    },
    {
      id: "game development",
      title: "Game Development",
    },
    {
      id: "ai and ml",
      title: "AI and ML",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post("https://api.github.com/graphql", {
        query: `
        query {
          viewer {
             repositories(first: 3, affiliations: [OWNER], privacy:PUBLIC) {
               nodes {
                 name
                createdAt
                description
                id
                url
                openGraphImageUrl
                repositoryTopics (first:1) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
               }
             }
           }
        }
        `
      },{
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });

      await setRepos(res.data.data.viewer.repositories.nodes);
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    switch (selected) {
      case "web":
        setData(repos.filter(repo => repo.repositoryTopics.nodes[0].topic.name === "web"));
        break;
      case "game development":
        setData(repos.filter(repo => repo.repositoryTopics.nodes[0].topic.name === "ue5" || repo.repositoryTopics.nodes[0].topic.name === "ue4" || repo.repositoryTopics.nodes[0].topic.name === "unity"));
        break;
      case "ai and ml":
        setData(repos.filter(repo => repo.repositoryTopics.nodes[0].topic.name === "ai" || repo.repositoryTopics.nodes[0].topic.name === "ml"));
        break;
      default:
        setData(repos.filter(repo => repo.repositoryTopics.nodes[0].topic.name === "web"));
    }
  
  }, [selected, repos]);
  

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <Portlist
            key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <a className="item" key={d.id} href={d.url}>
            <img src={d.openGraphImageUrl} alt={d.description} />
            <h3>{d.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
