import React, { Component,Fragment } from 'react'
import  { Container,Row,Col } from 'react-bootstrap'
import courseImg from '../../asset/images/courseimg3.jpg'
import {Link} from 'react-router-dom'

export default class Courses extends Component {
    render() {
        return (
            <Fragment>
                 <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}  className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg} alt="Course Logo" />
                                
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                <h4 className="text-justify courseTitle">Web Development</h4>
                                <p className="text-justify courseDescription">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                <Link className="float-left courseDetails" to="/course-details" >Details</Link>
                                </Col>
                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12} className="mb-3 p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                   <img className="courseImg" src={courseImg} alt="Course Logo" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDescription">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                    <Link className="float-left courseDetails" to="/course-details" >Details</Link>
                                </Col>
                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12}  className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                   <img className="courseImg" src={courseImg} alt="Course Logo" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDescription">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                    <Link className="float-left courseDetails" to="/course-details" >Details</Link>
                                </Col>
                            </Row>

                        </Col>


                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                   <img className="courseImg" src={courseImg} alt="Course Logo" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDescription">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                    <Link className="float-left courseDetails" to="/course-details" >Details</Link>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    

                </Container>
                
            </Fragment>
        )
    }
}
