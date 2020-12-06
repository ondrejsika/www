import React from "react";

import TraineraAbout from "@app/ondrejsika-theme/components/TraineraAbout";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import Translate from "@app/common/components/Translate";
import Team from "@app/ondrejsika-theme/components/Team";
import Head from "next/head";
import { Container } from "react-bootstrap";

import ondrejsika from "@app/data/pictures/ondrejsika.png";
import ondandnela from "@app/data/pictures/ondandnel.png";
import martinjurco from "@app/data/pictures/martinjurco.png";
import zuzanajeschke from "@app/data/pictures/zuzanajeschke.png";
import jirikraml from "@app/data/pictures/jirikraml.jpg";
import vojtechmares from "@app/data/pictures/vojtechmares.jpg";
import michaelkaplan from "@app/data/pictures/michaelkaplan.png";

const Index = props => (
  <div>
    <Head>
      <title>Ondrej Sika - IT Školení, konzultace a workshopy</title>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <MainBarHomepage
      site={props.site}
      header="IT & DevOps školení, konzultace a workshopy"
      text="Trainera je školíci agentura, která se primárně zaměřuje na oblast
        DevOps."
    />
    <StatisticBar
      site={props.site}
      NumberOfPeople="750+"
      NumberOfPeopleHeader={
        <Translate
          lang={props.lang}
          cs="Počet odškolených lidí"
          en="Training attendees"
          de="Training attendees"
        />
      }
      NumberOfCompanies="120+"
      NumberOfCompaniesHeader={
        <Translate
          lang={props.lang}
          cs="Počet firem ve spolupráci"
          en="Companies trained"
          de="Companies trained"
        />
      }
      NumberOfLectures="170+"
      NumberOfLecturesHeader={
        <Translate
          lang={props.lang}
          cs="Počet uskutečněných školení"
          en="Training sessions"
          de="Training sessions"
        />
      }
    />
    <Container>
      <TraineraAbout />
    </Container>
    <CourseBar site={props.site} LectureImgHeader="Vyberte si školení" />
    <Container>
      <CompaniesBar
        align="center"
        myClients="Naši klienti"
        lang={props.site.lang}
      />
    </Container>

    <Team
      teamMembersHeader="Náš tým"
      teamMembers={[
        [ondrejsika, "Ondrej Sika", "SoftwareArchitect"],
        [zuzanajeschke, "Zuzana Jeschke", "Frontend"],
        [martinjurco, "Martin Jurco", "Operations & Marketing"]
      ]}
      mentorHeader="Lektoři"
      mentors={[
        [vojtechmares, "Vojtěch Mareš", "neco neco"],
        [ondandnela, "Ondrej Sika", "SoftwareArchitect"],
        [jirikraml, "Jiří Kraml", "neconeconeconeco"],
        [michaelkaplan, "Michael Kaplan", "neco"]
      ]}
    ></Team>

    <div className="container">
      <h2 className="mt-5 text-center">Doporučení z Twitteru</h2>
      <div className="card-columns">
        {twitter_recommendation_file.map((rec, i) => {
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
  </div>
);

export default Index;
