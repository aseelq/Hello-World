import React, { Component } from 'react';

// Components
import Breadcrumb from '../../components/otherComponents/breadcrumb';

// Includes
import '../../assets/css/header_inner.css';

class HeaderInner extends Component {
  render() {
	const style={
		backgroundImage:'url(../images/bg_inner01.jpg)'
	}
	return (
	/* Header Inner wrapper */
	<div className="hdr_pginner" style={style}>
		<div className="container">
			<div className="flex-column hdr_dtail">
				<cite>our story</cite>
				{/* Determine the place of props */}
				<h1>{this.props.title}</h1>
				
				{/* Becouse the component inside another, should determine the name of props that would we call it */}
				<Breadcrumb pagename={this.props.pagename} />
			</div>
		</div>
	</div>
	/* /Header Inner wrapper */
	);
  }
}

export default HeaderInner;