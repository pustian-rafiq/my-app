import React, { Component,Fragment } from 'react';
import {Container,Row,Col } from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader';
class AboutDescription extends Component {
    constructor(){
        super();
        this.state = {
            
            aboutDescription:"",
            loading:true
        }
    }

    componentDidMount(){
        

        RestClient.GetRequest(AppUrl.FooterInformation).then(result =>{
            this.setState({aboutDescription: result[0]['about'],loading:false});
        });
    }
    render() {
        if(this.state.loading===false){
            return <Loader/>
        }else{
        return (
            <Fragment>
                  <Container className="mt-5" >
                         <Row>
                                <Col lg={12} md={12} sm={12}>
            
                                { ReactHtmlParser(this.state.aboutDescription) } 
                                   
                                    
                                </Col>

                            </Row>
                 </Container>
            </Fragment>
        );
        }
    }
}

export default AboutDescription;