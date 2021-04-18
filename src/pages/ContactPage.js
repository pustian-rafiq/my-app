import React, { Component,Fragment } from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import ContactSection from '../components/ContactSection/ContactSection';
class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact" />
                <PageTop pageTitle="Contact Me" />
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;