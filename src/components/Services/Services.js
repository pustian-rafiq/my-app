import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import development from '../../asset/images/development.png'
import mobile from '../../asset/images/mobile.png'
import graphicslogo from '../../asset/images/graphicslogo.png'
 
class Serivces extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={development} alt="web logo"/> 
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.</p>
                            </div>
                        </Col>
                         <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobile} alt="mobile logo"/> 
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.</p>
                            </div>
                        </Col>
                         <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphicslogo} alt="graphics logo"/> 
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.</p>
                            </div>
                        </Col>

                    </Row>

                </Container>
                
            </Fragment>
        )
    }
}

export default Serivces

