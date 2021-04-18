import React, { Component,Fragment } from 'react';
import {Container,Row,Col } from "react-bootstrap";

export default class RefundSection extends Component {
    render() {
        return (
            <Fragment>
                  <Container className="mt-5" >
                         <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <ul>
                                        <li>Some quick example text to build on the card title</li>
                                        <li>Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.</li>
                                        <li>Some quick example text to build on the card title.Some quick example text to build on the card title</li>
                                        <li>Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title</li>
                                        <li>Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card titleSome quick example text to build on the card titleSome quick example text to build on the card titleSome quick example text to build on the card titleSome quick example text to build on the card title</li>
                                        <li>Some quick example text to build on the card title</li>
                                    </ul>
                                    
                                </Col>

                            </Row>
                 </Container>
            </Fragment>
        )
    }
}
