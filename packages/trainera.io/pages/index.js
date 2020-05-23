import React from "react";

import TraineraAbout from "@app/ondrejsika-theme/components/TraineraAbout";
import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBar";
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
import martinjurco from "@app/data/pictures/martinjurco.png";
import zuzanajeschke from "@app/data/pictures/zuzanajeschke.png";
import jirikraml from "@app/data/pictures/jirikraml.jpg";
import vojtechmares from "@app/data/pictures/vojtechmares.jpg";

const Index = props => (
  <div>
    <Head>
      <title>Ondrej Sika - IT Školení, konzultace a workshopy</title>
    </Head>
    <MainBarHomepage
      site={props.site}
      header="IT & DevOps školení, konzultace a workshopy"
      text="Trainera je školíci agentura, která se primárně zaměřuje na oblast
        DevOps."
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
      <TraineraAbout />
    </Container>
    <TraineraCourseBar
      site={props.site}
      LectureImgHeader="Vyberte si školení"
    />
    <Container>
      <CompaniesBar align="center" myClients="Naši klienti" />
    </Container>

    <Team
      teamHeader="Náš tým"
      lecturers={[
        [ondrejsika, "Ondrej Sika", "SoftwareArchitect"],
        [zuzanajeschke, "Zuzana Jeschke", "Frontend"],
        [vojtechmares, "Vojtěch Mareš", "neco neco"],
        [jirikraml, "Jiří Kraml", "neconeconeconeco"],
        [martinjurco, "Martin Jurco", "kuchar&neco"],
        [ondrejsika, "Michael Kaplan", "neco"]
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
