import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/Layout';
import Koudaisai from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
render() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Demo} />
				<Route exact path="/test" component={Koudaisai} />
			</Switch>
		</BrowserRouter>

	)
}
}
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();