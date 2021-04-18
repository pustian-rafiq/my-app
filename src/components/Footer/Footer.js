import React, { Component,Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5  text-justify">
                           <h1 className="serviceMainTitle">Follow Me</h1>
                           <a className="socialLink"  href="#1"><FontAwesomeIcon   icon={faFacebook} /> Facebook</a><br/>
                           <a className="socialLink" href="#1"><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
                        </Col>
                            

                        <Col lg={3} md={6} sm={12} className="p-5  text-justify">
                             <h1 className="serviceMainTitle">Address</h1>
                             <p  className="serviceDescription">Mirpur-12, DhaKa</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> rafiqul.pust.cse@gmail.com</p>
                             <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> +880 1991166550</p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5  text-justify">
                        <h1 className="serviceMainTitle">Location</h1>
                           <a className="footerLink" href="#1">About Me</a><br/>
                           <a className="footerLink" href="#1">My Resume</a><br/>
                           <a className="footerLink" href="#1">Contact</a>
                           
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceMainTitle">Legal</h1>
                            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/terms">Terms And Condition</Link><br/>
                            <Link className="footerLink" to="privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRigtLink" href="#1">Rafiqul.com &copy; 2020-2021</a>
                </Container>
            </Fragment>
        )
    }
}
