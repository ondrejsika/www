import React from "react";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import TextWithImg from "@app/ondrejsika-theme/components/TextWithImg";
import Head from "next/head";

const Index = props => (
  <div>
    <Head>
      <title>
        Ondrej Sika - IT Training, Consulting and Workshops in Europe
      </title>
    </Head>
    <MainBar
      header="IT &amp; DevOps Training and Consulting in Europe"
      text="I'm boosting effectivity & productivity of software development teams by using tools which lead to faster development and reliable operation of software products."
    ></MainBar>
    <StatisticBar
      site={props.site}
      lang={props.site.lang}
      NumberOfPeople="750+"
      NumberOfCompanies="120+"
      NumberOfLectures="170+"
    />

    <div className="container">
      <CourseBar lang={props.site.lang} LectureImgHeader="My Training" />
      <TextWithImg TextWithImgHeader="About me">
        My name is Ondrej Sika and I have been involved in software development
        and DevOps since 2009, teaching my practical experiences since 2013.
        <br />
        <br />
        I worked for small companies, startups and large corporations in order
        to streamline the process of their software development, testing and
        deployment. Today, I focus primarily on DevOps: designing the software
        stack, development and operating environment in companies.
        <br />
        <br />
        Working with tools like Docker, Kubernetes and Ansible, I automate as
        much as possible so that people don&apos;t have to do routines that
        machines can easily do.
        <br />
        <br />
        <h4>Training</h4>
        All my courses are hands-on workshops. When creating them, I utilized
        many years of my experience in developing, testing and operating
        software projects.
        <br />
        <br />I work with tools like Git, Docker, Kubernetes, Ansible or CI on a
        daily basis. Everything I teach I have already tested on my own projects
        and I have personal experience with these technologies.
      </TextWithImg>
      <CompaniesBar lang={props.site.lang} />
    </div>
  </div>
);

export default Index;
