import { NavLink, Link } from 'react-router-dom'

function Navbar(){

    return(
        <div className='navbar'>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='about'>
                About
            </NavLink>
            <NavLink to='projects'>
                Projects
            </NavLink>
            <NavLink to='social'>
                Social
            </NavLink>
        </div>
    )
}

export default Navbar