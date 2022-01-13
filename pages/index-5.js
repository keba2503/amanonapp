import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeFive/MainBanner';
import MainServices from '../components/HomeFive/MainServices';
import WhyChooseUs from '../components/HomeFive/WhyChooseUs';
import ProfessionalSolutions from '../components/HomeFive/ProfessionalSolutions';
import CustomerFeedback from '../components/HomeFive/CustomerFeedback';
import Webinar from '../components/HomeFive/Webinar';
import PricingPlan from '../components/HomeFive/PricingPlan';
import Newsletter from '../components/HomeFive/Newsletter';
import PartnerSlider from '../components/HomeFive/PartnerSlider';
import Footer from '../components/Layouts/Footer';

class Index5 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <MainServices />
                <WhyChooseUs />
                <ProfessionalSolutions />
                <CustomerFeedback />
                <Webinar />
                <PricingPlan />
                <Newsletter />
                <PartnerSlider />
                <Footer />
            </>
        );
    }
}

export default Index5;