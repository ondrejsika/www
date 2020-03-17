import React from "react";
import "@app/sika-kraml.de/css";
import ReactMarkdown from "@app/common/components/Markdown";
import LectureInnerLg from "@app/sika-kraml.de/components/LectureInnerLg";
import LectureSectionLg from "@app/sika-kraml.de/components/LectureSectionLg";
import MainBar from "@app/sika-kraml.de/components/MainBar";
import TextWithImg from "@app/sika-kraml.de/components/TextWithImg";
import site from "@app/ondrej-sika.cz/config";
import Head from "next/head";
import docker_img from "@app/data/pictures/courses/docker.svg";
import git_img from "@app/data/pictures/courses/git.svg";
import kubernetes_img from "@app/data/pictures/courses/kubernetes.svg";
import gitlab_img from "@app/data/pictures/courses/gitlab-ci.svg";
import ansible_img from "@app/data/pictures/courses/ansible.svg";
import sikaKraml from "@app/data/pictures/it.jpg";
import LectureSectionMdSm from "@app/sika-kraml.de/components/LectureSectionMdSm";
import LectureInnerMdSm from "@app/sika-kraml.de/components/LectureInnerMdSm";
import { stripIndent } from "common-tags";

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

var white = {
  color: "white"
};

var colorText = {
  color: "#09AEAB"
};

const Index = () => (
  <div>
    <Head>
      <title>Sika Kraml - IT Schulungen, Workshops und Beratung</title>
    </Head>
    <MainBar
      header="IT Schulungen, Workshops und Beratung"
      text="
        Wir bieten Schulungen und Beratung im DevOps-Umfeld an.
        Für uns steht die Verbesserung Ihrer Softwareentwicklung und Operationsabläufe an erster Stelle.
        Wie steigern Ihre Produktivität und Effizienz und senken zusätzlich noch Ihre Ausgaben."
    ></MainBar>
    <div className="container">
      <LectureSectionLg LectureImgHeader="Unsere Schulungen">
        <LectureInnerLg
          link="/schulung/docker"
          title="DOCKER"
          image={docker_img}
          first={true}
        />
        <LectureInnerLg link="/schulung/git" title="GIT" image={git_img} />
        <LectureInnerLg
          link="/schulung/kubernetes"
          title="KUBERNETES"
          image={kubernetes_img}
        />
        <LectureInnerLg
          link="/schulung/ansible"
          title="ANSIBLE"
          image={ansible_img}
        />
        <LectureInnerLg
          link="/schulung/gitlab-ci"
          title="GITLAB-CI"
          image={gitlab_img}
        />
      </LectureSectionLg>

      {/* TODO @Zuzka what does the following element do? */}
      <LectureSectionMdSm LectureImgHeader="Unsere Schulungen">
        <LectureInnerMdSm
          link="/schulung/docker"
          title="DOCKER"
          image={docker_img}
          text=""
        />
        <LectureInnerMdSm
          link="/schulung/git"
          title="GIT"
          image={git_img}
          text=""
        />
        <LectureInnerMdSm
          link="/schulung/kubernetes"
          title="KUBERNETES"
          image={kubernetes_img}
          text=""
        />
        <LectureInnerMdSm
          link="/schulung/ansible"
          title="ANSIBLE"
          image={ansible_img}
          text=""
        />
        <LectureInnerMdSm
          link="/schulung/gitlab-ci"
          title="GITLAB-CI"
          image={gitlab_img}
          text=""
          last={true}
        />
      </LectureSectionMdSm>
      <ReactMarkdown
        source={stripIndent`
        #### Schulung
        Alle Kurse werden als Hands-On-Workshops durchgeführt.
        Sie basieren auf unserem tiefgründigen Verständnis der jeweiligen Technologien und
        unserer langjährigen Erfahrung mit Entwicklung, Test und Betrieb von Softwareprojekten.
        `}
      />
    </div>
    <div style={{ background: "#4EA9A5" }}>
      <div className="d-flex flex-row container pt-3 pb-3">
        <div className="col-4 pr-5" style={{ borderLeft: "1px solid white" }}>
          <h3 className="center pt-5 pb-5 text-white">WORKSHOPS</h3>
        </div>
        <div className="col-4 pr-5" style={{ borderLeft: "1px solid white" }}>
          <h3 className="center pt-5 pb-5 text-white">SCHULUNGEN</h3>
        </div>
        <div
          className="col-4 pr-5"
          style={{
            borderLeft: "1px solid white",
            borderRight: "1px solid white"
          }}
        >
          <h3 className="center pt-5 pb-5 text-white">KURZPROJEKTE</h3>
        </div>
      </div>
    </div>
    <div className="container">
      <TextWithImg TextWithImgHeader="Über uns" img={sikaKraml}>
        Wir sind Ondrej und Jiri, diese Schulungen sind unser gemeinsames
        Joint-Venture. Wir sind beide Softwareentwickler, der eine bei Slush
        Pool, der andere bei ZIGPOS. Uns verbindet eine Leidenschaft für das
        Leiten von Workshops, die uns bereits in kleine Unternehmen und große
        Konzerne geführt hat.
        <br />
        Neben Workshops und Vorträgen bieten wir auch Consulting und an. Für
        kleinere Projekte sind wir auch zu haben.
        <br />
        <br />
      </TextWithImg>
    </div>
  </div>
);

export default Index;
