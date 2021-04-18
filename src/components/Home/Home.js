import React from 'react'
import ExtraSection from '../ExtraSection/ExtraSection'
import Repair from '../Repair/Repair'
import ServiceInfo from '../Service/ServiceInfo'
import FooterInfo from '../Shared/Footer/FooterInfo'
import TestimonialInfo from '../Testimonial/TestimonialInfo'
import HeaderMain from './HeaderMain/HeaderMain'

const Home = () => {
    return (
        <div className="homebackground">
            <HeaderMain/>
            <ServiceInfo />
            <Repair/>
            <ExtraSection/>
            <TestimonialInfo/>
            <FooterInfo/>
        </div>
    )
}

export default Home
