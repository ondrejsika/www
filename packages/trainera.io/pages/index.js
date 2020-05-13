import React from "react";
import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBar";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import Translate from "@app/common/components/Translate";

import Head from "next/head";
import TextArea from "@app/ondrejsika-theme/components/TextArea";
import OutTeam from "@app/ondrejsika-theme/components/OurTeam";

import ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import martinjurco from "@app/data/pictures/martinjurco.jpeg";
import zuzanajeschke from "@app/data/pictures/zuzanajeschke.png";
import jirikraml from "@app/data/pictures/jirikraml.jpg";
import vojtechmares from "@app/data/pictures/vojtechmares.jpg";

import styled from "styled-components";

const A = styled.a`
  border-bottom: 2px solid #098958;
  background-image: linear-gradient(120deg, #098958 0%, #098958 100%);
  background-repeat: no-repeat;
  background-size: 100% 0em;
  background-position: 0 100%;
  transition: background-size 0.125s ease-in;
  :hover {
    border-color: #098958;
    color: white;
    background-size: 100% 100%;
  }
`;
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
      NumberOfPeople="150+"
      NumberOfPeopleHeader={
        <Translate
          lang={props.lang}
          cs="účastníků proškoleno"
          en="Training attendees"
          de="Training attendees"
        />
      }
      NumberOfCompanies="15+"
      NumberOfCompaniesHeader={
        <Translate
          lang={props.lang}
          cs="firem proškoleno"
          en="Companies trained"
          de="Companies trained"
        />
      }
      NumberOfLectures="20+"
      NumberOfLecturesHeader={
        <Translate
          lang={props.lang}
          cs="běhů školení"
          en="Training sessions"
          de="Training sessions"
        />
      }
    />
    <div className="container">
      <TraineraCourseBar LectureImgHeader="Co školíme" />
      <TextArea TextHeader="Služby a tým">
        <TextArea.P>
          Technologie a technologický stack, který školíme je soubor na sebe
          navazujících nástrojů, které Vám umožní zvýšit efektivitu Vašich IT
          týmů. Ať už vývojářům pomůžou doručovat změny rychleji k zákazníkům,
          tak pomohou Vašemu operations týmu s bezproblémovým během Vašich
          služeb a snížením provozních nákladů. Oba tyto faktory mají pozitivní
          vlyv na celkové náklady Vašich IT projektů.
        </TextArea.P>
        <TextArea.P>
          Pojďte zavést nebo posunout Vaše DevOps do současnosti. Začněte s{" "}
          <A href="skoleni/git">Gitem</A>, <A href="">Dockerem</A>,{" "}
          <A href="">Kubernetes</A> nebo <A href="">CI</A>. Tak jako jsme
          pomohli bankám, telefonním operátorům k zjednodušení práce a úspoře
          nákladů, můžeme pomoci i Vám.
        </TextArea.P>
        <TextArea.P>
          Všechny kurzy a školení děláme v českém i anglickém jazyce. Kurzy
          nabízíme jako otevřené termíny, tak i školení in house. Teď v době
          Coronaviru děláme všechny školení online formou a funguje to skvěle.
        </TextArea.P>
        <TextArea.P>
          Naši lektoři jsou zkušení vývojáři a DevOpsáci, kteří technologiím,
          které školí rozumí a denne s nimi pracují. Dokážou proto jednoduše
          vysvětlit základy, ale zodpovědět na záludné praktické dotazy.
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
