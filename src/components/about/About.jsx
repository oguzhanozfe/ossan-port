import './about.scss';
import pdf from "../assets/resume.pdf";

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='wrapper'>
      <h1>About Me</h1>
      <p>My name is Oguzhan. I am a Software Developer based in Istanbul<br/> 
      I have a degree in Computer Science <br/>
      From Game development to Fullstack i have experience in different areas.<br/>
      Right now i am imroving my Unreal Engine knowledge and working on my own project as hobby.<br/>
      I used to develop Vr game and mini games for Game Jams and myself in Unity.<br/>
      Other then that i am worked freelance web development for some clients. <br/>
      I am always looking for new challenges and opportunities to learn new things.<br/>
      Currently seeking to work in a company where I can grow my skills and knowledge.<br/>
      You can check my&nbsp;
      <a href={pdf} target="_blank" rel="noreferrer">resume</a>
      &nbsp;for more information.
      </p>
      </div>
      

    </div>
  )
}
