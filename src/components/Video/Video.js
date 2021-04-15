import React, { Component,Fragment } from 'react';
import  { Container,Row,Col,Modal,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css'; 
import {Player, BigPlayButton} from 'video-react'
class Video extends Component {

    constructor(){
        super();
        this.state={
            show: false
        }
    }

    showModal = ()=>{
        this.setState({show: true});
    }
    closeModal = ()=>{
        this.setState({show: false});
    }

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12}  className="videoCard">
                            <div>
                                <p className="videoTitle">How I Do</p>
                                <p  className="videoDescription"> Some quick example text to build on the card title and make up the bulk of
                                    the card's content. Some quick example text to build on the card title and make up the bulk of
                                    the card's content. Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
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
                       <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                       <BigPlayButton position="center" />
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
    }
}

export default Video;