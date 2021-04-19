import React, { Component,Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
export default class AboutPage extends Component {
        // This is used for loadin any page from the top when we click the page
        componentDidMount(){
            window.scroll(0,0);
        }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pageTitle="About Me" />
                <AboutDescription/>
                <Footer/>
            </Fragment>
        )
    }
}
