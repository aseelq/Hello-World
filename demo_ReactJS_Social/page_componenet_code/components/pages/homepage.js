import React, { Component } from 'react';

// Components
import Carousel from '../../components/otherComponents/carousel';
import Introduction from '../../components/otherComponents/introduction';
import NewsList from '../../components/otherComponents/newsList';

class Homepage extends Component {
  render() {
    return (
    /* Body Website/RWD */
	<section>
		<div className="section wrap_all">
			<Carousel />
			<Introduction />
			<NewsList />
		</div>
	</section>
	/* /Body Website/RWD */
    );
  }
}

export default Homepage;