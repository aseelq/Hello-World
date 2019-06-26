import React, { Component } from 'react';

// Includes
import '../../assets/css/carousel.css';

class Carousel extends Component {
  render() {
    return (
		/* Header carousel wrapper */
		<div id="carouselHeader" className="carousel header_carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carouselHeader" data-slide-to="0" className="active"></li>
				<li data-target="#carouselHeader" data-slide-to="1"></li>
				<li data-target="#carouselHeader" data-slide-to="2"></li>
				<li data-target="#carouselHeader" data-slide-to="3"></li>
			</ol>
			
			<div className="carousel-inner">
				<div className="carousel-item active">
				  <img className="d-block w-100 img-fluid scalable" src="../images/img_slider01.jpg" alt="First slide" />
				  /* In case Two different slide image 
				  <img className="img-fluid d-none d-xl-block" src="images/img_slider01.jpg" alt="First slide" />
				  <img className="img-fluid mx-auto d-xl-none" src="images/img_slider01_mobile.jpg" alt="First slide" />
				  */
				  <i className="grd_image"></i>
				  
				  <div className="container">
					  <div className="caption_block">
						<h3>A Discovery Platform for Influencers</h3>
						<p className="d-none d-md-block">
							Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus 
							magna dolor luctus undo magna an dolor vitae
						</p>
						<a href="#" className="btn btn_join">
							<span className="btn_over"></span>
							<i>Join Now</i>
						</a>
					  </div>
				  </div>
				</div>
				
				<div className="carousel-item">
				  <img className="d-block w-100 img-fluid scalable" src="../images/img_slider01.jpg" alt="First slide" />
				  /* In case Two different slide image 
				  <img className="img-fluid d-none d-xl-block" src="images/img_slider01.jpg" alt="First slide" />
				  <img className="img-fluid mx-auto d-xl-none" src="images/img_slider01_mobile.jpg" alt="First slide" />
				  */
				  <i className="grd_image"></i>
				  
				  <div className="container">
					  <div className="caption_block">
						<h3>A Discovery Platform for Influencers</h3>
						<p className="d-none d-md-block">
							Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus 
							magna dolor luctus undo magna an dolor vitae
						</p>
						<a href="#" className="btn btn_join">Join Now</a>
					  </div>
				  </div>
				</div>
				
				<div className="carousel-item">
				  <img className="d-block w-100 img-fluid scalable" src="../images/img_slider01.jpg" alt="First slide" />
				  /* In case Two different slide image 
				  <img className="img-fluid d-none d-xl-block" src="images/img_slider01.jpg" alt="First slide" />
				  <img className="img-fluid mx-auto d-xl-none" src="images/img_slider01_mobile.jpg" alt="First slide" />
				  */
				  <i className="grd_image"></i>
				  
				  <div className="container">
					  <div className="caption_block">
						<h3>A Discovery Platform for Influencers</h3>
						<p className="d-none d-md-block">
							Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus 
							magna dolor luctus undo magna an dolor vitae
						</p>
						<a href="#" className="btn btn_join">Join Now</a>
					  </div>
				  </div>
				</div>
				
				<div className="carousel-item">
				  <img className="d-block w-100 img-fluid scalable" src="../images/img_slider01.jpg" alt="First slide" />
				  /* In case Two different slide image 
				  <img className="img-fluid d-none d-xl-block" src="images/img_slider01.jpg" alt="First slide" />
				  <img className="img-fluid mx-auto d-xl-none" src="images/img_slider01_mobile.jpg" alt="First slide" />
				  */
				  <i className="grd_image"></i>
				  
				  <div className="container">
					  <div className="caption_block">
						<h3>A Discovery Platform for Influencers</h3>
						<p className="d-none d-md-block">
							Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus 
							magna dolor luctus undo magna an dolor vitae
						</p>
						<a href="#" className="btn btn_join">Join Now</a>
					  </div>
				  </div>
				</div>
			</div>
		</div>
		/* /Header carousel wrapper */
    );
  }
}

export default Carousel;