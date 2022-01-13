import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeFour/MainBanner';
import About from '../components/HomeFour/About';
import Services from '../components/HomeFour/Services';
import Webinar from '../components/HomeFour/Webinar';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import BlogPost from '../components/Common/BlogPost';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class Index4 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <About />
                {/* <Services />
                <Webinar />
                <PartnerContent />
                <FeedbackSlider />
                <PricingCard />
                <BlogPost />
                <FreeTrialForm /> */}
                <Footer />
            </>
        );
    }
}

export default Index4;