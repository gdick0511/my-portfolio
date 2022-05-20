import JSLogo from './images/JSLogo.png'
import CSSLogo from './images/CSSLogo.png'
import HTMLLogo from './images/HTMLLogo.png'
import ReactLogo from './images/ReactLogo.png'
import RubyLogo from './images/RubyLogo.png'
import RailsLogo from './images/RailsLogo.png'
import GitHubLogo from './images/GitHubLogo.png'
import Picture from './images/Picture.png'

function About(){

    return(
        <div id='aboutMe'>
            <h2>About Me</h2>
            <img id='me' src={Picture}/>
            <div id="about_words">
                <p>Howdy! 
                    <br></br>My name is Garrett and I am a Full-Stack Software Developer from Houston,TX. I graduated from Flatiron School's full-immersive software engineering bootcamp in January 2022 and have a passion for learning and applying new technologies and problem solving. When I am not behind the keyboard I enjoy creating music, exploring the outdoors and trying new recipes in the kitchen.
                </p>
            </div>
            <img className='logo' src={HTMLLogo}></img>
            <img className='logo' src={CSSLogo}></img>
            <img className='logo' src={JSLogo}></img>
            <img className='logo' src={ReactLogo}></img>
            <img className='logo' src={RubyLogo}></img>
            <img className='logo' src={RailsLogo}></img>
            <img className='logo' src={GitHubLogo}></img> 
        </div>
    )
}

export default About