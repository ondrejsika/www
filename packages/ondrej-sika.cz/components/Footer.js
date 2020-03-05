import React from "react";
import Link from "next/link";
import styled from "styled-components";
import color from "../config/colors";
import facebookhex from "@app/data/pictures/social-networks/fb-hex.svg";
import instagramhex from "@app/data/pictures/social-networks/instagram-hex.svg";
import linkedinhex from "@app/data/pictures/social-networks/linkedin-hex.svg";
import twitterhex from "@app/data/pictures/social-networks/twitter-hex.svg";
import githubhex from "@app/data/pictures/social-networks/github-hex.svg";
import mailhex from "@app/data/pictures/social-networks/mail-hex.svg";

const A = styled.a`
  text-decoration: underline;
  color: ${color.WHITE};
`;
const Center = styled.p`
  text-align: center;
  color: ${color.WHITE};
  padding-top: 1em;
`;

const SocialIcons = styled.div`
  text-align: center;
  padding: 1em 0;
  /* border-top: 1px solid white; */
  margin: 1em;
`;
const Footer = () => (
  <div>
    <div className="footer mt-5">
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-4 col-sm-5 col-4">
            <h3 className="text-white">Moje Kurzy</h3>
            <div className="row">
              <div className="col-6">
                <ul className="text-white">
                  {[
                    ["Docker", "/skoleni/docker"],
                    ["Kubernetes", "/skoleni/kubernetes"],
                    ["Gitlab CI", "/skoleni/gitlab-ci"],
                    ["Git", "/skoleni/git"],
                    ["Ansible", "/skoleni/ansible"]
                  ].map((el, i) => {
                    return (
                      <li key={i}>
                        <Link href={el[1]}>
                          <a className="a-underline">{el[0]}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-6">
                <ul className="text-white">
                  {[
                    ["Terraform", "/skoleni/terraform"],
                    ["Prometheus", "/skoleni/prometheus"],
                    ["Proxmox", "/skoleni/proxmox"],
                    ["React & Next.js", "/skoleni/react"]
                  ].map((el, i) => {
                    return (
                      <li key={i}>
                        <Link href={el[1]}>
                          <a className="a-underline">{el[0]}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 pt-4 pt-md-0">
            <h3 className="text-white">Zajímají Vás novinky?</h3>
            <p className="text-white">
              Odebírejte můj newsletter a budete v obraze!
            </p>
            <div className="input-group pt-3">
              <a
                className="btn btn-outline-header"
                href="https://sika.link/newsletter"
              >
                Přihlásit se k odběru článků a novinek
              </a>
            </div>
          </div>
          <div className="col-md-4  col-sm-12">
            <div className="text-white">
              <h3 className="text-white">Ondřej Šika</h3>
              <p>
                <A href="mailto:ondrej@sika.io" className="a-underline">
                  ondrej@sika.io
                </A>
                <br />
                <A href="tel:+420773452376" className="a-underline">
                  +420 773 452 376
                </A>
              </p>
              <table className="contact-table table-borderless">
                <tbody>
                  <tr>
                    <td>IČ:</td>
                    <td>88114163</td>
                  </tr>
                  <tr>
                    <td>DIČ:</td>
                    <td>CZ9302252102</td>
                  </tr>
                  <tr>
                    <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                    <td>2301432033/2010 (Fio)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <SocialIcons>
          <a href="https://www.facebook.com/sikaondrej">
            <img src={facebookhex} className="pl-2 pr-2 pt-1" />
          </a>
          <a href="https://www.instagram.com/ondrejsika/">
            <img src={instagramhex} className="pl-2 pr-2 pt-1" />
          </a>
          <a href="https://www.linkedin.com/in/ondrejsika/">
            <img src={linkedinhex} className="pl-2 pr-2 pt-1" />
          </a>
          <a href="https://twitter.com/ondrejsika">
            <img src={twitterhex} className="pl-2 pr-2 pt-1" />
          </a>
          <a href="https://github.com/ondrejsika">
            <img src={githubhex} className="pl-2 pr-2 pt-1" />
          </a>
          <a href="mailto:ondrej@sika.io">
            <img src={mailhex} className="pl-2 pr-2 pt-1" />
          </a>
        </SocialIcons>

        <Center>
          <Link href="/lektorska-spoluprace">
            <A href="#">Lektorská spolupráce</A>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/jobs">
            <A href="#">Nabídka (spolu)práce</A>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/obchodni-spoluprace">
            <A href="#">Obchodní Spolupráce</A>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/doporuceni">
            <A href="#">Doporučení</A>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/doporucte-me-prosim">
            <A href="#">Doporučte mě prosím</A>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/book-me">
            <A href="#">Book Me</A>
          </Link>
          <span className="text-white">&nbsp;|&nbsp;</span>
          <Link href="/invite">
            <A href="#">Připojte se</A>
          </Link>
        </Center>
        <Center>
          Website by{" "}
          <A
            href="https://zuzjes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-11 text a-underline"
          >
            Zuzana Jeschke
          </A>
        </Center>
      </div>
    </div>
  </div>
);

export default Footer;
