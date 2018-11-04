import react, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
	themeColor: '#002435',
	brandColor: '#F0000',
	textColor: '#393939',
	grey: '#3A3A3A',
	extraLightGrey: '#F9F9F9',
	lightGrey: '#E1E1E1',
	screenLarge: '1280px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
	background: ${props => props.theme.extraLightGrey};
	color: ${props => props.theme.textColor};
	min-height: 100vh;
`
const Inner = styled.div`
	max-width: ${props => props.theme.screenLarge};
	margin: 0 auto;
	padding: 2rem;
`

injectGlobal`
	@font-face {
		font-family: 'radnika_next';
		src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
	}
	html {
		box-sizing: border-box;
		font-size: 16px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		font-family: montserrat,Arial,Helvetica,sans-serif;
		font-size: 0.9rem;
		line-height: 1.8;
		color: ${theme.textColor};
	}
	a {
		text-decoration: none;
		color: ${theme.textColor};
	}
`

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>
						{ this.props.children }
					</Inner>
				</StyledPage>
			</ThemeProvider>
		)
	}
}

export default Page;