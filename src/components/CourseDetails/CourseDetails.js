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
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loader from '../Loader/Loader';

export default class CourseDetails extends Component {
    constructor(props){
        super();
        this.state={
             myCoursePassedID:props.id,
             long_title: "",
             long_des: "",
             short_desc: "",
             total_lecture: "",
             total_student: "",
             skill_all: "",
             course_link: "",
             video_url: "",
             loading:true
          
        }
    }


    componentDidMount(){
      
        RestClient.GetRequest(AppUrl.CourseDetails+this.state.myCoursePassedID).then(result =>{
            this.setState({
                long_title: result[0]['long_title'],
                long_des: result[0]['long_des'],
                total_lecture: result[0]['total_lecture'],
                total_student: result[0]['total_student'],
                skill_all: result[0]['skill_all'],
                course_link: result[0]['course_link'],
                video_url: result[0]['video_url'],
                short_desc: result[0]['short_desc'],
                loading:false
            });
        })
    }

    render() {
        if(this.state.loading===true){
            return <Loader/>
        }else{
            return (
            <Fragment>
                <Container fluid={true} className ="topFixedPage p-0">
                    <div className="topPageOverly">
                        <Container className="topPageContentCourse">
                            <Row>
                            <Col lg={6} md={6} sm={12}>
                                    <h3 className="courseFullTitle">{this.state.long_title}</h3>
                                    <h5 className="courseSubTitle">Total Lecture:{this.state.total_lecture}</h5>
                                    <h5 className="courseSubTitle">Total Students:{this.state.total_student}</h5>
                                
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <p className="courseDeatilsDes">{this.state.long_des}</p>
                                
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
                            { ReactHtmlParser(this.state.skill_all) } 
                            <Button target="_blank" href={"//"+this.state.course_link} variant="primary">More Info</Button>


                        </Col>

                        <Col lg={6} md={6} sm={12}>
                        <Player>
                            {/* "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" */}
                        <source src="https://www.youtube.com/watch?v=668nUCeBHyY"/>
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
            );
        } 
    }
}
