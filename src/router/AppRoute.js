import React, { Component,Fragment } from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'
import CoursesPage from '../pages/CoursesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import RefundPolicy from '../pages/RefundPolicy';
import TermPage from '../pages/TermPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';


export default class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund" component={RefundPolicy}/>
                    <Route exact path="/terms" component={TermPage}/>
                    <Route exact path="/privacy" component={PrivacyPage}/>
                    <Route exact path="/project-details/:projectID/:projectName" component={ProjectDetailsPage}/>
                    <Route exact path="/course-details/:courseID" component={CourseDetailsPage}/>

                </Switch>
                
            </Fragment>
        )
    }
}
