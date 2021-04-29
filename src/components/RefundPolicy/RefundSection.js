import React, { Component,Fragment } from 'react';
import {Container,Row,Col } from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

export default class RefundSection extends Component {
    constructor(){
        super();
        this.state = {
            
            refundDescription:"",
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        
        RestClient.GetRequest(AppUrl.FooterInformation).then(result =>{
            if(result==null){
                this.setState({error:true, loading:false});
            }else{
            this.setState({refundDescription: result[0]['refund'], loading:false});
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
        );
    }else if(this.state.error===true){
        return <Error/>
    }
    }
}
