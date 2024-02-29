// eslint-disable-next-line no-unused-vars
import React from "react";
import '../Styles/Footer.scss';
import { Col, Container, Row } from "react-bootstrap";
import { RiArrowDownSLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
        <div className="mt-5 footer text-white">
        <Container>
          <Row className="d-flex justify-content-md-center p-5 newcolor">
            <Col xs lg="5">
              <h5 className="text-uppercase">Categories</h5>
              <div className="textcolor">
                <p>Womens Clothing</p>
                <p>Hosting</p>
                <p>Data Center</p>
                <p>Robotic-Automation</p>
              </div>
            </Col>
            <Col md="auto" lg="3">
              <h5 className="text-uppercase">Contact</h5>
              <div className="textcolor">
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms Of Service</p>
                <p>Categories</p>
                <p>About</p>
              </div>
            </Col>
            <Col xs lg="2" className="mt-5">
              <h6 className="mt-5 textcolor">United States <RiArrowDownSLine /></h6>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Footer