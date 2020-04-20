import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/Layout';
import About from './components/About';
import Access from './components/Access';
import Offer from './components/Offer';
import Contact from './components/Contact'
import Project from './components/Project'
import Sponsor from './components/Sponsor.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
render() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Demo} />
				<Route exact path="/about" component={About} />
				<Route exact path="/access" component={Access} />
				<Route exact path="/offer" component={Offer} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/project" component={Project} />
				<Route exact path ="/Sponsor" component={Sponsor} />
				{/* <Route exact path="/kit1.jpg" /> */}
			</Switch>
		</BrowserRouter>

	)
}
}
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();