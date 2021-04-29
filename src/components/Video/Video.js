import React, { Component,Fragment } from 'react';
import  { Container,Row,Col,Modal,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css'; 
import {Player, BigPlayButton,ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton} from 'video-react'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';  
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
class Video extends Component {

    constructor(){
        super();
        this.state={
            show: false,
            videoDescription:"",
            videoUrl:"",
            loading:true,
            error:false
        }
    }

    showModal = ()=>{
        this.setState({show: true});
    }
    closeModal = ()=>{
        this.setState({show: false});
    }
    
    componentDidMount(){
        

        RestClient.GetRequest(AppUrl.HomeVideo).then(result =>{
            if(result==null){
                this.setState({error:true, loading:false});
            }else{
            this.setState({videoDescription: result[0]['video_description'],videoUrl:result[0]['video_url'],loading:false});
            }
        });
    }

    render() {
        if(this.state.loading===true && this.state.error===false){
            return <Loader/>
        }else if(this.state.loading===false && this.state.error===false){
            return (
                <Fragment>
                    <Container className="text-center">
                        <Row>
                            <Col lg={12} md={12} sm={12}  className="videoCard">
                                <div>
                                    <p className="videoTitle">How I Do</p>
                                    <p  className="videoDescription">  { ReactHtmlParser(this.state.videoDescription) }   </p>
                                    <p><FontAwesomeIcon className="playBtn" onClick={this.showModal} icon={faPlayCircle} /></p>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                    

                    {/* Open modal for video play */}
                    <Modal  size="lg" show={this.state.show} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Player>
                        <source src=  { ReactHtmlParser(this.state.videoUrl) }  />
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
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={this.closeModal}>
                            Close
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            );
        }else if(this.state.error===true){
            return <Error/>
        }    
    }
}

export default Video;