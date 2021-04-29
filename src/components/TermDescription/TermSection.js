import React, { Component,Fragment } from 'react';
import {Container,Row,Col } from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

class TermSection extends Component {
    constructor(){
        super();
        this.state = {
            
            termDescription:"",
            loading:true,
            error:false
        }
    }

    componentDidMount(){
           RestClient.GetRequest(AppUrl.FooterInformation).then(result =>{
            if(result==null){
                this.setState({error:true, loading:false});
            }else{
            this.setState({termDescription: result[0]['term'], loading:false});
            }
        }).catch(error=>{
            this.setState({error:true, loading:false});
        })
    }
    render() {
        if(this.state.loading===true){
            return <Loader/>
        }else if(this.state.loading===false){
            return (
                <Fragment>
                <Container className="mt-5" >
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            { ReactHtmlParser(this.state.termDescription) } 
                                   
                            import Error from '../Error/Error';</Col>

                        </Row>
            </Container>
        </Fragment>
            );
        }else if(this.state.error===true){
            return <Error/>
        }
    }
}

export default TermSection;