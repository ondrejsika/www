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
        My name is Ondrej, I am a software engineer and DevOps consultant,
        architect &amp; lecturer. I lead mostly Docker courses and CI; they are
        both closely interrelated. I have worked for small companies, startups
        to big corporations. I have four years of experience with training.
        <br />
        <br />
        <h4>Training</h4>
        All courses are perform as workshops (hands-on). They are build on my
        long-term knowledge and experience in developing, testing and running
        software projects.
      </TextWithImg>
      <CompaniesBar lang={props.site.lang} />
    </div>
  </div>
);

export default Index;
