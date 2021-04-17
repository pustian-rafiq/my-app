import React, { Component,Fragment } from 'react';
import { Col,Container,Row,Form,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Quick Connect</h1>
                           <Form>

                               <Form.Group>
                                    <Form.Label  className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label  className="serviceDescription">Email address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label  className="serviceDescription">Message</Form.Label>
                                    <Form.Control  as="textarea" rows={3} />
                                </Form.Group>

                                
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                             <p  className="serviceDescription">Mirpur-12, DhaKa</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> rafiqul.pust.cse@gmail.com</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> +880 1991166550</p>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default ContactSection;