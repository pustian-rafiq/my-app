import React, { Component,Fragment } from 'react'
 
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import CourseDetails from '../components/CourseDetails/CourseDetails';

export default class CourseDetailsPage extends Component {
        // This is used for loadin any page from the top when we click the page
        componentDidMount(){
            window.scroll(0,0);
        }
    render() {
        return (
        <Fragment>
            <TopNavigation title="Course Details"/>
            <CourseDetails/>
            <Footer/>
        </Fragment>
        )
    }
}
