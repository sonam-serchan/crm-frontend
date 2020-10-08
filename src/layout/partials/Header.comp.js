import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = () => {
	return (
		<Navbar collapseOnSelect variant="dark" bg="info" expand="md">
			<Navbar.Brand>
				<img src={logo} alt="logo" width="60px" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<LinkContainer to="/dashboard">
						<Nav.Link>Dashboard</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/tickets">
						<Nav.Link>Tickets</Nav.Link>
					</LinkContainer>
					<Nav.Link href="/">Logout</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}