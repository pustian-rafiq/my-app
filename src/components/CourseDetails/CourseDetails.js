import React, { Component,Fragment } from 'react';
import {Container,Row,Col, Button } from "react-bootstrap";
import 'video-react/dist/video-react.css'; 
import {Player, BigPlayButton,ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton} from 'video-react'
export default class CourseDetails extends Component {
    render() {
        return (
        <Fragment>
            <Container fluid={true} className ="topFixedPage p-0">
                <div className="topPageOverly">
                    <Container className="topPageContentCourse">
                        <Row>
                        <Col lg={6} md={6} sm={12}>
                                 <h3 className="courseFullTitle">Full dynamic Website with admin panel</h3>
                                 <h5 className="courseSubTitle">Total Lectures=30</h5>
                                 <h5 className="courseSubTitle">Total Students=30</h5>
                             
                             </Col>

                             <Col lg={6} md={6} sm={12}>
                                 <p className="courseDeatilsDes">Some quick example text to build on the card title.Some quick example text to build on the card title.Some quick example text to build on the card titleSome quick example text to build on the card titleSome quick example text to build on the card titleSome quick example text to build on the card title</p>
                             
                             </Col>

                        </Row>
                    </Container>
                </div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Skill You Get</h1>
                        <ul>
                            <li className="serviceDescription">Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                        </ul>
                        <Button variant="primary">More Info</Button>


                    </Col>

                    <Col lg={6} md={6} sm={12}>
                    <Player>
                       <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                       <BigPlayButton position="center" />
                       <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                        <VolumeMenuButton disabled />
                    </ControlBar>
                    </Player>

                    </Col>

                </Row>
            </Container>
        </Fragment>
        )
    }
}
