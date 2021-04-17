import React, { Component,Fragment } from 'react';
import {Container,Row,Col } from "react-bootstrap";
class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                  <Container className="mt-5" >
                         <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <h1 className="serviceName">Who i AM</h1>
                                    <hr/> 
                                    <p className="serviceDescription">Some quick example text to build on the card title and make up the bulk of
                                    the card's content. Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>

                                    <h1 className="serviceName">My Mission</h1>
                                    <hr/> 
                                    <p className="serviceDescription">Some quick example text to build on the card title and make up the bulk of
                                    the card's content. Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>

                                    <h1 className="serviceName">My Vission</h1>
                                    <hr/> 
                                    <p className="serviceDescription">Some quick example text to build on the card title and make up the bulk of
                                    the card's content. Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                                    
                                </Col>

                            </Row>
                 </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;