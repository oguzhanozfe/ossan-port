import './about.scss';
import pdf from "../assets/resume.pdf";

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='wrapper'>
      <h1>About Me</h1>
      <p>You can check my&nbsp;
      <a href={pdf} target="_blank" rel="noreferrer">resume</a>
      &nbsp;for more information.
      </p>
      </div>
    </div>
  )
}
