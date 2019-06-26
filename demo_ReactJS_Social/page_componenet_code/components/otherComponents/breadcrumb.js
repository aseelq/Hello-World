import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

// Includes
import '../../assets/css/breadcrumb.css';

class Breadcrumb extends Component {
  render() {
    return (
		<nav className="mt-auto bcrumb_wrapper" aria-label="breadcrumb">
			<div className="container">
			  <ol className="breadcrumb">
				<li className="breadcrumb-item"><Link to="/">Home</Link></li>
				{/* Determine the place of props */}
				<li className="breadcrumb-item active" aria-current="page">{this.props.pagename}</li>
			  </ol>
			</div>
		</nav>
    );
  }
}

export default Breadcrumb;