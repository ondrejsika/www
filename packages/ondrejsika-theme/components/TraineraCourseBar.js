import React from "react";
import Link from "next/link";
import styled from "styled-components";
import docker from "@app/data/pictures/courses/docker.svg";
import git from "@app/data/pictures/courses/git.svg";
import gitlabci from "@app/data/pictures/courses/gitlab-ci.svg";
import k8s from "@app/data/pictures/courses/kubernetes.png";
import react from "@app/data/pictures/courses/react.svg";
import terraform from "@app/data/pictures/courses/terraform.png";
import ansible from "@app/data/pictures/courses/ansible.png";
import rancher from "@app/data/pictures/courses/rancher.png";
import prometheus from "@app/data/pictures/courses/prometheus.png";
import color from "../config/colors";

const H4 = styled.h4`
  color: black;
  text-align: center;
  font-size: 0.8em;
  padding-top: 0.4em;
`;

const Box = styled.div`
  width: 20%;
  min-width: 110px;
  border: 1px solid ${color.LIGHT_GREY};
  border-radius: 5px;
  margin: 3px;
`;
const Trainera = styled.div``;

const Card = props => {
  let training = { en: "training", cs: "skoleni" }[props.lang || "cs"];
  return (
    <Box>
      <Link href={`/${training}/${props.courseId}`}>
        <a className="course-header">
          <H4>
            <span>{props.courseName}</span>
          </H4>
          <img src={props.courseImg} className="img img-fluid p-2" />
        </a>
      </Link>
    </Box>
  );
};

const TraineraCourseBar = props => {
  return (
    <Trainera>
      <h2 className="pt-4 pb-2">{props.LectureImgHeader}</h2>
      <div className="container-flex banner-courses">
        <div className="d-flex flex-wrap flex-sm-wrap flex-lg-nowrap d-lg-flex flex-row">
          <Card
            lang={props.lang}
            courseName="Docker"
            courseId="docker"
            courseImg={docker}
          />
          <Card
            lang={props.lang}
            courseName="Kubernetes"
            courseId="kubernetes"
            courseImg={k8s}
          />
          <Card
            lang={props.lang}
            courseName="Git"
            courseId="git"
            courseImg={git}
          />
          <Card
            lang={props.lang}
            courseName="Gitlab CI"
            courseId="gitlab-ci"
            courseImg={gitlabci}
          />
          <Card
            lang={props.lang}
            courseName="Ansible"
            courseId="ansible"
            courseImg={ansible}
          />
          <Card
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
                    lang={props.lang}
                    courseName="Terraform"
                    courseId="terraform"
                    courseImg={terraform}
                  />
                  <Card
                    lang={props.lang}
                    courseName="Rancher"
                    courseId="rancher"
                    courseImg={rancher}
                  />
                  <Card
                    lang={props.lang}
                    courseName="React"
                    courseId="react"
                    courseImg={react}
                  />
                </>
              );
            }
          })()}
        </div>
      </div>
    </Trainera>
  );
};

export default TraineraCourseBar;
