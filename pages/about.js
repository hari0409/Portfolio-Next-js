import React from 'react'
import Footer from "../Components/Footer/Footer";
import Rough from '../Components/Rough/Rough';
import Info from '../Components/Info/Info';
import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>Hari Baskar-Webdev & Deep Learning</title>
                <meta name="description" content="Hari Baskar Webdev Tensorflow Deeplearning FullStack Frontend Backend" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Rough/>
            <Info/>
            <Footer/>
        </>
    )
}

export default About
