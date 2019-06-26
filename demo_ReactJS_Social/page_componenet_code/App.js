import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

/* Includes*/
import './assets/css/custom.css';
import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.min.css';

// Components
import Header from './components/headerComponents/header';
import Homepage from './components/pages/homepage';
import About from './components/pages/about';
import News from './components/pages/news';

class App extends Component {
  render() {
    return (
		<Router>
		  <div className="App">
			<Header />
			<Route exact path="/" component={Homepage} />
			<Route exact path="/about" component={About} />
			<Route exact path="/news" component={News} />
		  </div>
		</Router>
    );
  }
}

export default App;
