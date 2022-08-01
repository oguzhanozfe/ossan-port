import './portlist.scss';

export default function Portlist({id, title, active, setSelected}) {
  return (
    <li className={active ? "portlist active" : "portlist"}
    onClick={() => setSelected(id)}   
    >
        {title}
    </li>
  )
}  
