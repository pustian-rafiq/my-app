import React, { Component,Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
export default class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="About Me" />
                <AboutDescription/>
                <Footer/>
            </Fragment>
        )
    }
}
