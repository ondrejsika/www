import React from "react";
import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBar";
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

import ondrejsika from "@app/data/pictures/ondrejsika.png";
import martinjurco from "@app/data/pictures/martinjurco.png";
import zuzanajeschke from "@app/data/pictures/zuzanajeschke.png";

const Index = props => (
  <div>
    <Head>
      <title>Trainera.de - IT &amp; DevOps Training</title>
    </Head>
    <MainBarHomepage
      site={props.site}
      header="IT &amp; DevOps Training in Germany"
      text=""
    />
    <StatisticBar
      site={props.site}
      showDiagonalBackground={true}
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
      <TraineraAbout lang={props.site.lang} />
    </Container>
    <TraineraCourseBar
      site={props.site}
      lang={props.site.lang}
      LectureImgHeader="Our Courses"
    />
    <Container>
      <CompaniesBar align="center" myClients="Our Clients" />
    </Container>

    <Team
      lecturers={[
        [ondrejsika, "Ondrej Sika", "DevOps& SoftwareArchitect"],
        [zuzanajeschke, "Zuzana Jeschke", "Frontend"],
        [martinjurco, "Martin Jurco", "Operations"]
      ]}
    />
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
