import React, { Component,Fragment } from 'react'
 
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import AllCourses from '../components/AllCourses/AllCourses';
export default class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="ALl Courses" />
                <AllCourses/>
                <Footer/>
        </Fragment>
        )
    }
}
