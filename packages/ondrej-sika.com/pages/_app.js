import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.com/config";
import styled from "styled-components";
import Link from "next/link";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";

// Imported CSS
import "@app/ondrej-sika.cz/css";

const Wrapper = styled.div`
  padding: 0.5em 0;
  color: #c8bfb0;
`;
const A = styled.a`
  color: #c8bfb0;
  &:hover {
    color: white;
    text-decoration: underline white;
  }
`;
const H4 = styled.h4`
  color: white;
`;

const Navbar = (
  <ThemeNavbar
    NavName="Ondrej Sika"
    NavUnderheader="Software {Engineer, Consultant, Lecturer}"
    links={[
      ["HOME", "/"],
      [
        "TRAINING",
        [
          ["GIT", "/training/git"],
          ["GITLAB CI", "/training/gitlab-ci"],
          ["DOCKER", "/training/docker"],
          ["KUBERNETES", "/training/kubernetes"],
          ["ANSIBLE", "/training/ansible"]
          // ["TERRAFORM", "/training/terraform"],
          // ["REACT & NEXT.JS", "/training/react"]
        ]
      ],
      ["UPCOMING SESSIONS", "/upcoming-sessions"],
      // [
      //   "TUTORIALS & ARTICLES",
      //   [
      //     // ["BLOG", "/blog"],
      //     ["TUTORIALS", "/tutorials"],
      //     ["ARTICLES", "/articles"],
      //     ["REPOSITORIES", "/repozitare"]
      //   ]
      // ],
      ["CONTACT", "/contact"]
    ]}
  />
);

const Footer = (
  <ThemeFooter
    firstColumn={
      <Wrapper>
        <H4>Ondrej Sika</H4>
        <p>
          <A href="mailto:ondrej@sika.io">ondrej@sika.io</A>
          <br />
          <A href="tel:+420773452376">+420 773 452 376</A>
        </p>
        <table className="contact-table table-borderless">
          <tbody>
            <tr>
              <td>Company ID:&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>88114163</td>
            </tr>
            <tr>
              <td>VAT ID:</td>
              <td>CZ9302252102</td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    }
    secondColumn={
      <Wrapper>
        <H4>Popular Courses</H4>
        <ul>
          {[
            ["GIT", "/training/git"],
            ["GITLAB CI", "/training/gitlab-ci"],
            ["DOCKER", "/training/docker"],
            ["KUBERNETES", "/training/kubernetes"],
            ["ANSIBLE", "/training/ansible"]
            // ["TERRAFORM", "/training/terraform"],
            // ["REACT & NEXT.JS", "/training/react"]
          ].map((el, i) => {
            return (
              <li key={i}>
                <Link href={el[1]}>
                  <A href="#">{el[0]}</A>
                </Link>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    }
    thirdColumn={
      <Wrapper>
        <H4>Newsletter</H4>
        <p>Subscribe my newsletter and keep in touch!</p>
        <div className="input-group">
          <a
            className="btn btn-outline-header"
            href="https://sika.link/newsletter"
          >
            Subscribe
          </a>
        </div>
      </Wrapper>
    }
  />
);

class MyApp extends App {
  constructor(...args) {
    super(...args);
    this.site = site;
  }
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = this.site;
    return (
      <Layout Navbar={Navbar} Footer={Footer} {...pageProps}>
        <Component lang={site.lang} {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
