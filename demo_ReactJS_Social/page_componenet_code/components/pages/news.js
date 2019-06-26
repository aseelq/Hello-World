import React, { Component } from 'react';

// Components
import Breadcrumb from '../../components/otherComponents/breadcrumb';
import NewsList from '../../components/otherComponents/newsList';

// Includes
import '../../assets/css/breadcrumb.css';
import '../../assets/css/listing.css';
import '../../assets/css/lazyload_button.css';

class News extends Component {
  render() {
	{/* As initial values, determine the values of props */}
	const props = {
		pagename : 'News list results'
	};
	
    return (
    /* Body Website/RWD */
	<section>
		<div className="section wrap_all lst_page">
			{/* Render the props values inside page, write it when no nested components used */}
			<Breadcrumb {...props} />
			
			<NewsList />
			
			{/* Lazy Load Button */}
			<div className="content_wrap section"> 
				<div className="loader_wrap loader_socialEye"> 
					<div className="container"> 
						<button type="button" className="btn">
							<i className="fa fa-angle-double-down animated infinite bounce slower"></i> 
							<i className="fa fa-spinner fa-spin d-none"></i> 
						</button> 
						<p className="more">Load more</p> 
					</div> 
				</div>
			</div>
			{/* /Lazy Load Button */}
		</div>
	</section>
	/* /Body Website/RWD */
    );
  }
}

export default News;