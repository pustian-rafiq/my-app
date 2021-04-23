import React, { Component,Fragment } from 'react';
import {Container,Row,Col } from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class TermSection extends Component {
    constructor(){
        super();
        this.state = {
            
            termDescription:"...."
        }
    }

    componentDidMount(){
        

        RestClient.GetRequest(AppUrl.FooterInformation).then(result =>{
            this.setState({termDescription: result[0]['term']});
        });
    }
    render() {
        return (
            <Fragment>
            <Container className="mt-5" >
                   <Row>
                          <Col lg={12} md={12} sm={12}>
                          { ReactHtmlParser(this.state.termDescription) } 
                            
                              
                          </Col>

                      </Row>
           </Container>
      </Fragment>
        );
    }
}

export default TermSection;