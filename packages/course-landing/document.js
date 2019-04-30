import Document, { Html, Head, Main, NextScript } from 'next/document';

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
        </body>
      </Html>
    );
  }
}

export default CourseLandingDocument
