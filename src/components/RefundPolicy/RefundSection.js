import React, { Component,Fragment } from 'react';
import {Container,Row,Col } from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
export default class RefundSection extends Component {
    constructor(){
        super();
        this.state = {
            
            refundDescription:"...."
        }
    }

    componentDidMount(){
        

        RestClient.GetRequest(AppUrl.FooterInformation).then(result =>{
            this.setState({refundDescription: result[0]['refund']});
        });
    }
    render() {
        return (
            <Fragment>
                  <Container className="mt-5" >
                         <Row>
                                <Col lg={12} md={12} sm={12}>
                                    {/* <ul>
                                        <li>Some quick example text to build on the card title</li>
                                        <li>Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title.</li>
                                        <li>Some quick example text to build on the card title.Some quick example text to build on the card title</li>
                                        <li>Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card title</li>
                                        <li>Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card titleSome quick example text to build on the card titleSome quick example text to build on the card titleSome quick example text to build on the card titleSome quick example text to build on the card title</li>
                                        <li>Some quick example text to build on the card title</li>
                                    </ul> */}
                                     { ReactHtmlParser(this.state.refundDescription) } 
                                    
                                </Col>

                            </Row>
                 </Container>
            </Fragment>
        )
    }
}
