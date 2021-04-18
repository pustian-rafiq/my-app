import React, { Component,Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import TermSection from '../components/TermDescription/TermSection';

export default class TermPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Conditions"/>
                <PageTop pageTitle="Terms & Conditions" />
                <TermSection/>
                <Footer/>
            </Fragment>
        )
    }
}
