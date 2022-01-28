import React from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/common/Header'
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial';
import CredExperience from '../components/CredExperience';
import CredSecurity from '../components/CredSecurity';
import BrandsLove from '../components/BrandsLove';
import WindpowPeak from '../components/WindowPeak';
import MobileScroll from '../components/MobileScroll';
import CredStory from '../components/CredStory';
import AppRating from '../components/AppRating';
import Footer from '../components/common/Footer';

function HomePage() {
    return <>
        <Header />
        <HeroSection />
        <ProductShowcase />
        <FeelSpecial />
        <MobileScroll />
        <BrandsLove />
        <CredExperience />
        <div className="non-mobile">
            <WindpowPeak />
        </div>
        <CredSecurity />
        <CredStory />
        <AppRating />
        <Footer />
    </>;
}

export default HomePage;
