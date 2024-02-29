import { Button, Card, Col, Container, Row } from "react-bootstrap"
import img1 from '../assets/download.png';
import '../Styles/Home.scss'
const CardContenar = () => {
    return (
        <Container>
            <Row className="justify-content-center mb-5 px-5">
                <h2 className="mb-4 px-5 text-muted">Related deals you might like for</h2>
                {[1, 2, 3].map((index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" border-0">
                            <Card.Img variant="top" src={img1} className="w-50 zoom-on-hover mx-auto mt-4" />
                            <Card.Body>
                                <span className="rounded px-1 bg-white me-2 offset bg-body-secondary">20% Off</span>
                                <span className="rounded px-1 bg-white offset bg-body-secondary">Limited time</span>
                                <Card.Title className="text-center fs-6 fw-semibold mt-3">Webbuilder 1</Card.Title>
                                <Card.Text className="text-muted">
                                    Computer  Modern clasic with wix support
                                </Card.Text>
                                <Card.Text className="text-muted">
                                    <h6>$39.96 <span className="off">  $49.96</span> <span className="off text-danger">(20% Off)</span></h6>

                                </Card.Text>
                                <Button variant="primary" className="w-100">View Deal</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default CardContenar