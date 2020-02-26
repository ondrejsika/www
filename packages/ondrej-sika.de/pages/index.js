import React from "react";
import LectureImg from "@app/ondrej-sika.cz/components/LectureImg";
import MainBarHomepage from "@app/ondrej-sika.cz/components/MainBarHomepage";
import TextWithImg from "@app/ondrej-sika.cz/components/TextWithImg";
import StatisticBar from "@app/ondrej-sika.cz/components/StatisticBar";
import CompaniesBar from "@app/ondrej-sika.cz/components/CompaniesBar";

import Head from "next/head";
import ContactPage from "../components/ContactPage";
import SessionsPage from "../components/SessionsPage";
import site from "@app/ondrej-sika.de/config";

const Index = () => (
  <div>
    <Head>
      <title>
        Ondrej Sika 🇩🇪 - IT Training, Consulting and Workshops in Germany
      </title>
    </Head>
    <MainBarHomepage
      MainBarHeader="IT Training, Consulting and Workshops in Germany 🇩🇪"
      MainBarText="I'm boosting effectivity & productivity of software development teame by using tools which lead to faster development and reliable operation of software products."
    />
    <StatisticBar
      NumberOfPeople="600+"
      NumberOfPeopleHeader="Training attendees"
      NumberOfCompanies="70+"
      NumberOfCompaniesHeader="Companies trained"
      NumberOfLectures="100+"
      NumberOfLecturesHeader="Training sessions"
    />

    <div className="container">
      <LectureImg LectureImgHeader="My Training" />
      <SessionsPage lang={site.lang} location={site.location} />

      <TextWithImg TextWithImgHeader="About me">
        Hi, my name is Ondrej and I&apos;m a software engineer since 2009 and I
        do trainig since 2013. I&apos;ve worked for large enterpises as well as
        for startups around the Europe and Hong Kong.
        <br />
        <br />
        <h4>Training</h4>
        I&apos;m mainly focused to DevOps training. Every course I do I run as a
        hands-on workshop and It&apos;s based on top of years of my experices
        from development, leading team of developers or operating softwate.
        <br />
        <br />I use <a href="/training/git">Git</a>,{" "}
        <a href="/training/docker">Docker</a>,{" "}
        <a href="/training/kubernetes">Kubernetes</a>,{" "}
        <a href="/training/ansible">Ansible</a> or{" "}
        <a href="/training/gitlab-ci">CI</a> on daily basis, I have proven
        experience from my projects and projects of my clients.
        <br />
        <br />I offer open session and in-house training for all my courses.
      </TextWithImg>
      <CompaniesBar />
    </div>
    <ContactPage />
  </div>
);

export default Index;
