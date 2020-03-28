import React from "react";

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
                  <ThemeFooter.A href="#">{el[0]}</ThemeFooter.A>
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
        <MainBarHomepage
          header={props.site_claim}
          text={props.site_claim_text}
        />
        <StatisticBar
          lang={props.site.lang}
          NumberOfPeople={props.statistics_bar_people}
          NumberOfCompanies={props.statistics_bar_companies}
          NumberOfLectures={props.statistics_bar_courses}
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
