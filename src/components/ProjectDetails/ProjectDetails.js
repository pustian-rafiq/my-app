import React, { Component,Fragment } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import laptop from '../../asset/images/laptop.png'

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
                        
                        </Col>
                    </Row>
                    
                </Container>
                
            </Fragment>
        )
    }
}
