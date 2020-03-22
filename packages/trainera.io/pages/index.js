import React from "react";
import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBarTrainera";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Head from "next/head";
import TextArea from "@app/ondrejsika-theme/components/TextArea";
import OutTeam from "@app/ondrejsika-theme/components/OurTeam";

import ond from "@app/data/pictures/ondrejsika.jpg";

const Index = () => (
  <div>
    <Head>
      <title>Ondrej Sika - IT Školení, konzultace a workshopy</title>
    </Head>
    <MainBarHomepage header="IT & DevOps školení, konzultace a workshopy" />

    <div className="container">
      <TraineraCourseBar LectureImgHeader="Co školíme" />
      <TextArea
        TextWithImgHeader="O nas"
        TextParagraph="Jmenuji se Ondřej Šika a od roku 2009 se zabývám vývojem software a
        DevOps. Své praktické zkušenosti předávám na školeních od roku 2013.
        Také se hodně věnuji školení, všechny kurzy jsou formou workshopů
        (hands-on) a stavím je na svých dlouholetých znalostech a zkušenostech z
        vývoje, testování a provozování softwarových projektů.
        Vše co školím jsem použil v reálných projektech a mám s technologií osobní
        zkušenost.
        Všechny kurzy a školení dělám v českém nebo anglickém jazyce."
      />
      <OutTeam
        lecturers={[
          [ond, "Ondrej Sika"],
          [ond, "Zuzana Jeschke"],
          [ond, "Martin Jurco"],
          [ond, "Martin Studna"],
          [ond, "Martin Studna"],
          [ond, "Martin Studna"]
        ]}
      ></OutTeam>
      <CompaniesBar />
      <h2 className="mt-5">Doporučení z Twitteru</h2>
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
