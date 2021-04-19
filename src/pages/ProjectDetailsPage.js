import React, { Component,Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';

export default class ProjectDetailsPage extends Component {
        // This is used for loadin any page from the top when we click the page
        componentDidMount(){
            window.scroll(0,0);
        }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"/>
                <PageTop pageTitle="Project Details" />
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        )
    }
}
