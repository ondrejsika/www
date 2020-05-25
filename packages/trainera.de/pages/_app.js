import React from "react";
import styled from "styled-components";
import App from "next/app";
import site from "@app/trainera.de/config";
import Link from "next/link";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";
import ThemeLanguageSwitch from "@app/ondrejsika-theme/components/LanguageSwitch";
import Button from "@app/ondrejsika-theme/components/Button";
import Twitter from "@app/data/pictures/social-networks/twitter_sq.svg";
import Linkedin from "@app/data/pictures/social-networks/linkedin_sq.svg";
// Imported CSS
import "@app/ondrej-sika.cz/css";

const LanguageSwitch = <ThemeLanguageSwitch site={site} />;

const Row = styled.div`
  display: flex;
  padding-top: 1em;
`;
const Icon = styled.span`
  margin: 0.8em;
  :first-child {
    margin-left: 0;
    padding-left: 0;
  }
`;
const Img = styled.img`
  height: 50px;
`;

const Navbar = (
  <ThemeNavbar
    site={site}
    NavName="Trainera.de 🇩🇪"
    links={[
      ["HOME", "/"],
      [
        "TRAINING",
        [
          ["GIT", "/training/git"],
          ["GITLAB CI", "/training/gitlab-ci"],
          ["DOCKER", "/training/docker"],
          ["KUBERNETES", "/training/kubernetes"],
          ["RANCHER", "/training/rancher"],
          ["ANSIBLE", "/training/ansible"],
          // ["TERRAFORM", "/training/terraform"],
          ["PROMETHEUS", "/training/prometheus"]
          // ["PROXMOX", "/training/proxmox"],
          // ["ELK / EFK", "/training/elk"],
          // ["REACT & NEXT.JS", "/training/react"]
        ]
      ],
      ["PUBLIC SESSIONS", "/public-sessions"],
      ["CONTACT", "/contact"]
    ]}
  />
);

const Footer = (
  <ThemeFooter
    site={site}
    firstColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Trainera.de</ThemeFooter.H4>
        <p>
          <ThemeFooter.A href="mailto:sales@trainera.io">
            sales@trainera.io
          </ThemeFooter.A>
          <br />
          <ThemeFooter.A href="tel:+420773452376">
            +420 773 452 376
          </ThemeFooter.A>
          <Row>
            <ThemeFooter.A href="https://twitter.com/traineraio">
              <Icon>
                <Img src={Twitter} />
              </Icon>
            </ThemeFooter.A>
            <br />
            <ThemeFooter.A href="https://www.linkedin.com/company/traineraio">
              <Icon>
                <Img src={Linkedin} />
              </Icon>
            </ThemeFooter.A>
          </Row>
        </p>

        <table className="contact-table table-borderless">
          <tbody>
            <tr>
              <td>Company ID:</td>
              <td>08591491</td>
            </tr>
            <tr>
              <td>VAT ID:</td>
              <td>CZ08591491</td>
            </tr>
          </tbody>
        </table>
      </ThemeFooter.Wrapper>
    }
    secondColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Popular Courses</ThemeFooter.H4>
        <ul>
          {[
            ["Docker", "/training/docker"],
            ["Kubernetes", "/training/kubernetes"],
            ["Gitlab CI", "/training/gitlab-ci"],
            ["Terraform", "/training/terraform"],
            ["Rancher", "/training/rancher"],
            ["Prometheus", "/training/prometheus"]
          ].map((el, i) => {
            return (
              <ThemeFooter.Li key={i}>
                <Link href={el[1]}>
                  <ThemeFooter.A href={el[1]} className="a-underline">
                    {el[0]}
                  </ThemeFooter.A>
                </Link>
              </ThemeFooter.Li>
            );
          })}
        </ul>
      </ThemeFooter.Wrapper>
    }
    thirdColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Newsletter</ThemeFooter.H4>
        <p>Subscribe our newsletter for new courses and sessions!</p>
        <div className="input-group">
          <Button
            site={site}
            type="outline-secondary"
            href="https://sika.link/newsletter-en"
          >
            Subscribe
          </Button>
        </div>
      </ThemeFooter.Wrapper>
    }
    center={<></>}
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
      <Layout
        LanguageSwitch={LanguageSwitch}
        Navbar={Navbar}
        Footer={Footer}
        {...pageProps}
      >
        <Component lang={site.lang} {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
