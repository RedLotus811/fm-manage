import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Article from '../Components/Article/Article';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Article />
            </main>
        </>
    )
}
