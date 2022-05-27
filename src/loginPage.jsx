import React from "react";
import { useNavigate } from "react-router";
import { Button, FormGroup, Label, Input, Card, Row, Col } from "reactstrap";

function LogInPage() {
	const navigate = useNavigate();

	return (
		<div>
			<Row className="mt-5">
				<Col md="4"></Col>
				<Col md="4">
					<center>
						<Card body color="light" outline>
							<h2>Log In</h2>
							<div>
								<Button block outline size="sm">
									With Finger Print
								</Button>
							</div>
							<h2 className="mt-1 mb-1">or</h2>
							<FormGroup>
								<Label for="">
									{" "}
									<b>Enter User Number</b>
								</Label>{" "}
								<br />
								<Input id="" name="userNumber" type="text" />
							</FormGroup>
							<FormGroup>
								<Label for="">
									{" "}
									<b>Password</b>
								</Label>{" "}
								<br />
								<Input id="" name="userPassword" type="text" />
							</FormGroup>
							<div>
								<Button block color="primary" outline size="sm">
									Log In
								</Button>
							</div>
							<p className="mt-4">
								{" "}
								New User?{" "}
								<span
									onClick={() => navigate("/")}
									style={{ textDecoration: "underline", color: "purple" }}>
									{" "}
									Sign Up
								</span>{" "}
							</p>
						</Card>
					</center>
				</Col>
				<Col md="4"></Col>
			</Row>
		</div>
	);
}

export default LogInPage;
