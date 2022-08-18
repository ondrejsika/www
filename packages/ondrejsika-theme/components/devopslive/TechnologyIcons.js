import React from "react";
import styled from "styled-components";
import gitlab_w from "@app/data/pictures/courses/white/gitlab_ci.svg";
import docker_w from "@app/data/pictures/courses/white/docker.svg";
import git_w from "@app/data/pictures/courses/white/git.svg";
import terraform_w from "@app/data/pictures/courses/white/terraform.svg";
import kubernetes_w from "@app/data/pictures/courses/white/kubernetes.svg";
import cloudflare_w from "@app/data/pictures/courses/white/cloudflare.svg";
import github_w from "@app/data/pictures/technologies/github-white.png";
import skaffold_w from "@app/data/pictures/technologies/skaffold-w.png";
import argocd_w from "@app/data/pictures/courses/white/argocd-large.png";
import boundary_w from "@app/data/pictures/technologies/boundary-w.png";
import github_actions_w from "@app/data/pictures/technologies/github-actions-w.png";

import gitlab_b from "@app/data/pictures/courses/blue/gitlab_ci.svg";
import docker_b from "@app/data/pictures/courses/blue/docker.svg";
import git_b from "@app/data/pictures/courses/blue/git.svg";
import terraform_b from "@app/data/pictures/courses/blue/terraform.svg";
import kubernetes_b from "@app/data/pictures/courses/blue/kubernetes.svg";
import cloudflare_b from "@app/data/pictures/courses/blue/cloudflare.svg";

// TODO: Replace with white & blue
import prometheus_tmp from "@app/data/pictures/courses/prometheus.png";
import cloud_init_tmp from "@app/data/pictures/technologies/cloud-init-color.png";
import rke_tmp from "@app/data/pictures/technologies/rke-color.png";
import github_b_tmp from "@app/data/pictures/technologies/github-black.png";
import skaffold_tmp from "@app/data/pictures/technologies/skaffold.png";
import longhorn_tmp from "@app/data/pictures/technologies/longhorn.png";
import argocd_tmp from "@app/data/pictures/courses/argocd-black-large.png";
import boundary_tmp from "@app/data/pictures/technologies/boundary.png";
import github_actions_tmp from "@app/data/pictures/technologies/github-actions.png";

const Img = styled.img`
  height: 100px;
  padding: 0 2em;
`;

const TechnologyIcons = (props) => {
  return (
    <>
      {props.white && (
        <Img
          src={
            {
              gitlab: gitlab_w.src,
              docker: docker_w.src,
              git: git_w.src,
              terraform: terraform_w.src,
              kubernetes: kubernetes_w.src,
              prometheus: prometheus_tmp.src,
              cloudflare: cloudflare_w.src,
              "cloud-init": cloud_init_tmp.src,
              rke: rke_tmp.src,
              github: github_w.src,
              skaffold: skaffold_w.src,
              longhorn: longhorn_tmp.src,
              argocd: argocd_w.src,
              boundary: boundary_w.src,
              "github-actions": github_actions_w.src
            }[props.icon]
          }
        />
      )}
      {props.blue && (
        <Img
          src={
            {
              gitlab: gitlab_b.src,
              docker: docker_b.src,
              git: git_b.src,
              terraform: terraform_b.src,
              kubernetes: kubernetes_b.src,
              prometheus: prometheus_tmp.src,
              cloudflare: cloudflare_b.src,
              "cloud-init": cloud_init_tmp.src,
              rke: rke_tmp.src,
              github: github_b_tmp.src,
              skaffold: skaffold_tmp.src,
              longhorn: longhorn_tmp.src,
              argocd: argocd_tmp.src,
              boundary: boundary_tmp.src,
              "github-actions": github_actions_tmp.src
            }[props.icon]
          }
        />
      )}
    </>
  );
};
export default TechnologyIcons;
