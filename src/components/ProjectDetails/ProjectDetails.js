import React, { Component,Fragment } from 'react'
import { Container,Row,Col,Button,Card} from 'react-bootstrap'
//import laptop from '../../asset/images/laptop.png'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

export default class ProjectDetails extends Component {
    //Received id from parent componet-projectDetailsPage
    constructor(props){
        super();
        this.state={
            myProjectID: props.id,
            image_two:"",
            project_title:"",
            project_description:"",
            project_features:"",
            live_preview_url:"",
            loading:true,
            error:false

        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.myProjectID).then(result =>{
            if(result==null){
                this.setState({error:true,loading:false});
            }else{
            this.setState({
                image_two: result[0]['image_two'],
                project_title: result[0]['project_title'],
                project_description: result[0]['project_description'],
                project_features: result[0]['project_features'],
                live_preview_url: result[0]['live_preview_url'],
                loading:false
            });
        }
        }).catch(error=>{
            this.setState({error:true,loading:false});
        })
    }
    render() {
        if(this.state.loading===true && this.state.error===false){
            return <Loader/>
        }else if(this.state.loading===false && this.state.error===false){
            return (
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="mt-5" >
                    
                            <Card.Img variant="top" src={this.state.image_two} />
                            
                            </Col>
                        
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">{this.state.project_title}</h1>
                                <p className="serviceDescription">{this.state.project_description}</p>
                                { ReactHtmlParser(this.state.project_features) } 
                                <Button target="_blank" href={"//"+this.state.live_preview_url} variant="primary">Live Preview</Button>
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
