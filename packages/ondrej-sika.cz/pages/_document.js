import Document, { Html, Head, Main, NextScript } from 'next/document';
import Markdown from "@app/common/components/Markdown";
import Header from '@app/ondrej-sika.cz/components/Header'
import TextArea from '@app/ondrej-sika.cz/components/TextArea';
import TwoCol from '@app/ondrej-sika.cz/components/TwoCol';
import References from '@app/ondrej-sika.cz/components/References';
import Gauges from '@app/common/components/Gauges';
import GoogleAnalytics from '@app/common/components/GoogleAnalytics';

import Navbar from '@app/ondrej-sika.cz/components/Navbar';
import Footer from '@app/ondrej-sika.cz/components/Footer';
import BootstrapJS from '@app/common/components/BootstrapJS';

import site from '../config';

let DevelopmentBar = ()=> {
  if (process.env.NODE_ENV == 'development') {
    return (
      <div style={{
        backgroundColor: 'red',
        height: '0.2em'
      }}>
      </div>
    )
  }
  else {
    return <></>
  }
}

class OndrejSikaDocument extends Document {
  constructor(...args){
    super(...args)
    this.site = site
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans|Merriweather" rel="stylesheet"/>
        </Head>
        <body>
          <DevelopmentBar />
          <Navbar
            NavName='Ondřej Šika'
            NavUnderheader='Software {Engineer, Konzultant, Lektor}'
            links={[
              ['DOMŮ', '/'],
              ['KURZY', [
                ['GIT', '/skoleni/git'],
                ['GITLAB CI', '/skoleni/gitlab-ci'],
                ['DOCKER', '/skoleni/docker'],
                ['KUBERNETES', '/skoleni/kubernetes'],
                ['ANSIBLE', '/skoleni/ansible'],
              ]],
              ['TERMÍNY', '/verejne-terminy'],
              ['NÁVODY & ČLÁNKY', [
                ['BLOG', '/blog'],
                ['NÁVODY', '/navody'],
                ['ČLÁNKY', '/clanky'],
              ]],
              ['KONTAKT', '/kontakt'],
            ]}
          />
          <div className='content'>
          <Main />
          </div>
          <Footer
            col1_name='Ondřej Šika'
            col1_mail='ondrej@ondrejsika.com'
            col1_phone='+420 773 452 376'

            col4_NewsHeader='Zajímají Vás novinky?'
            col4_NewsText='Odebírejte můj newsletter a budete v obraze!'
            NewsletterBtn='Odebírat'
          ></Footer>
          <NextScript />
          <BootstrapJS />
          <Gauges gauges_site_id={this.site.gauges_site_id} />
          <GoogleAnalytics google_analytics_site_id={this.site.google_analytics_site_id} />
        </body>
      </Html>
    );
  }
}

export default OndrejSikaDocument
