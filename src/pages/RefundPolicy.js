import React, { Component,Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import RefundSection from '../components/RefundPolicy/RefundSection';

class RefundPolicy extends Component {
        // This is used for loadin any page from the top when we click the page
        componentDidMount(){
            window.scroll(0,0);
        }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy"/>
                <PageTop pageTitle="Refund Policy" />
                <RefundSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPolicy;