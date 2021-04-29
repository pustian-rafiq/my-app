import React, { Component,Fragment } from 'react';
import {Container,Row,Col } from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
class AboutDescription extends Component {
    constructor(){
        super();
        this.state = {
            
            aboutDescription:"",
            loading:true,
            error:false
        }
    }

    componentDidMount(){
     
        RestClient.GetRequest(AppUrl.FooterInformation).then(result =>{
               
        if(result==null){
            this.setState({error:true, loading:false});
        }else{
            this.setState({aboutDescription: result[0]['about'],loading:false});
        }
 
        }).catch(error=>{
            this.setState({error:true, loading:false});
        })
    }
    render() {
        if(this.state.loading===true && this.state.error===false){
            return <Loader/>
        }else if(this.state.loading===false && this.state.error===false){
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
        }else if(this.state.error===true){
            return <Error/>
        }
    }
}

export default AboutDescription;