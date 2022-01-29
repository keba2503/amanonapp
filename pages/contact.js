import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactFormContent from '../components/Contact/ContactFormContent';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Contact" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact" 
                    bgImgClass="item-bg3" 
                />  

                <ContactFormContent />
                
                <Footer/>
            </>
        );
    }
}

export default Contact;