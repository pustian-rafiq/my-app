import React, { Component,Fragment } from 'react'
import  { Container,Row,Col } from 'react-bootstrap'
// import courseImg from '../../asset/images/courseimg3.jpg'
import {Link} from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

export default class Courses extends Component {

    constructor(){
        super();
        this.state ={
            courseData: [],
            loading:true,
            error:false
        }
    }
        componentDidMount(){
            RestClient.GetRequest(AppUrl.HomeCourse).then(result =>{
                if(result==null){
                    this.setState({error:true, loading:false});
                }else{
                this.setState({courseData: result,loading:false});
                }
            }).catch(error=>{
                this.setState({error:true, loading:false});
            })
        }


    render() {
        if(this.state.loading===true && this.state.error===false){
            return <Loader/>
        }else if(this.state.loading===false && this.state.error===false){
            const myList = this.state.courseData;
            const courseDataView = myList.map(myList=>{
    
                return  <Col lg={6} md={12} sm={12}  className="p-2">
                            <Row  className="p-3">
                                <Col lg={6} md={6} sm={12}  className="p-2">
                                    <img className="courseImg" src={myList.small_img} alt="Course Logo" />
                                
                                </Col>
                                <Col lg={6} md={6} sm={12}  className="p-2">
                                <h4 className="text-justify courseTitle">{myList.short_title}</h4>
                                <p className="text-justify courseDescription">{myList.short_des}</p>
                                <Link className="float-left courseDetails" to={"/course-details/"+myList.id} >Details</Link>
                                </Col>
                            </Row>

                        </Col>


            });

            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">OUR COURSES</h1>
                        <Row>
                        {courseDataView}
                            
                        </Row>
                        

                    </Container>
                    
                </Fragment>
            );
        }else if(this.state.error===true){
            return <Error/>
        }  
    }
}
