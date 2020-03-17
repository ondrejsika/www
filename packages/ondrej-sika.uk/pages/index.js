import React from "react";
import LectureImg from "@app/ondrejsika-theme/components/LectureImg";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";

import Head from "next/head";

const Index = () => (
  <div>
    <Head></Head>
    <MainBarHomepage
      MainBarHeader="IT Školení, konzultace a workshopy"
      MainBarText="Zlepšuji práci vývojářských týmu zaváděním efektivních procesu ve vývoji a použitím prověřených nástrojů a technologií, které vedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software."
    />
    <StatisticBar
      NumberOfPeople="500+"
      NumberOfPeopleHeader="Počet odškolených lidí"
      NumberOfCompanies="70+"
      NumberOfCompaniesHeader="Počet firem ve spolupráci"
      NumberOfLectures="100+"
      NumberOfLecturesHeader="Počet uskutečněných školení"
    />

    <div className="container">
      <LectureImg LectureImgHeader="Kurzy co školím" />
      <TextWithImg TextWithImgHeader="O mně">
        Jmenuji se Ondřej, vývojem softwaru se zabývám od roku 2009 a od roku
        2013 předávám své zkušenosti na školích. Pracoval jsem pro malé firmy,
        startupy i velké korporace s cílem zefektivnit jim proces vývoje,
        testování a nasazování software.
        <br />
        <br />
        <h4>Školení</h4>
        Předně se věnuji školení, všechny kurzy jsou formou workshopů (hands-on)
        a stavím je na svých dlouholetých znalostech a zkušenostech z vývoje,
        testování a provozování softwarových projektů.
        <br />
        <br />
        Nástroje jako <a href="/git">Git</a>, <a href="/docker">Docker</a>,{" "}
        <a href="/kubernetes">Kubernetes</a>, <a href="/ansible">Ansible</a>{" "}
        nebo <a href="/gitlab-ci">CI</a> používám na denní bázi, vše co školím
        jsem použil v reálných projektech a mám s technologií osobní zkušenost.
        <br />
        <br />
        Všechny kurzy a školení dělám v českém nebo anglickém jazyce.
      </TextWithImg>
      <CompaniesBar />
    </div>
  </div>
);

export default Index;
