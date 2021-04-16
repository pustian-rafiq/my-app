import React, { Component,Fragment } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container,Row,Col } from 'react-bootstrap'
import rafiq from '../../asset/images/rafiq.jpg'

export default class ClientReview extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed:3000,
            dots: true,
            infinite: false,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
     
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="clientImg" src={rafiq} alt="Client Logo"/>
                                    <h1  className="serviceName">Web Development</h1>
                                    <p className="serviceDescription text-center">Carousels don’t automatically normalize slide dimensions.Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.</p>
                                </Col>

                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="clientImg" src={rafiq} alt="Client Logo"/>
                                    <h1  className="serviceName">Web Development</h1>
                                    <p className="serviceDescription text-center">Carousels don’t automatically normalize slide dimensions.Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.</p>
                                </Col>

                            </Row>
                        </div>

                        <div>
                            <Row  className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="clientImg" src={rafiq} alt="Client Logo"/>
                                    <h1  className="serviceName">Web Development</h1>
                                    <p className="serviceDescription text-center">Carousels don’t automatically normalize slide dimensions.Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content.</p>
                                </Col>

                            </Row>
                        </div>
                    </Slider>
                </Container>    
            </Fragment>
        )
    }
}
