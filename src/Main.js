import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Social from './Social'

function Main(){

    return(
        <div>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/social' element={<Social/>}/>
            </Routes>
        </div>
    )
}

export default Main