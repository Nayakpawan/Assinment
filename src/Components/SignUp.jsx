// eslint-disable-next-line no-unused-vars
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import '../Styles/SignUp.scss'
const SignUp = () => {
  return (
    <Container>
    <Row className="justify-content-center mb-5 px-5">
        <Col xs={12} md={6} lg={6} className="mb-4">
            <h1 className="text-muted px-4">Sign up and get exclusive <br /> special deals</h1>
        </Col>
        <Col xs={12} md={6} lg={6} className="SignUp">
            <input type="text" className="w-50 rounded p-1 bg-white inputtext"/>
            <button className="bg-primary text-white p-1 signupbtn">Sign Up</button>
        </Col>
    </Row>
</Container>
  )
}
export default SignUp