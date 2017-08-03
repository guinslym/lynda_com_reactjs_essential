const About = () => (
   <div className="about">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis erat non dignissim malesuada.
            Mauris in elit quis lectus auctor pharetra. Cras fermentum leo est, a aliquet ligula cursus a. Ut vitae leo
            mollis, scelerisque enim nec, euismod turpis. Praesent ut turpis non justo lacinia varius sed eu mauris.
            Nullam hendrerit aliquet sapien varius faucibus. Nulla varius magna ex, nec ornare massa interdum sed.
            Aliquam consequat lacus nec felis scelerisque, tempus maximus sapien venenatis. Sed quis ornare purus.
            Vestibulum tempor id diam vel ultrices. Aenean neque nibh, tempor in tincidunt nec, ullamcorper in erat.
            Aliquam erat volutpat. Aenean vitae sapien at nibh lacinia accumsan maximus sit amet risus.
        </p>
   </div>
)

export default About

//home.js
import MainMenu from './MainMenu'

const Home = () =>
    <div className="home">
        <MainMenu className="home-page-menu"/>
        <div id="homebox">
            <h1>Rock Appreciation Society</h1>
        </div>
    </div>

export default Home


//index.js
import MainMenu from './ui/MainMenu'

export const Left = ({ children }) => 
	<div className="page">
		<MainMenu className="main-menu"/>
		{children}
	</div>

export const Right = ({ children }) => 
	<div className="page">
		{children}
		<MainMenu className="main-menu"/>
	</div>

export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>

	
//index.js
import MainMenu from './ui/MainMenu'

export const Left = ({ children }) => 
	<div className="page">
		<MainMenu className="main-menu"/>
		{children}
	</div>

export const Right = ({ children }) => 
	<div className="page">
		{children}
		<MainMenu className="main-menu"/>
	</div>

export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>
//

//route.js
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import About from './components/ui/About'
import MemberList from './components/ui/MemberList'
import  { Left, Right, Whoops404  } from './components'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
        	<Route path="members" component={MemberList} />
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes