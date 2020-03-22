import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import nodejs from "@app/data/pictures/courses/nodejs-sq.png";
import php from "@app/data/pictures/courses/php-sq.png";
import react from "@app/data/pictures/courses/react-sq.webp";
import gitlab from "@app/data/pictures/courses/gitlab-sq.png";
import kubernetes from "@app/data/pictures/courses/kubernetes-sq.png";
import docker from "@app/data/pictures/courses/docker-sq.png";
import javascript from "@app/data/pictures/courses/javascript-sq.png";

const Img = styled.img`
  width: 160px;
`;

const BackgroundReact = styled.div`
  background-color: #282c33;
`;

const BackgroundDocker = styled.div`
  padding-top: 0.3em;
  background-color: #349bea;
`;

const CourseBar = () => (
  <Container>
    <Row>
      <Img src={nodejs} />
      <Img src={php} />
      <BackgroundReact>
        <Img src={react} />
      </BackgroundReact>
      <Img src={gitlab} />
      <Img src={kubernetes} />
      <BackgroundDocker>
        <Img src={docker} />
      </BackgroundDocker>
      <Img src={javascript} />
    </Row>
  </Container>
);
export default CourseBar;
