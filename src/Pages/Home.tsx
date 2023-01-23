import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Article from '../Components/Article/Article';
import Carousel from '../Components/Carousel/Carousel';
import CtaSection from '../Components/CtaSection/CtaSection';
import Footer from '../Components/Footer/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Article />
                <Carousel />
                <CtaSection />
            </main>
            <Footer />
        </>
    )
}
