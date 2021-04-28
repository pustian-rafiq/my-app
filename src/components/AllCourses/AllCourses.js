import React, { Component,Fragment } from 'react'
import  { Container,Row,Col } from 'react-bootstrap'
// import courseImg from '../../asset/images/courseimg3.jpg'
import {Link} from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loader from '../Loader/Loader';

export default class AllCourses extends Component {
    constructor(){
        super();
        this.state ={
            courseData: [],
            loading:true
        }
    }
        componentDidMount(){
            RestClient.GetRequest(AppUrl.AllCourse).then(result =>{
                this.setState({courseData: result,loading:false});
            })
        }


    render() {
        if(this.state.loading===true){
            return <Loader/>
        }else{
            const myList = this.state.courseData;
            const courseDataView = myList.map(myList=>{
 
             return  <Col lg={6} md={12} sm={12}  className="p-2">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src={myList.small_img} alt="Course Logo" />
                            
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h4 className="text-justify courseTitle">{myList.short_title}</h4>
                            <p className="text-justify courseDescription">{myList.short_des}</p>
                            <Link className="float-left courseDetails" to={"/course-details/"+myList.id} >Details</Link>
                            </Col>
                        </Row>

                    </Col>


         });
 
        return (
            <Fragment>
            <Container className="text-center mt-5">
          
               <Row>
                   {courseDataView}
               </Row>
               

           </Container>
           
       </Fragment>
        )
       }
        
    }
}
