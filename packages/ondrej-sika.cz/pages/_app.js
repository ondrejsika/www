import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";
import Link from "next/link";
import styled from "styled-components";
import Layout from "@app/ondrejsika-theme/layouts/Layout";
import { CopyToClipboard } from "react-copy-to-clipboard";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";
import Button from "@app/ondrejsika-theme/components/Button";

// Imported CSS
import "bootstrap-css-only/css/bootstrap.min.css";
import "../css/index.sass";

const Hide = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Navbar = (
  <ThemeNavbar
    NavName="Ondřej Šika"
    links={[
      ["KNIHA", "/kniha", "new"],
      ["DEVOPS LIVE", "/devopslive"],
      [
        "KURZY",
        [
          ["GIT", "/skoleni/git"],
          ["GITLAB CI", "/skoleni/gitlab-ci"],
          ["DOCKER", "/skoleni/docker"],
          ["KUBERNETES", "/skoleni/kubernetes"],
          ["OPENSHIFT", "/skoleni/openshift", "new"],
          ["ARGOCD", "/skoleni/argocd", "new"],
          ["RANCHER", "/skoleni/rancher"],
          ["ANSIBLE", "/skoleni/ansible"],
          ["TERRAFORM", "/skoleni/terraform"],
          ["CLOUDFLARE", "/skoleni/cloudflare", "new"],
          ["PROMETHEUS", "/skoleni/prometheus"],
          ["PROXMOX", "/skoleni/proxmox"],
          ["ELK / EFK", "/skoleni/elk"],
          ["DIGITAL OCEAN", "/skoleni/digitalocean"],
          ["PACKER", "/skoleni/packer", "new"],
          ["VAULT", "/skoleni/vault", "new"],
          // ["AWS", "/skoleni/aws"],
          // ["OPEN STACK", "/skoleni/openstack"],
          // ["GO (GOLANG)", "/skoleni/go"],
          ["DJANGO", "/skoleni/django"],
          // ["REACT & NEXT.JS", "/skoleni/react"],
          ["VIDEOKURZY", "/videokurzy"]
        ]
      ],
      ["TERMÍNY", "/verejne-terminy"],
      [
        "NÁVODY & ČLÁNKY",
        [
          ["BLOG", "/blog"],
          ["NÁVODY (TECHNICKÉ)", "/navody"],
          ["ČLÁNKY (RŮZNÉ)", "/clanky"],
          ["WEEKNOTES", "/blog/tag/weeknotes"],
          ["REPOZITÁŘE", "/repozitare"],
          ["RESOURCES", "/resources"],
          ["DEVOPS FAQ", "/devops-faq"]
        ]
      ],
      ["KONTAKT", "/kontakt"]
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
          </ThemeFooter.A>{" "}
          <CopyToClipboard text="ondrej@sika.io">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
          <br />
          <ThemeFooter.A href="mailto:skoleni@sika.io">
            skoleni@sika.io
          </ThemeFooter.A>{" "}
          <CopyToClipboard text="skoleni@sika.io">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
          <br />
          <ThemeFooter.A href="tel:+420773452376">
            +420 773 452 376
          </ThemeFooter.A>{" "}
          <CopyToClipboard text="+420773452376">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
        </p>
        <p>
          <span style={{ fontSize: "0.7em" }}>Company ID</span>
          <br />
          88114163{" "}
          <CopyToClipboard text="88114163">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
        </p>
        <p>
          <span style={{ fontSize: "0.7em" }}>VAT ID</span>
          <br />
          CZ9302252102{" "}
          <CopyToClipboard text="CZ9302252102">
            <span style={{ cursor: "pointer" }}>📋</span>
          </CopyToClipboard>
        </p>
      </ThemeFooter.Wrapper>
    }
    secondColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Nejoblíbenější kurzy</ThemeFooter.H4>
        <ul>
          {[
            ["Docker", "/skoleni/docker"],
            ["Kubernetes", "/skoleni/kubernetes"],
            ["Gitlab CI", "/skoleni/gitlab-ci"],
            ["Terraform", "/skoleni/terraform"],
            ["Prometheus", "/skoleni/prometheus"],
            ["Rancher", "/skoleni/rancher"]
          ].map((el, i) => {
            return (
              <ThemeFooter.Li key={i}>
                <Link href={el[1]}>
                  <ThemeFooter.A href="#">{el[0]}</ThemeFooter.A>
                </Link>
              </ThemeFooter.Li>
            );
          })}
        </ul>
      </ThemeFooter.Wrapper>
    }
    thirdColumn={
      <ThemeFooter.Wrapper>
        <ThemeFooter.H4>Zajímají Vás novinky?</ThemeFooter.H4>
        <p>Odebírejte můj newsletter a budete v obraze!</p>
        <div className="input-group">
          <Button
            site={site}
            type="outline-secondary"
            href="https://sika.link/newsletter"
          >
            Přihlásit se k odběru článků a novinek
          </Button>
        </div>
      </ThemeFooter.Wrapper>
    }
    center={
      <Hide>
        <Link href="/news" passHref>
          <ThemeFooter.A>News</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/obchodni-spoluprace">
          <ThemeFooter.A href="#">Obchodní Spolupráce</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/doporuceni">
          <ThemeFooter.A href="#">Doporučení</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/doporucte-me-prosim">
          <ThemeFooter.A href="#">Doporučte mě prosím</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/book-me">
          <ThemeFooter.A href="#">Book Me</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/invite">
          <ThemeFooter.A href="#">Připojte se</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/devops-stack">
          <ThemeFooter.A href="#">DevOps Stack</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/seznam-skoleni">
          <ThemeFooter.A href="#">Seznam Všech Školení</ThemeFooter.A>
        </Link>
        <span className="text-white">&nbsp;|&nbsp;</span>
        <Link href="/hr">
          <ThemeFooter.A href="#">HR</ThemeFooter.A>
        </Link>
      </Hide>
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
      <>
        <Layout Navbar={Navbar} Footer={Footer} {...pageProps}>
          <Component lang={site.lang} {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
