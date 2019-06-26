import React, { Component } from 'react';

// Includes
import '../../assets/css/introduction.css';

class Introduction extends Component {
  render() {
    return (
		/* About Intro Social Eye */
		<article>
			<div className="article intro_wrapper">
				<div className="container">
					<cite className="bg_wrapper">About Social Eye</cite>
					<ul className="d-sm-flex dtail_item" data-wow-delay="0.4s">
						<li>
							<div className="grp_images" data-parallax='{"y": 30}'>
								<i className="pstion imgpstion01 wow fadeInDown"><img src="../images/img_01.jpg" alt="" className="img-fluid" /></i>
								<i className="pstion imgpstion02 wow fadeInRight"><img src="../images/img_02.jpg" alt="" className="img-fluid" /></i>
								<i className="pstion imgpstion03 wow fadeInUp"><img src="../images/img_03.jpg" alt="" className="img-fluid" /></i>
								<div className="pstion imgheadline wow fadeInLeft">
									<cite>our story</cite>
									<h3>Somthing Know About Social Eye</h3>
								</div>
							</div>
						</li>
						<li>
							<div className="caption wow fadeIn">
								<h2>The Journey of a Thousand Miles Begins With One Step.</h2>
								<p>
									Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue luctus magna dolor
									luctus undo magna an dolor vitae egestas magna egestas magna ipsum vitae purus ipsum primis in 
									cubilia laoreet augue luctus magna dolor luctus undo magna an.
								</p>
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
		/* About Intro Social Eye */
    );
  }
}

export default Introduction;