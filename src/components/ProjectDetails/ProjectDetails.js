import React, { Component,Fragment } from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import laptop from '../../asset/images/laptop.png'
import {Link} from 'react-router-dom'

export default class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={laptop} alt="laptop"/>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Asus Laptop</h1>
                            <p>This is the  best laptop in the market</p>
                            <ul>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                                <li>This is the  best laptop in the market</li>
                            </ul>
                            <Button variant="primary"><Link className="link-style"  to="/project-details">Details</Link></Button>
                        </Col>
                    </Row>
                    
                </Container>
                
            </Fragment>
        )
    }
}
