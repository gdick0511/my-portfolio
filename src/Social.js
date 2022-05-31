import GitHubLogo from './images/GitHubLogo.png'
import MediumLogo from './images/MediumLogo.png'
import LinkedInLogo from './images/LinkedInLogo.png'

function Social(){

    return(
        <div>
            <h2>Social/Connect</h2>
            <a href='https://github.com/gdick0511' src={GitHubLogo} target='_blank' className='socialList'><img className='logo' src={GitHubLogo}></img> </a>
            <br></br>
            <a href='https://www.linkedin.com/in/garrett-dick/' target='_blank' className='socialList'><img className='logo' src={LinkedInLogo}></img> </a>
            <br></br>
            <a href='https://medium.com/me/stories/public' target='_blank' className='socialList'><img className='logo' src={MediumLogo}></img></a>
            <br></br>
            <br></br>
        </div>
    )
}

export default Social