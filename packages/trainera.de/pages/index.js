import React from "react";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";
import TraineraAbout from "@app/ondrejsika-theme/components/TraineraAbout";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Team from "@app/ondrejsika-theme/components/Team";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import Translate from "@app/common/components/Translate";

import jirikraml from "@app/data/pictures/jirikraml.jpg";
import vojtechmares from "@app/data/pictures/vojtechmares.jpg";
import michaelkaplan from "@app/data/pictures/michaelkaplan.png";
import ondandnela from "@app/data/pictures/ondandnel.png";

const Index = props => (
  <div>
    <Head>
      <title>Trainera.de - IT &amp; DevOps Training</title>
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
      header="Your's no.1 DevOps Training Partner"
      text="Boost productivity and efficienci with propper tools &amp; training. We can help you."
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
      <TraineraAbout
        site={props.site}
        lang={props.site.lang}
        location={props.site.location}
      />
    </Container>
    <CourseBar
      site={props.site}
      lang={props.site.lang}
      LectureImgHeader="Our Courses"
    />
    <Container>
      <CompaniesBar
        align="center"
        myClients="Our Clients"
        lang={props.site.lang}
      />
    </Container>

    <Team
      // teamMembersHeader="Our team"
      // teamMembers={[
      //   [ondrejsika, "Ondrej Sika", "SoftwareArchitect"],
      //   [martinjurco, "Martin Jurco", "Operations & Marketing"]
      // ]}
      mentorHeader="Lecturers"
      mentors={[
        [vojtechmares, "Vojtěch Mareš", "neco neco"],
        [ondandnela, "Ondrej Sikaa", "SoftwaareArchitect"],

        [jirikraml, "Jiří Kraml", "neconeconeconeco"],
        [michaelkaplan, "Michael Kaplan", "neco"]
      ]}
    ></Team>
    <div className="container">
      <h2 className="mt-5 text-center">Twitter Reccomendations</h2>
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
  </div>
);

export default Index;
