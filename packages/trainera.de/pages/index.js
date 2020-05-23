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

import ondrejsika from "@app/data/pictures/ondrejsika.png";
import martinjurco from "@app/data/pictures/martinjurco.png";
import zuzanajeschke from "@app/data/pictures/zuzanajeschke.png";
import jirikraml from "@app/data/pictures/jirikraml.jpg";
import vojtechmares from "@app/data/pictures/vojtechmares.jpg";

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

    <Container>
      <TraineraAbout lang={props.site.lang} />
    </Container>
    <TraineraCourseBar
      site={props.site}
      lang={props.site.lang}
      LectureImgHeader="Our Courses"
    />
    <Container>
      <CompaniesBar align="center" lang={props.site.lang} />
    </Container>

    <Team
      lecturers={[
        [ondrejsika, "Ondrej Sika", "DevOps& SoftwareArchitect"],
        [zuzanajeschke, "Zuzana Jeschke", "Frontend"],
        [vojtechmares, "Vojtěch Mareš", "neco neco"],
        [jirikraml, "Jiří Kraml", "neconeconeconeco"],
        [martinjurco, "Martin Jurco", "kuchar&neco"],
        [ondrejsika, "Michael Kaplan", "neco"]
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
