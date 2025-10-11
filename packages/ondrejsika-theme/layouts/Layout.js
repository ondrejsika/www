import Head from "next/head";
import * as Sentry from "@sentry/browser";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import DevelopmentBar from "@app/common/components/DevelopmentBar";
import DevelopmentBarFooter from "@app/common/components/DevelopmentBarFooter";
import BootstrapJS from "@app/common/components/BootstrapJS";
import GoogleTagManager from "@app/common/google_tag_manager/GoogleTagManager";
import { createGlobalStyle } from "styled-components";
import { init as gtm_init } from "@app/common/google_tag_manager/lib";

// Imported CSS
import "@app/ondrej-sika.cz/css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #1e293b;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    font-weight: 300;
    font-size: 1.05rem;
    margin-bottom: 1.25rem;
    letter-spacing: 0.01em;
  }

  a {
    font-weight: 400;
    transition: all 0.2s ease-in-out;
  }

  li {
    font-weight: 300;
    margin-bottom: 0.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

let Layout = (props) => {
  if (props.site.gtm_id) gtm_init(props.site.gtm_id);

  if (props.site.sentry_dsn)
    Sentry.init({
      dsn: props.site.sentry_dsn,
    });
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
        {props.site.gtm_id && <GoogleTagManager gtm_id={props.site.gtm_id} />}
      </Head>
      <GlobalStyle />
      <DevelopmentBar />
      <div id="home" />
      {props.LanguageSwitch}
      {!(props.meta && props.meta.noNavbar) && props.Navbar}
      <div className="content">{props.children}</div>
      {!(props.meta && props.meta.noFooter) && props.Footer}
      <BootstrapJS />
      <Gauges gauges_site_id={props.site.gauges_site_id} />
      <GoogleAnalytics
        google_analytics_site_id={props.site.google_analytics_site_id}
      />
      <DevelopmentBarFooter />
    </div>
  );
};

export default Layout;
