import React, { Component,Fragment } from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import ContactSection from '../components/ContactSection/ContactSection';
import Services from '../components/Services/Services';
 
 
class ServicePage extends Component {
    // This is used for loadin any page from the top when we click the page
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services" />
                <PageTop pageTitle="My Services" />
                <Services/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;