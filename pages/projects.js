import React from 'react';
import Footer from "../Components/Footer/Footer";
import MainProject from '../Components/MainProject/MainProject';
import Head from 'next/head';

const Project = () => {
    return (
        <>
            <Head>
                <title>Hari Baskar-Webdev & Deep Learning</title>
                <meta name="description" content="Hari Baskar Webdev Tensorflow Deeplearning FullStack Frontend Backend" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainProject/>
            <Footer/>
        </>
    )
}

export default Project
