import { NavLink} from 'react-router-dom'

function Navbar(){

    return(
        <div className='navbar'>
            <NavLink className='navbar_text'to='/'>
                Home
            </NavLink>
            <NavLink className='navbar_text' to='about'>
                About
            </NavLink>
            <NavLink className='navbar_text' to='projects'>
                Projects
            </NavLink>
            <NavLink className='navbar_text' to='social'>
                Social
            </NavLink>
        </div>
    )
}

export default Navbar