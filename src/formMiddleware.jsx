/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./bootstrap.min.css";
import {
	FormGroup,
	Form,
	Label,
	Input,
	Button,
	Col,
	Row,
	Container,
} from "reactstrap";
import { useNavigate } from "react-router";

function FormMiddleware() {
	const [form, setForm] = useState({
		signee: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ [name]: value });
	};

	const _route = (e) => {
		e.preventDefault();
		navigate("/loginpage");
	};
	const navigate = useNavigate();
	return (
		<Container className="bg-light" fluid>
			<div className="container">
				<Form>
					<Row className="mt-4">
						<Col className="bg-light" xs="8">
							<FormGroup check>
								<Label check>
									<Input
										name="signee"
										type="radio"
										checked={form.signee === "intern"}
										value="intern"
										onChange={handleChange}
									/>{" "}
									Sign in as an intern
								</Label>
							</FormGroup>
						</Col>
						<Col className="bg-light" xs="4">
							<FormGroup check>
								<Label check>
									<Input
										name="signee"
										type="radio"
										checked={form.signee === "staff"}
										value="staff"
										onChange={handleChange}
									/>{" "}
									Sign in as a staff
								</Label>
							</FormGroup>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col className="bg-light" sm="4" xs="6">
							<FormGroup>
								<Label for="">Full Name</Label>
								<Input id="" name="fullName" type="text" />
							</FormGroup>
							<FormGroup>
								<Label for="">Select Gender</Label>
								<Input id="" name="gender" type="select">
									<option>select</option>
									<option>Male</option>
									<option>Female</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for="">Course ID</Label>
								<Input id="" name="courseID" type="text" />
							</FormGroup>
							<FormGroup>
								<Label for="">Address</Label>
								<Input id="" name="address" type="textarea" />
							</FormGroup>
						</Col>
						<Col className="bg-light" sm="4" xs="6">
							<FormGroup>
								<Label>Student I.D</Label>
								<Input invalid name="studentID" type="text" />
							</FormGroup>
							<FormGroup>
								<Label for="">Contact Number</Label>
								<Input id="" name="contactNumber" type="text" />
							</FormGroup>
							<FormGroup>
								<Label for="">Class Section</Label>
								<Input id="" name="classSection" type="text" />
							</FormGroup>
							<FormGroup>
								<Label>Finger print</Label>
								<Input invalid name="fingerPrint" type="file" />
							</FormGroup>
						</Col>
						<Col className="bg-light" sm="4">
							<FormGroup>
								<Label>Department I.D</Label>
								<Input invalid name="departmentID" type="text" />
							</FormGroup>
							<FormGroup>
								<Label for="">Email</Label>
								<Input
									id=""
									name="mail"
									placeholder="Your Email"
									type="email"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="">Grade</Label>
								<Input id="" name="grade" type="text" />
							</FormGroup>
							<span
								style={
									form.signee === "intern"
										? { display: "inline" }
										: { display: "none" }
								}>
								<FormGroup>
									<Label for="">Status</Label>
									<Input id="" name="status" type="textarea" />
								</FormGroup>
							</span>
						</Col>
					</Row>
					<Row>
						<Col className="bg-light">
							<center>
								<div>
									<Button color="primary" outline size="lg">
										Sign Up
									</Button>
								</div>
							</center>
						</Col>
					</Row>
				</Form>
				<div className="mt-3">
					<p>
						<span>
							<center>
								Already have an account{" "}
								<span
									style={{ textDecoration: "underline", color: "purple" }}
									onClick={_route}>
									Log In Here
								</span>
							</center>
						</span>
					</p>
				</div>
			</div>
		</Container>
	);
}

export default FormMiddleware;
