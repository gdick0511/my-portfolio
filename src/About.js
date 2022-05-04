import JSLogo from './JSLogo.png'
import CSSLogo from './CSSLogo.png'
import HTMLLogo from './HTMLLogo.png'
import ReactLogo from './ReactLogo.png'
import RubyLogo from './RubyLogo.png'
import RailsLogo from './RailsLogo.png'
import GitHubLogo from './GitHubLogo.png'

function About(){

    return(
        <div id='aboutMe'>
            <h2>About Me</h2>
            <img className='logo' src={HTMLLogo}></img>
            <img className='logo' src={CSSLogo}></img>
            <img className='logo' src={JSLogo}></img>
            <img className='logo' src={ReactLogo}></img>
            <img className='logo' src={RubyLogo}></img>
            <img className='logo' src={RailsLogo}></img>
            <img className='logo' src={GitHubLogo}></img> 
            <p>Hi there! 
                <br></br>My name is Garrett Dick and I am a Full-Stack Software Developer from Houston,TX. I graduated from Flatiron School's full-immersive software engineering bootcamp in January 2022 and have a passion for applying new technologies and have a knack for technical problem solving. With a background in IT, I've collaborated cross-platform intergration for user front-end programs.</p>
        </div>
    )
}

export default About