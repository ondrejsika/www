import React from "react";
import styled from "styled-components";
import gitlab_w from "@app/data/pictures/courses/white/gitlab_ci.svg";
import docker_w from "@app/data/pictures/courses/white/docker.svg";
import git_w from "@app/data/pictures/courses/white/git.svg";
import terraform_w from "@app/data/pictures/courses/white/terraform.svg";
import kubernetes_w from "@app/data/pictures/courses/white/kubernetes.svg";

import gitlab_b from "@app/data/pictures/courses/blue/gitlab_ci.svg";
import docker_b from "@app/data/pictures/courses/blue/docker.svg";
import git_b from "@app/data/pictures/courses/blue/git.svg";
import terraform_b from "@app/data/pictures/courses/blue/terraform.svg";
import kubernetes_b from "@app/data/pictures/courses/blue/kubernetes.svg";

const Img = styled.img`
  height: 100px;
  padding: 0 2em;
`;

const TechnologyIcons = props => {
  return (
    <>
      {props.white && (
        <Img
          src={
            {
              gitlab: gitlab_w,
              docker: docker_w,
              git: git_w,
              terraform: terraform_w,
              kubernetes: kubernetes_w
            }[props.icon]
          }
        />
      )}
      {props.blue && (
        <Img
          src={
            {
              gitlab: gitlab_b,
              docker: docker_b,
              git: git_b,
              terraform: terraform_b,
              kubernetes: kubernetes_b
            }[props.icon]
          }
        />
      )}
    </>
  );
};
export default TechnologyIcons;
