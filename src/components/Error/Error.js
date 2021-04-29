import React, { Component,Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import warning from '../../asset/images/warning.svg'
 


export default class Error extends Component {
    
    render() {
        return (
            <Fragment>
                <Container  className="text-center">
                    <Row>
            
                        <Col>
                           <img className="loadAnimation" src={warning} alt="Loading Animation" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
