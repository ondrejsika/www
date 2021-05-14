import Head from 'next/head'
import Header from '../components/Header';
import Socials from '../components/Socials';
import Meetups from '../components/Meetups';
import InfoSection from '../components/InfoSection';
import Sponsors from '../components/Sponsors';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import { useEffect, useState } from 'react';

export default function Home() {

  const [showPopup, SetshowPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SetshowPopup(true);
    }, 20000);
  },[])


  return (
    <>
      <Head>
        <title>Devopsáci</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Česká komunita lidí z DevOps" />
      </Head>
    <Header />
    <Socials />
    <Meetups />
    <InfoSection />
    <Sponsors />
    <Footer />
    <Copyright />
    {showPopup === true ? <Popup SetshowPopup={SetshowPopup} /> : null}
    </>
  )
}
