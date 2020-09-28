import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Login = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h1>Client Login</h1>
					<hr />
					<Form>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="email"
								required />
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="password"
								required />
						</Form.Group>
						<Button type="submit" name="login">Login</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}