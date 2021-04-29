import React, { Component,Fragment } from 'react'
import  { Container,Row,Col,Card,Button } from 'react-bootstrap'
// import laptop from '../../asset/images/laptop.png'
import {Link} from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

export default class RecentProjects extends Component {

    constructor(){
        super();
        this.state ={
            projectsData: [],
            loading:true,
            error:false
        }
    }
        componentDidMount(){
            RestClient.GetRequest(AppUrl.HomeProject).then(result =>{
                if(result==null){
                    this.setState({error:true, loading:false});
                }else{
                this.setState({projectsData: result, loading:false});
                }
            }).catch(error=>{
                this.setState({error:true, loading:false});
            })
        }


    render() {
        if(this.state.loading===true && this.state.error===false){
            return <Loader/>
        }else if(this.state.loading===false && this.state.error===false){
            const myList = this.state.projectsData;
            const projectDataView = myList.map(myList=>{
    
                return <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={myList.image_one} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">{myList.project_title}</Card.Title>
                                    <Card.Text className="projectCardDescription">{myList.project_description} </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to={"/project-details/"+myList.id+"/"+myList.project_title}>Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

            });


            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                        <Row>
                            {projectDataView}
                            
                        </Row>
                        
                    </Container>
                </Fragment>
            );
        }else if(this.state.error===true){
            return <Error/>
        }  
    }
}

