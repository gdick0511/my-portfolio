import { Route, Switch} from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Social from './Social'
import Home from './Home'

function Main(){

    return(
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                        <About />
                </Route>
                <Route exact path='/projects'>
                        <Projects />
                </Route>
                <Route exact path='/social'>
                        <Social />
                    </Route>
            </Switch>
        </div>
    )
}

export default Main