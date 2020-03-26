import React from "react";
import styled from "styled-components";

import Layout from "@app/ondrejsika-theme/layouts/Layout";

import ThemeNavbar from "@app/ondrejsika-theme/components/Navbar";
import ThemeFooter from "@app/ondrejsika-theme/components/Footer";
import Translate from "@app/common/components/Translate";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";

import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";
import ContactSection from "@app/ondrejsika-singlepage/components/ContactSection";

import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Head from "next/head";

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
        <Wrapper>
          <H4>Ondrej Sika</H4>
          <p>
            <A href="mailto:ondrej@sika.io">ondrej@sika.io</A>
            <br />
            <A href="tel:+420773452376">+420 773 452 376</A>
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
        </Wrapper>
      }
      secondColumn={
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
      thirdColumn={<></>}
      center={[]}
    />
  );

  return (
    <Layout Navbar={Navbar} Footer={Footer} site={props.site}>
      <div>
        <Head>
          <title>{props.site_title}</title>
        </Head>
        <MainBarHomepage
          header={props.site_claim}
          text={props.site_claim_text}
        />
        <StatisticBar
          NumberOfPeople={props.statistics_bar_people}
          NumberOfPeopleHeader="Počet odškolených lidí"
          NumberOfCompanies={props.statistics_bar_companies}
          NumberOfCompaniesHeader="Počet firem ve spolupráci"
          NumberOfLectures={props.statistics_bar_courses}
          NumberOfLecturesHeader="Počet uskutečněných školení"
        />

        <div className="container">
          {props.children}
          <TextWithImg TextWithImgHeader="About me">
            Hi, my name is Ondrej and I&apos;m a software engineer since 2009
            and I do trainig since 2013. I&apos;ve worked for large enterpises
            as well as for startups around the Europe and Hong Kong.
            <br />
            <br />
            <h4>Training</h4>
            I&apos;m mainly focused to DevOps training. Every course I do I run
            as a hands-on workshop and It&apos;s based on top of years of my
            experices from development, leading team of developers or operating
            softwate.
            <br />
            <br />I use <a href="/training/git">Git</a>,{" "}
            <a href="/training/docker">Docker</a>,{" "}
            <a href="/training/kubernetes">Kubernetes</a>,{" "}
            <a href="/training/ansible">Ansible</a> or{" "}
            <a href="/training/gitlab-ci">CI</a> on daily basis, I have proven
            experience from my projects and projects of my clients.
            <br />
            <br />I offer open session and in-house training for all my courses.
          </TextWithImg>
          <h2 id="upcomming" className="pt-5">
            Upcomming Training Sessions
          </h2>
          <UpcomingSessions
            lang={props.site.lang}
            location={props.site.location}
          />
          <CompaniesBar lang={props.site.lang} />
          <h2 className="mt-5">
            <Translate
              lang={props.site.lang}
              cs="Doporučení z Twitteru"
              en="Twitter Reccomendations"
            />
          </h2>
          <div className="card-columns">
            {twitter_recommendation_file.map((rec, i) => {
              if (rec.lang != props.site.lang) return;
              return (
                <div key={i} className="card" style={{ border: "none" }}>
                  <TwitterTweetEmbed
                    tweetId={rec.tweet_id}
                    options={{ conversation: "none" }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <ContactSection />
      </div>
    </Layout>
  );
};

export default Page;
