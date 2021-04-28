import React, { Component,Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import loading from '../../asset/images/loadanimation.svg'
 


export default class Loader extends Component {
    
    render() {
        return (
            <Fragment>
                <Container  className="text-center">
                    <Row>
            
                        <Col>
                           <img className="loadAnimation" src={loading} alt="Loading Animation" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
