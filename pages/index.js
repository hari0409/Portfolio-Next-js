import Head from 'next/head'
import Footer from '../Components/Footer/Footer';
import Intro from '../Components/Intro/Intro';
import Latest from '../Components/Latest/Latest';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hari Baskar-Webdev & Deep Learning</title>
        <meta name="description" content="Hari Baskar Webdev Tensorflow Deeplearning FullStack Frontend Backend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Intro/>
        <Latest/>
        <Footer/>
      </main>
    </div>
  )
}
