import React, { Component,Fragment } from 'react'
 
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';

export default class CourseDetailsPage extends Component {
        constructor({match}){
            super();
            this.state={
                myCoursePassedID: match.params.courseID,
                CourseData:[]
            }
        }

        // This is used for loadin any page from the top when we click the page
        componentDidMount(){
            window.scroll(0,0);

            RestClient.GetRequest(AppUrl.CourseDetails+this.state.myCoursePassedID).then(result =>{
                this.setState({CourseData:result});
            })
        }
    render() {
       
        return (
        <Fragment>
            <TopNavigation title="Course Details"/>
            <CourseDetails courseData={this.state.CourseData}/>
            <Footer/>
        </Fragment>
        )
    }
}
