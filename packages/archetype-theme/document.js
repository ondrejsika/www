import Document, { Html, Head, Main, NextScript } from "next/document";

class ArchetypeThemeDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <div className="container">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ArchetypeThemeDocument;
