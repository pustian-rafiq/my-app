import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import development from '../../asset/images/development.png'
// import mobile from '../../asset/images/mobile.png'
// import graphicslogo from '../../asset/images/graphicslogo.png'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Error from '../Error/Error';

class Serivces extends Component {

    constructor(){
        super();
        this.state ={
            servicesData: [],
            error:false
            
           
        }
    }
        componentDidMount(){
            RestClient.GetRequest(AppUrl.ServicesData).then(result =>{
                if(result==null){
                    this.setState({error:true });
                }else{
                this.setState({servicesData: result});
                }
            }).catch(error=>{
                this.setState({error:true });
            })
        }

    render() {
        if(this.state.error===true){
            return <Error/>
        }else{
        const myList = this.state.servicesData;
        const servicesDataView = myList.map(myList=>{

                return <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center">
                                    <img src={development} alt="web logo"/> 
                                    <h2 className="serviceName">{myList.service_name}</h2>
                                    <p className="serviceDescription">{myList.service_description}</p>
                                </div>
                            </Col>
            })
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">MY SERVICES</h1>
                        <Row>
                        
                        {servicesDataView}

                        </Row>

                    </Container>
                    
                </Fragment>
            );
        }
         
    }
}

export default Serivces

