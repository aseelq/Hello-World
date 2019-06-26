import React, { Component } from 'react';

// Components
import HeaderInner from '../../components/headerComponents/innerHeader';

// Includes
import '../../assets/css/post.css';

class About extends Component {
  render() {
	{/* As initial values, determine the values of props */}
	const props = {
		title : 'About Social Eye',
		pagename : 'About'
	};
	
    return (
    /* Body Website/RWD */
	<section>
		{/* Render the props values inside page */}
		<HeaderInner {...props} />
		
		<div className="section wrap_all">
			{/* Article post page */}
			<article>
				<div className="article post_wrapper post_about">
					<div className="container">
						<ul className="d-sm-flex dtail_item" data-wow-delay="0.4s">
							<li>
								<div className="grp_images">
									<img src="../images/img_08.jpg" alt="" className="img-fluid" />
								</div>
							</li>
							<li>
								<div className="caption ck-editor wow fadeIn">
									<h2>The Journey of a Thousand Miles Begins With One Step.</h2>
									<p>
										Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus 
										magna dolor luctus undo magna an dolor vitae egestas magna egestas magna ipsum vitae purus 
										ipsum primis in cubilia laoreet augue luctus magna dolor luctus undo magna an.
									</p>
									<p>
										Magna magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus magna dolor 
										luctus undo magna an dolor vitae.
									</p>
									
									<ul>
										<li>There are many variations of passages of Lorem Ipsum available</li>
										<li>But the majority have suffered alteration in some form, by injected humour</li>
										<li>Or randomised words which don't look even slightly believable.</li>
									</ul>
									
									<h4>Content:</h4>
									<p>
										Magna magna ipsum vitae purus ipsum primis in cubilia laoreet augue 
										luctus magna dolor luctus undo magna an dolor vitae.
									</p>
									
									<h4>Experience:</h4>
									<p>
										Magna magna ipsum vitae purus ipsum primis in cubilia laoreet augue 
										luctus magna dolor luctus undo magna an dolor vitae.
									</p>
									
									<a href="#" className="btn btn_discover">
										<span className="btn_over"></span>
										<i>Discover Now</i>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</article>
			{/* /Article post page */}
		</div>
	</section>
	/* /Body Website/RWD */
    );
  }
}

export default About;