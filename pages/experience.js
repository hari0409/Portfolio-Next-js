import React from 'react'
import Footer from "../Components/Footer/Footer";
import Head from 'next/head';
import Exp from '../Components/Experience/Exp';

const Experience = () => {
    return (
        <>
            <Head>
                <title>Hari Baskar-Webdev & Deep Learning</title>
                <meta name="description" content="Hari Baskar Webdev Tensorflow Deeplearning FullStack Frontend Backend" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Exp/>
            <Footer/>
        </>
    )
}

export default Experience
