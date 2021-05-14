import Head from 'next/head'
import Header from '../components/Header'
import Meetups from '../components/Meetups';
import Socials from '../components/Socials';
import InfoSection from '../components/InfoSection';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
export default function Home() {
  return (
   <>
    <Head>
      <title>Hashicorp</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Komunita lidí a firem co používají Terraform, Vault, Consul, Packer, ..." />
    </Head>
   <Header />
   <Socials />
   <Meetups />
   <InfoSection />
   <Sponsors />
   <Footer/>
   </>
  )
}
