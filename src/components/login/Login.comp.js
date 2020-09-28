import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({ handleOnChange, handleOnSubmit, frmSwitcher, email, pass }) => {

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Client Login</h1>
					<hr />
					<Form onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="email"
								required />
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={pass}
								onChange={handleOnChange}
								placeholder="password"
								required />
						</Form.Group>
						<Button type="submit" name="login">Login</Button>
					</Form>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<a href="#!" onClick={() => frmSwitcher('reset')}>Forgot Password?</a></Col>
			</Row>
		</Container>
	)
};

LoginForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	frmSwitcher: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired
};