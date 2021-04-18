import React, { Component,Fragment } from 'react'
import  { Container,Row,Col,Card,Button } from 'react-bootstrap'
import laptop from '../../asset/images/laptop.png'
import {Link} from 'react-router-dom'

export default class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={laptop} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                                </Card.Body>
                             </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                              <Card.Img variant="top" src={laptop} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style"  to="/project-details">Details</Link></Button>
                                </Card.Body>
                             </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                               <Card.Img variant="top" src={laptop} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                                </Card.Body>
                             </Card>
                        </Col>

                    </Row>
                    
                </Container>
            </Fragment>
        )
    }
}

