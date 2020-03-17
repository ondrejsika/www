import React from "react";
import LectureImg from "@app/ondrejsika-theme/components/LectureImg";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Ondrej Sika - IT Školení, konzultace a workshopy</title>
    </Head>
    <MainBarHomepage
      header="IT & DevOps školení, konzultace a workshopy"
      text="Zlepšuji práci vývojářských týmu zaváděním efektivních procesů ve vývoji. Naučím Vás používat prověřené nástroje a technologie, které povedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software."
    />
    <StatisticBar
      NumberOfPeople="750+"
      NumberOfPeopleHeader="Počet odškolených lidí"
      NumberOfCompanies="120+"
      NumberOfCompaniesHeader="Počet firem ve spolupráci"
      NumberOfLectures="170+"
      NumberOfLecturesHeader="Počet uskutečněných školení"
    />

    <div className="container">
      <LectureImg LectureImgHeader="Kurzy co školím" />
      <TextWithImg TextWithImgHeader="O mně">
        Jmenuji se Ondřej Šika a od roku 2009 se zabývám vývojem software a
        DevOps. Své praktické zkušenosti předávám na školeních od roku 2013.
        <br />
        <br />
        Pracoval jsem pro malé firmy, startupy i velké korporace s cílem
        zefektivnit jim proces vývoje, testování a nasazování software. Dnes se
        primárně věnuji DevOps: návrhem softwarového stacku, vývojového a
        provozního prostředí ve firmách.
        <br />
        <br />
        Práci s nástroji jako Docker, Kubernetes a Terraform se snažím co
        nejvíce automatizovat, aby lidé nemuseli dělat rutiny, které můžou
        jednoduše dělat stroje.
        <br />
        <br />
        <h4>Školení</h4>
        Také se hodně věnuji školení, všechny kurzy jsou formou workshopů
        (hands-on) a stavím je na svých dlouholetých znalostech a zkušenostech z
        vývoje, testování a provozování softwarových projektů.
        <br />
        <br />
        Nástroje jako <a href="/skoleni/git">Git</a>,{" "}
        <a href="/skoleni/docker">Docker</a>,{" "}
        <a href="/skoleni/kubernetes">Kubernetes</a>,{" "}
        <a href="/skoleni/terraform">Terraform</a>,{" "}
        <a href="/skoleni/ansible">Ansible</a> nebo{" "}
        <a href="/skoleni/gitlab-ci">CI</a> používám na denní bázi. Vše co
        školím jsem použil v reálných projektech a mám s technologií osobní
        zkušenost.
        <br />
        <br />
        Všechny kurzy a školení dělám v českém nebo anglickém jazyce.
      </TextWithImg>
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
