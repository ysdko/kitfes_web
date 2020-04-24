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
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';


class App extends React.Component {
render() {
	return (
		<BrowserRouter>
			<ScrollToTop>
			<Switch>
				<Route exact path="/" component={Demo} />
				<Route  path="/about" component={About} />
				<Route  path="/access" component={Access} />
				<Route  path="/offer" component={Offer} />
				<Route  path="/contact" component={Contact} />
				<Route  path="/project" component={Project} />
				<Route  path="/Sponsor" component={Sponsor} />
				</Switch>
			</ScrollToTop>
		</BrowserRouter>

	)
}
}
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();