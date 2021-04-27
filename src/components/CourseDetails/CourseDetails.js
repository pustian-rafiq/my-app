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
    import ReactHtmlParser from 'react-html-parser';
export default class CourseDetails extends Component {

    constructor(props){
        super(props);
       
    }

    render() {
        let long_title ="";
        let long_des ="";
        let short_desc ="";
        let total_lecture ="";
        let total_student ="";
        let skill_all ="";
        let course_link ="";
        let video_url="";

        let CourseDetailsArray = this.props.courseData;
        if(CourseDetailsArray.length===1){
            long_title=CourseDetailsArray[0]['long_title'];
            long_des=CourseDetailsArray[0]['long_des'];
            total_lecture=CourseDetailsArray[0]['total_lecture'];
            total_student=CourseDetailsArray[0]['total_student'];
            skill_all=CourseDetailsArray[0]['skill_all'];
            course_link=CourseDetailsArray[0]['course_link'];
            video_url=CourseDetailsArray[0]['video_url'];
            long_title=CourseDetailsArray[0]['long_title'];
        }
        return (
        <Fragment>
            <Container fluid={true} className ="topFixedPage p-0">
                <div className="topPageOverly">
                    <Container className="topPageContentCourse">
                        <Row>
                        <Col lg={6} md={6} sm={12}>
                                 <h3 className="courseFullTitle">{long_title}</h3>
                                 <h5 className="courseSubTitle">Total Lecture:{total_lecture}</h5>
                                 <h5 className="courseSubTitle">Total Students:{total_student}</h5>
                             
                             </Col>

                             <Col lg={6} md={6} sm={12}>
                                 <p className="courseDeatilsDes">{long_des}</p>
                             
                             </Col>

                        </Row>
                    </Container>
                </div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Skill You Get</h1>
                        {/* <ul>
                            <li className="serviceDescription">Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                            <li  className="serviceDescription" >Some quick example text to build on the card title.</li>
                        </ul> */}
                          { ReactHtmlParser(skill_all) } 
                        <Button variant="primary">More Info</Button>


                    </Col>

                    <Col lg={6} md={6} sm={12}>
                    <Player>
                        {/* "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" */}
                       <source src= {video_url}/>
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
