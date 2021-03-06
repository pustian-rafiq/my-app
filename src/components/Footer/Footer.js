import React, { Component,Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


export default class Footer extends Component {
    constructor(){
        super();
        this.state = {
            
            address:"",
            email:"",
            phone:"",
            facebook:"",
            youtube:"",
            footer_credit:"",
            loaderClass:"text-center",
            mainDivClass:"d-none",
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
                facebook: result[0]['facebook'],
                youtube: result[0]['youtube'],
                footer_credit: result[0]['footer_credit'],
                loaderClass:"d-none",
                mainDivClass:"p-4  text-justify"
            });
        }
        }).catch(error=>{
            this.setState({error:true, loading:false});
        })
    }
    render() {
        if(this.state.error===true){

           return <Error/>
            
        }else if(this.state.error===false){
        return (
        <Fragment>
            <Container fluid={true} className="text-center footerSection">
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-4  text-justify">
                           <h1 className="serviceName">Follow Me</h1>
                           <a className="socialLink" rel="noreferrer noopener" target="_blank"  href={"//"+this.state.facebook}><FontAwesomeIcon   icon={faFacebook} /> Facebook</a><br/>
                           <a className="socialLink" rel="noreferrer noopener" target="_blank" href={"//"+this.state.youtube}><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
                        </Col>
                            
            {/* Load animation start here */}
                        <Col lg={3} md={6} sm={12} className={this.state.loaderClass}>
                             <h1 className="serviceName">Address</h1>
                             <Loader/>
                              
                        </Col>

                        <Col lg={3} md={6} sm={12}  className={this.state.mainDivClass}>
                             <h1 className="serviceName">Address</h1>
                             <p  className="serviceDescription">{this.state.address}</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</p>
                        </Col>
              {/* Load animation end here */}
                        <Col lg={3} md={6} sm={12} className="p-4  text-justify">
                        <h1 className="serviceName">Location</h1>
                           <Link className="footerLink" to="/about">About Me</Link><br/>
                           <Link className="footerLink" to="/portfolio">My Resume</Link><br/>
                           <Link className="footerLink" to="/contact">Contact</Link>
                           
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-4 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/terms">Terms And Condition</Link><br/>
                            <Link className="footerLink" to="/privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
             </Container>  

                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRigtLink" href="#1">{this.state.footer_credit}</a>
                </Container>
        </Fragment>
        );
    }
    }
}
