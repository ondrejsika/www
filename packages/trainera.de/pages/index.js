import React from "react";
import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBar";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";

import Head from "next/head";
import TextArea from "@app/ondrejsika-theme/components/TextArea";
import OutTeam from "@app/ondrejsika-theme/components/OurTeam";

import ond from "@app/data/pictures/ondrejsika.jpg";

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
          We are a training agency focused on DevOps. Out team is full of
          experienced DevOps letcturers which works with those technologis on
          daily basis. That&apos;s te reason why they can explain the technology
          clearly for beginners and answer all questions from attendees.
        </TextArea.P>
        <TextArea.P>
          Our technology stach, which we train, is a set of depending tools,
          which boost your and your IT teams effectivity and productivity. From
          faster delivery of new features to your clients to cut of your
          operation budget.
        </TextArea.P>
        <TextArea.P>
          DevOps to the edge. Start with Docker, Kubernetes or CI today! As
          I&apos;ve hepled banks, telcos or startups to be more productive I can
          help you.
        </TextArea.P>
        <TextArea.P>
          Our training have two options: open session or in-house trainig. Due
          to Covid-19 We are 100% online.
        </TextArea.P>
      </TextArea>
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
      <CompaniesBar lang={props.site.lang} />
    </div>
  </div>
);

export default Index;
