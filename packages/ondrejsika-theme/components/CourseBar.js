import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import docker from "@app/data/pictures/courses/white/docker.svg";
import git from "@app/data/pictures/courses/white/git.svg";
import gitlabci from "@app/data/pictures/courses/white/gitlab_ci.svg";
import k8s from "@app/data/pictures/courses/white/kubernetes.svg";
import react from "@app/data/pictures/courses/white/react.svg";
import terraform from "@app/data/pictures/courses/white/terraform.svg";
import ansible from "@app/data/pictures/courses/white/ansible.svg";
import rancher from "@app/data/pictures/courses/white/rancher.svg";
import prometheus from "@app/data/pictures/courses/white/prometheus.svg";
import proxmox from "@app/data/pictures/courses/white/proxmox.svg";
import elk from "@app/data/pictures/courses/white/elk.svg";
import digitalocean from "@app/data/pictures/courses/digitalocean-w.png";

import default_colors from "@app/ondrejsika-theme/config/colors";
import { Row, Col, Container } from "react-bootstrap";

const H4 = styled.h4`
  color: white;
  text-align: center;
  font-size: 0.8em;
  padding-top: 0.4em;
`;

const Trainera = styled.div`
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.PRIMARY) ||
    default_colors.BLUE};
`;
const Header = styled.h3`
  font-size: 2.5em;
  font-weight: 700;
  padding: 0.5em 0;
  text-align: center;
  color: white;
`;

const Box = styled.div`
  width: 100%;
  max-width: 221px;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 2px;
  margin-bottom: 5px;
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.PRIMARY) ||
    default_colors.BLUE};
  &:hover {
    border: 2px solid
      ${props =>
        (props.site && props.site.colors && props.site.colors.SECONDARY) ||
        default_colors.WHITE};
  }
`;

const Img = styled.img`
  max-width: 90%;
  height: auto;
  padding: 0 1em 1em 1em;
`;

const MyCol = styled(Col)`
  padding: 0px;
`;

const TriangleBottomRight = styled.div`
  width: 100%;
  height: 80px;
  /* background: #088958; */
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.PRIMARY) ||
    default_colors.BLUE};
  clip-path: polygon(-1px 100%, 100% -1px, 100% 100%);
  margin-bottom: -1px;
  ${props =>
    props.hiddenTop &&
    css`
      display: none;
    `}
`;

const TriangleTopLeft = styled.div`
  width: 100%;
  height: 80px;
  /* background: #088958; */
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.PRIMARY) ||
    default_colors.BLUE};
  clip-path: polygon(-1px 100%, 100% -1px, -1px -1px);
  ${props =>
    props.hiddenBottom &&
    css`
      display: none;
    `}
`;

const Card = props => {
  let training = { en: "training", cs: "skoleni" }[props.lang || "cs"];

  return (
    <MyCol md={2} sm={4} xs={6}>
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
    </MyCol>
  );
};

const CourseBar = props => {
  return (
    <>
      <TriangleBottomRight hiddenTop={props.hiddenTop} site={props.site} />
      <Trainera site={props.site}>
        <Container>
          <Header>{props.LectureImgHeader}</Header>
          <div className="container-flex banner-courses pb-3">
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
                courseName="Prometheus"
                courseId="prometheus"
                courseImg={prometheus}
              />
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
                courseName="Ansible"
                courseId="ansible"
                courseImg={ansible}
              />
              <Card
                site={props.site}
                lang={props.lang}
                courseName="Rancher"
                courseId="rancher"
                courseImg={rancher}
              />
              {(() => {
                if (!props.lang || props.lang == "cs") {
                  return (
                    <>
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
                      <Card
                        site={props.site}
                        lang={props.lang}
                        courseName="Proxmox"
                        courseId="proxmox"
                        courseImg={proxmox}
                      />
                      <Card
                        site={props.site}
                        lang={props.lang}
                        courseName="Digital Ocean"
                        courseId="digitalocean"
                        courseImg={digitalocean}
                      />
                    </>
                  );
                }
              })()}
            </Row>
          </div>
        </Container>
      </Trainera>
      <TriangleTopLeft site={props.site} hiddenBottom={props.hiddenBottom} />
    </>
  );
};

export default CourseBar;
