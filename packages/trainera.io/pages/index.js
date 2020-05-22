import React from "react";
import styled from "styled-components";

import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBar";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import Translate from "@app/common/components/Translate";
import Team from "@app/ondrejsika-theme/components/Team";
import Head from "next/head";
import TextArea from "@app/ondrejsika-theme/components/TextArea";

import ondrejsika from "@app/data/pictures/ondrejsika.png";
import martinjurco from "@app/data/pictures/martinjurco.png";
import zuzanajeschke from "@app/data/pictures/zuzanajeschke.png";
import jirikraml from "@app/data/pictures/jirikraml.jpg";
import vojtechmares from "@app/data/pictures/vojtechmares.jpg";

const A = styled.a`
  color: #098958;
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

const Bold = styled.b`
  font-weight: 700;
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
    <div className="container">
      <TraineraCourseBar site={props.site} LectureImgHeader="Co školíme" />
      <TextArea TextHeader="Služby a tým">
        <TextArea.P>
          <Bold>Technologie a technologický stack</Bold>, který školíme je
          soubor na sebe navazujících nástrojů, které Vám umožní{" "}
          <Bold>zvýšit efektivitu</Bold> Vašich IT týmů. Ať už{" "}
          <Bold>vývojářům</Bold> pomůžou{" "}
          <Bold>doručovat změny rychleji k zákazníkům</Bold>, tak{" "}
          <Bold>pomohou</Bold> Vašemu operations týmu s{" "}
          <Bold>bezproblémovým během Vašich služeb</Bold> a{" "}
          <Bold>snížením provozních nákladů</Bold>.{" "}
          <Bold>Oba tyto faktory</Bold> mají pozitivní vliv na celkové{" "}
          <Bold>náklady Vašich</Bold> IT projektů.
        </TextArea.P>
        <TextArea.P>
          Pojďte zavést nebo posunout Vaše <Bold>DevOps do současnosti</Bold>.
          Začněte s <A href="skoleni/git">Gitem</A>, <A href="">Dockerem</A>,{" "}
          <A href="">Kubernetes</A> nebo <A href="">CI</A>. Tak jako jsme
          pomohli <Bold>bankám, telefonním operátorům</Bold> k zjednodušení
          práce a úspoře nákladů, <Bold>můžeme pomoci i Vám</Bold>.
        </TextArea.P>
        <TextArea.P>
          Všechny kurzy a školení děláme v{" "}
          <Bold>českém i anglickém jazyce</Bold>. Kurzy nabízíme jako{" "}
          <Bold>otevřené termíny</Bold>, tak i <Bold>školení in house</Bold>.
          Teď v době Coronaviru děláme všechny školení online formou a funguje
          to skvěle.
        </TextArea.P>
        <TextArea.P>
          Naši lektoři jsou <Bold>zkušení vývojáři a DevOpsáci</Bold>, kteří
          technologiím, které školí rozumí a denne s nimi pracují. Dokážou proto{" "}
          <Bold>jednoduše vysvětlit základy</Bold>, ale zodpovědět na záludné
          praktické dotazy.
        </TextArea.P>
      </TextArea>
    </div>
    <Team
      lecturers={[
        [ondrejsika, "Ondrej Sika", "DevOps&SoftwareArchitect"],
        [zuzanajeschke, "Zuzana Jeschke", "Frontend"],
        [vojtechmares, "Vojtěch Mareš", "neco neco"],
        [jirikraml, "Jiří Kraml", "neconeconeconeco"],
        [martinjurco, "Martin Jurco", "kuchar&neco"],
        [ondrejsika, "Michael Kaplan", "neco"]
      ]}
    ></Team>
    <div className="container">
      <CompaniesBar myClients="Naši klienti" />
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
