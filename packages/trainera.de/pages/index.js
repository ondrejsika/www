import React from "react";
import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBar";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Head from "next/head";
import TextArea from "@app/ondrejsika-theme/components/TextArea";
import OutTeam from "@app/ondrejsika-theme/components/OurTeam";

import ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import martinjurco from "@app/data/pictures/martinjurco.jpeg";
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
    />

    <div className="container">
      <TraineraCourseBar
        lang={props.site.lang}
        LectureImgHeader="Our Courses"
      />
      <TextArea TextHeader="Our services &amp; Team">
        <TextArea.P>
          We are training agency focused on DevOps. Our team is made up of
          experienced DevOps lecturers who work with DeoOps technologies on a
          daily basis. Therefore they can explain the technology clearly for
          beginners and answer all practical questions from attendees.
        </TextArea.P>
        <TextArea.P>
          Technology stack, which we train, is a set of depending tools, which
          boost the effectiveness and productivity of your teams &amp; yours.
          You can expect faster delivery of new features to your clients as well
          as cutting your operating budget.
        </TextArea.P>
        <TextArea.P>
          DevOps to the edge. Start with Docker, Kubernetes or CI today! As
          we&apos;ve hepled banks, telcos or startups to be more productive we
          can help you too.
        </TextArea.P>
        <TextArea.P>
          Our trainings have two options: open session or in-house training. Due
          to Covid-19 we are 100% online.
        </TextArea.P>
      </TextArea>
      <OutTeam
        lecturers={[
          [ondrejsika, "Ondrej Sika"],
          [martinjurco, "Martin Jurco"],
          [zuzanajeschke, "Zuzana Jeschke"],
          [vojtechmares, "Vojtěch Mareš"],
          [jirikraml, "Jiří Kraml"]
        ]}
      ></OutTeam>
      <CompaniesBar lang={props.site.lang} />
      <h2 className="mt-5">Twitter Reccomendations</h2>
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
