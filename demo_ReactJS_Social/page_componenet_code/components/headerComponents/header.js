import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    /* Header wrapper */
	<header>
		<div className="header header_wrapper">
			<div className="container-fload">
				<div className="d-none d-xl-block hdr_webview">
					<ul className="d-flex align-items-center header_links">
						<li>
							<ul className="d-flex align-items-center header_menu">
								<li>
								<Link to="/" className="imglogo">
									<img src="../images/logo_EyeSocial.png?v=60" alt="" className="img-fluid normal" />
									<img src="../images/logo_EyeSocial_light.png?v=60" alt="" className="img-fluid sticky" />
								</Link>
								</li>
								<li><Link to="/">Homepage</Link></li>
								<li><Link to="/about">About Social Eye</Link></li>
								<li><Link to="/news">News</Link></li>
								<li><Link to="/contact">Contact Us</Link></li>
							</ul>
						</li>
						<li className="ml-auto">
							<ul className="d-flex justify-content-end header_language">
								<li><a href="#" className="lang_en active">English</a></li>
								<li><a href="#" className="lang_fr">French</a></li>
								<li><a href="#" className="lang_ar">عربي</a></li>
							</ul>
							
							<ul className="d-flex header_social">
								<li>
									<a href="#" className="btn btn_login">
										<span className="btn_over"></span>
										<i>Login</i>
									</a>
								</li>
								<li>
									<a href="#" className="btn btn_signup">
										<span className="btn_over"></span>
										<i>Sign up</i>
									</a>
								</li>
								<li><a href="#" className="btn_social btn_snapchat"><i className="fab fa-snapchat-ghost"></i></a></li>
								<li><a href="#" className="btn_social btn_facebook"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#" className="btn_social btn_instagram"><i className="fab fa-instagram"></i></a></li>
								<li><a href="#" className="btn_social btn_twitter"><i className="fab fa-twitter"></i></a></li>
							</ul>
						</li>
					</ul>
				</div>
				
				<div className="d-xl-none hdr_rwdview">
					<ul className="d-flex align-items-center header_links" id="slide-nav">
						<li>
							<ul className="d-flex align-items-center header_menu">
								<li>
									<a href="#" className="navbar-toggle">
										<i className="fas fa-bars"></i>
										<cite className="sr-only">Menu</cite>
									</a>
								</li>
								<li>
									<a href="#" className="imglogo">
										<img src="images/logo_EyeSocial.png?v=60" alt="" className="img-fluid normal" />
										<img src="images/logo_EyeSocial_light.png?v=60" alt="" className="img-fluid sticky" />
									</a>
								</li>
							</ul>
						</li>
						<li className="ml-auto">
							<a href="#" className="img_user">
								<img src="images/img_userDefault.png" alt="" className="img-fluid rounded-circle normal" />
								<img src="images/img_userDefault_dark.png" alt="" className="img-fluid rounded-circle sticky" />
								
								<cite className="sr-only">Profile</cite>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header> 
	/* /Header wrapper */
    );
  }
}

export default Header;