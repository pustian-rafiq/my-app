import React, { Component,Fragment } from 'react';
import { Col,Container,Row,Form,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

class ContactSection extends Component {
    constructor(){
        super();
        this.state = {
            
            address:"",
            email:"",
            phone:"",
            loading:true,
            error:false
            
        }
    }

    componentDidMount(){
        

        RestClient.GetRequest(AppUrl.FooterData).then(result =>{
            if(result==null){
                this.setState({error:true, loading:false});
            }else{
            this.setState({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
                loading:false
            });
        }
        }).catch(error=>{
            this.setState({error:true, loading:false});
        })
    }
    sendContact(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let msg = document.getElementById("msg").value;

        let jsonObjectData = {name:name,email:email,msg:msg};
        RestClient.PostRequest(AppUrl.AddContactData,jsonObjectData).then(result =>{
            alert(result);
        }).catch(error =>{
            alert("Error");
        })
    }
    render() {
        if(this.state.loading===true && this.state.error===false){
            return <Loader/>
        }else if(this.state.loading===false && this.state.error===false){ 
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Quick Connect</h1>
                           <Form>

                               <Form.Group>
                                    <Form.Label  className="serviceDescription">Name</Form.Label>
                                    <Form.Control id="name" type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label  className="serviceDescription">Email address</Form.Label>
                                    <Form.Control id="email" type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label  className="serviceDescription">Message</Form.Label>
                                    <Form.Control id="msg"  as="textarea" rows={3} />
                                </Form.Group> 
                                <Button onClick={this.sendContact} variant="primary">Submit</Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                             <p className="serviceDescription">{this.state.address}</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} />{this.state.email}</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</p>
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

export default ContactSection;