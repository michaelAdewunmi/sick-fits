import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
	NProgress.start();
}

Router.onRouteChangeComplete = () => {
	NProgress.done();
}

Router.onRouteChangeError = () => {
	NProgress.done();
	console.log('Sorry There was an Error');
}

const SiteHeader = styled.header`
	.bar {
		display: flex;
		padding: 0 20px;
		justify-content: space-between;
		padding-bottom: 0;
		border: 3px solid ${props => props.theme.lightGrey};
		border-left: none;
		border-right: none;
		box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);

		@media screen and (max-width: 960px) {
			display: block;
			padding: 0;

			h1 {
				display: block;
				text-align: center;
			}

			nav {
				width: 100%;
				justify-content: center;
				border-top: 3px solid ${props => props.theme.lightGrey};
			}
		}
	}
`

const BrandHeading = styled.h1`
	display: inline;
	margin: 0;
	width: 20%

	a {
		text-decoration: none;
		span {
			vertical-align: middle;
		    position: relative;
		    top: -22px;
		    left: -10px;
		}
	}

	span.brandname {
		position: relative;
		top: -10px;
	}

	@media screen and (max-width: 720px) {
		display: block;
		text-align: center;
	}
`

const HideBrandName = styled.div`
	display: none;
`

const BrandImg = styled.img`
	width: 50px;
	position: relative;
	top: 8px;
`

const Header = () => (
	<div>
		<SiteHeader>
			<div className="bar">
				<BrandHeading>
					<Link href="/">
						<HideBrandName>
							<a>Sick-Fits</a>
						</HideBrandName>
					</Link>
					<Link href="/">
						<a>
							<BrandImg src="/static/logo.png" alt="Sick-Fits" />
							<span className="brandname">
									<img src="/static/logo.svg" />
							</span>
						</a>
					</Link>
				</BrandHeading>
			<Nav />
			</div>
			
		</SiteHeader>
		<div className="sub-bar">
			<p>Search</p>
		</div>
		<div className="cart">
			<p>Cart</p>
		</div>
	</div>
)

export default Header;