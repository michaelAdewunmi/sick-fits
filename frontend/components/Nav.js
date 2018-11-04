import Link from 'next/link';
import styled from 'styled-components';

const HeaderNav = styled.nav`
	align-items: center;
	display: flex;
	font-size: 0.7rem;
	justify-self: end;
	justify-content: flex-end;
	margin: 0;
	padding: 0;
	width: 75%;

	a,
	button {
		padding: 0.5rem 2.5rem;
		display: flex;
		align-items: center;
		position: relative;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 1.2em;
		background: none;
		border: 0;
		cursor: pointer;
		height: 100%;
		@media (max-width: 960px) {
			padding: 15px;
		}
		&:before {
			content: '';
			width: 2px;
			background: ${props => props.theme.lightGrey};
			height: 100%;
			left: 0;
			position: absolute;
			transform: skew(-20deg);
			top: 0;
			bottom: 0;
		}
		&:after {
			height: 3px;
			background: ${props => props.theme.themeColor};
			content: '';
			width: 0;
			position: absolute;
			transform: translateX(-50%);
			transition: width 0.4s;
			transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
			left: 42%;
			margin-top: 2rem;
			@media screen and (max-width: 960px) {
				margin-top: 1.7rem;
			}
		}
		&:hover,
		&:focus {
			outline: none;
			&:after {
				width: calc(100% - 30px);
			}
		}
	}
`

const Nav = () => (
	<HeaderNav>
		<Link href="/">
			<a>Home</a>
		</Link>
		<br />
		<Link href="/sell">
			<a>Sell</a>
		</Link>
		<Link href="/order">
			<a>Order</a>
		</Link>
		<Link href="/account">
			<a>My Account</a>
		</Link>
		<Link href="/signout">
			<a>Sign Out</a>
		</Link>
		<Link href="/cart">
			<a>Cart</a>
		</Link>
	</HeaderNav>
)

export default Nav;