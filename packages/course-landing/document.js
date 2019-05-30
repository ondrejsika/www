import Document, { Html, Head, Main, NextScript } from 'next/document';
import Gauges from '@app/common/components/Gauges';
import GoogleAnalytics from '@app/common/components/GoogleAnalytics';

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

class CourseLandingDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <DevelopmentBar />
          <Main />
          <NextScript />
          <Gauges gauges_site_id={this.props.site.gauges_site_id} />
          <GoogleAnalytics google_analytics_site_id={this.props.site.google_analytics_site_id} />

        </body>
      </Html>
    );
  }
}

export default CourseLandingDocument
