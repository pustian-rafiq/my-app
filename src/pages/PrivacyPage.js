import React, { Component,Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import PrivacySection from '../components/PrivacyDeacription/PrivacySection';

export default class PrivacyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy & Policy"/>
                <PageTop pageTitle="Privacy & Policy" />
                <PrivacySection/>
                <Footer/>
            </Fragment>
        )
    }
}
