import "./contact.scss";
import mail from '../assets/mail.jpg';
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  
    };
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={mail} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <form onSubmit={handleSubmit}>
          <input type="name" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" rows={5}></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, getting back to you ASAP</span>}
        </form>
        
      </div>
      
    </div>
  )
}
