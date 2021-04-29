import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

export default class TopBanner extends Component {
constructor(){
    super();
    this.state ={
        title:"",
        subtitle:"",
        loaderClass:"text-center",
        mainDivClass:"d-none",
        errorClass:"d-none"
    }
}
    componentDidMount(){
        RestClient.GetRequest(AppUrl.TitleSubTitle).then(result =>{
            if(result==null){
                this.setState({loaderClass:"d-none",mainDivClass:"d-none",errorClass:"text-center"});
            }else{
            this.setState({title: result[0]['home_title'],subtitle:result[0]['home_subtitle'],loaderClass:"d-none",mainDivClass:"text-center"});
            }
        }).catch(error=>{
            this.setState({loaderClass:"d-none",mainDivClass:"d-none",errorClass:"text-center"});
        })
    }

    render() {
       
        return (
            <Fragment>
                <Container fluid={true} className ="topFixedBanner p-0">
                    <div className="topBannerOverly">
                        <Container className="topContent">
                            <Row>
                                {/* Error handling for API failure */}
                            <Col className={this.state.errorClass}>
                                    
                                    <Error/>
                            </Col>
                            {/* Load animation until the data is loading */}
                            {/* <span className={this.state.loaderClass}> <Loader/> </span> */}
                                <Col className={this.state.loaderClass}>
                                   
                                    <Loader/>  
                                </Col>
                         {/* This section shows the result */}
                                <Col className={this.state.mainDivClass}>
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
   
    }
}
