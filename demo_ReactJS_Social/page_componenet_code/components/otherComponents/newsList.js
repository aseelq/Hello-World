import React, { Component } from 'react';

// Includes
import '../../assets/css/listing.css';

class NewsList extends Component {
	/* Constructor method, initial state */
	constructor() {
		super();
		this.state = { results: [] }
	}
	
	/* Lifecycle methods, fetch, and get results API using map */
	componentDidMount(){
		fetch('https://randomuser.me/api/?results=6').then(results => {
			return results.json();
			}).then(data => {
				{/* Return key and data */}
				let results = data.results.map ((item, i) => {
				return(
					<li className="wow fadeIn" key={i}>
						<div className="flex-column dtail_item">
							<a href="#" className="item_img">
								<img src={item.picture.large} className="img-fluid" />
							</a>
							<div className="caption">
								<a href="#" className="label">{item.location.city}</a>
								<p>
									<a href="#">
										{/* Render state inside page */}
										{item.name.first}
									</a>
								</p>
							</div>
						</div>
					</li>
				)
			})
			
			{/* Set state */}
			this.setState({results:results});
			console.log("state", this.state.results);
		})
	}
	
  render() {
    return (
		/* News Listing wrapper */
		<article>
			<div className="article dlist_wrapper">
				<div className="container">
					<div className="alignment_wrapper">
						<ul className="d-sm-flex flex-wrap lsitem_all">
							{this.state.results}
						</ul>
					</div>
				</div>
			</div>
		</article>
		/* /News Listing wrapper */
    );
  }
}

export default NewsList;