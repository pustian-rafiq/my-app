import React, { Component,Fragment } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container,Row,Col } from 'react-bootstrap'
// import rafiq from '../../asset/images/rafiq.jpg'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

export default class ClientReview extends Component {

  constructor(){
    super();
    this.state ={
      clientData: []
    }
}
    componentDidMount(){
        RestClient.GetRequest(AppUrl.ClientReview).then(result =>{
            this.setState({clientData: result});
        })
    }

    render() {

      
      const myList = this.state.clientData;
      const clientDataView = myList.map(myList=>{

           return   <div>
                      <Row  className="text-center justify-content-center">
                          <Col lg={6} md={6} sm={12}>
                              <img className="clientImg" src={myList.client_img} alt="Client Logo"/>
                              <h1  className="serviceName">{myList.client_title}</h1>
                              <p className="serviceDescription text-center">{myList.client_description}</p>
                          </Col>

                      </Row>
                  </div>
       });

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
                       {clientDataView}
                       
                    </Slider>
                </Container>    
            </Fragment>
        )
    }
}
