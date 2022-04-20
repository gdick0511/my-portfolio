import JSLogo from './JSLogo.png'
import CSSLogo from './CSSLogo.png'
import HTMLLogo from './HTMLLogo.png'
import ReactLogo from './ReactLogo.png'
import RubyLogo from './RubyLogo.png'
import RailsLogo from './RailsLogo.png'

function About(){

    return(
        <div>
            <h2>About Me</h2>
            <img className='logo' src={CSSLogo}></img>
            <img className='logo' src={HTMLLogo}></img>
            <img className='logo' src={JSLogo}></img>
            <img className='logo' src={ReactLogo}></img>
            <img className='logo' src={RubyLogo}></img>
            <img className='logo' src={RailsLogo}></img> 
            <p>These are words that are just a place holder</p>
            
        </div>
    )
}

export default About