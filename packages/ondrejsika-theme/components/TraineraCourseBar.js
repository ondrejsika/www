import React from "react";
import Link from "next/link";
import styled from "styled-components";
import docker from "@app/data/pictures/courses/white/docker.svg";
import git from "@app/data/pictures/courses/white/git.svg";
import gitlabci from "@app/data/pictures/courses/white/gitlab_ci.svg";
import k8s from "@app/data/pictures/courses/white/kubernetes.svg";
import react from "@app/data/pictures/courses/white/react.svg";
import terraform from "@app/data/pictures/courses/white/terraform.svg";
import ansible from "@app/data/pictures/courses/white/ansible.svg";
import rancher from "@app/data/pictures/courses/white/rancher.svg";
import prometheus from "@app/data/pictures/courses/white/prometheus.svg";
import elk from "@app/data/pictures/courses/white/elk.svg";

import color from "../config/colors";
import default_colors from "@app/ondrejsika-theme/config/colors";
import { Row } from "react-bootstrap";
const H4 = styled.h4`
  color: white;
  text-align: center;
  font-size: 0.8em;
  padding-top: 0.4em;
`;

const Trainera = styled.div`
  padding-bottom: 4.5em;
`;
const Header = styled.h3`
  font-size: 2.5em;
  font-weight: 700;
  padding-top: 2em;
  padding-bottom: 0.5em;
  text-align: center;
`;
const Card = props => {
  let training = { en: "training", cs: "skoleni" }[props.lang || "cs"];

  const Box = styled.div`
    width: 100%;
    max-width: 221px;
    text-align: center;
    border: 1px solid ${color.LIGHT_GREY};
    border-radius: 2px;
    margin-bottom: 5px;
    background-color: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      default_colors.BLUE};
  `;

  const Img = styled.img`
    max-width: 90%;
    height: auto;
  `;

  const Col = styled.div`
    flex: 0 0 20%;
    max-width: 20%;
    padding: 0px;
  `;

  return (
    <Col lg={2}>
      <Box site={props.site}>
        <Link href={`/${training}/${props.courseId}`}>
          <a className="course-header">
            <H4>
              <span>{props.courseName}</span>
            </H4>
            <Img src={props.courseImg} />
          </a>
        </Link>
      </Box>
    </Col>
  );
};

const TraineraCourseBar = props => {
  return (
    <Trainera>
      <Header>{props.LectureImgHeader}</Header>
      <div className="container-flex banner-courses">
        <Row>
          <Card
            site={props.site}
            lang={props.lang}
            courseName="Docker"
            courseId="docker"
            courseImg={docker}
          />
          <Card
            site={props.site}
            lang={props.lang}
            courseName="Kubernetes"
            courseId="kubernetes"
            courseImg={k8s}
          />
          <Card
            site={props.site}
            lang={props.lang}
            courseName="Git"
            courseId="git"
            courseImg={git}
          />
          <Card
            site={props.site}
            lang={props.lang}
            courseName="Gitlab CI"
            courseId="gitlab-ci"
            courseImg={gitlabci}
          />
          <Card
            site={props.site}
            lang={props.lang}
            courseName="Ansible"
            courseId="ansible"
            courseImg={ansible}
          />
          {/* </div>
        <div className="d-flex flex-wrap flex-sm-wrap flex-lg-nowrap d-lg-flex flex-row"> */}
          <Card
            site={props.site}
            lang={props.lang}
            courseName="Prometheus"
            courseId="prometheus"
            courseImg={prometheus}
          />

          {(() => {
            if (!props.lang || props.lang == "cs") {
              return (
                <>
                  <Card
                    site={props.site}
                    lang={props.lang}
                    courseName="Terraform"
                    courseId="terraform"
                    courseImg={terraform}
                  />
                  <Card
                    site={props.site}
                    lang={props.lang}
                    courseName="Rancher"
                    courseId="rancher"
                    courseImg={rancher}
                  />
                  <Card
                    site={props.site}
                    lang={props.lang}
                    courseName="React"
                    courseId="react"
                    courseImg={react}
                  />
                  <Card
                    site={props.site}
                    lang={props.lang}
                    courseName="Elk"
                    courseId="elk"
                    courseImg={elk}
                  />
                </>
              );
            }
          })()}
        </Row>
      </div>
    </Trainera>
  );
};

export default TraineraCourseBar;
