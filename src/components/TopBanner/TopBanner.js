import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loader from '../Loader/Loader';

export default class TopBanner extends Component {
constructor(){
    super();
    this.state ={
        title:"",
        subtitle:"",
        loaderClass:"text-center",
        mainDivClass:"d-none"
    }
}
    componentDidMount(){
        RestClient.GetRequest(AppUrl.TitleSubTitle).then(result =>{
            this.setState({title: result[0]['home_title'],subtitle:result[0]['home_subtitle'],loaderClass:"d-none",mainDivClass:"text-center"});
        })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className ="topFixedBanner p-0">
                    <div className="topBannerOverly">
                        <Container className="topContent">
                            <Row>
                                <Col className={this.state.loaderClass}>
                                    {/* Load animation until the data is loading */}
                                    {/* <span className={this.state.loaderClass}> <Loader/> </span> */}
                                    <Loader/>
                                    
                                </Col>
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
        )
    }
}
