import React from "react";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";
import LandingPage from "@app/ondrejsika-theme/layouts/LandingPage";
import ContactSection from "@app/ondrejsika-singlepage/components/ContactSection";
import Head from "next/head";

// Imported CSS
import "@app/ondrej-sika.cz/css";

const Page = props => {
  const Navbar = (
    <ThemeNavbar
      NavName={props.site_header}
      NavUnderheader={props.site_sub_header}
      links={[
        ["HOME", "#home"],
        ["PUBLIC SESSIONS", "#upcomming"],
        ["CONTACT", "#contact"]
      ]}
    />
  );

  const Footer = (
    <ThemeFooter
      firstColumn={
        <ThemeFooter.Wrapper>
          <ThemeFooter.H4>Ondrej Sika</ThemeFooter.H4>
          <p>
            <ThemeFooter.A href="mailto:ondrej@sika.io">
              ondrej@sika.io
            </ThemeFooter.A>
            <br />
            <ThemeFooter.A href="tel:+420773452376">
              +420 773 452 376
            </ThemeFooter.A>
          </p>
          <p>
            <span style={{ fontSize: "0.7em" }}>Company ID</span>
            <br />
            88114163
          </p>
          <p>
            <span style={{ fontSize: "0.7em" }}>VAT ID</span>
            <br />
            CZ9302252102
          </p>
        </ThemeFooter.Wrapper>
      }
      secondColumn={
        <ThemeFooter.Wrapper>
          <ThemeFooter.H4>Follow me</ThemeFooter.H4>
          <ul>
            {[
              ["LinkedIn", "https://linkedin.com/in/ondrejsika"],
              ["Twitter", "https://linkedin.com/in/twitter"],
              ["Facebook", "https://facebook.com/sikaondrej"],
              ["Instagram", "https://instagram.com/ondrejsika"]
            ].map((el, i) => {
              return (
                <ThemeFooter.Li key={i}>
                  <ThemeFooter.A href={el[1]}>{el[0]}</ThemeFooter.A>
                </ThemeFooter.Li>
              );
            })}
          </ul>
        </ThemeFooter.Wrapper>
      }
      thirdColumn={
        <ThemeFooter.Wrapper>
          <ThemeFooter.H4>Newsletter</ThemeFooter.H4>
          <p>Subscribe my newsletter and keep in touch!</p>
          <div className="input-group">
            <a
              className="btn btn-outline-header"
              href="https://sika.link/newsletter-en"
            >
              Subscribe
            </a>
          </div>
        </ThemeFooter.Wrapper>
      }
      center={[]}
    />
  );

  return (
    <Layout Navbar={Navbar} Footer={Footer} site={props.site}>
      <div>
        <Head>
          <title>{props.site_title}</title>
        </Head>
        <LandingPage site={props.site} hideTrainingSection={true} />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Page;
