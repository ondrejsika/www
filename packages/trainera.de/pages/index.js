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
