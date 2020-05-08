import React from "react";
// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CourseBar from "../components/CourseBar";

const Index = () => (
  <>
    <Container>{/* <H1>DEVOPSLIVE</H1> */}</Container>

    <CourseBar
      courses={[
        [
          "Sprava Gitlabu a Githubu pomoci Terraformu",
          "sprava-gitlabu-a-githubu-pomoci-terraformu",
          "31.5.2020",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque lorem vitae fermentum consectetur. Phasellus luctus quam at elementum consectetur. Cras ornare felis porta odio porta, in bibendum ipsum dictum. "
        ],
        [
          "Persistentni Ceph storage pro Kuberneretes pomoci Rooku",
          "persistentni-ceph-storage-pro-kuberneretes-pomoci-rooku",
          "31.5.2020",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque lorem vitae fermentum consectetur. Phasellus luctus quam at elementum consectetur. Cras ornare felis porta odio porta. "
        ],
        [
          "Bare metal Kubernetes pomoci RKE",
          "bare-metal-kubernetes-pomoci-rke",
          "31.5.2020",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque lorem vitae fermentum consectetur. Phasellus luctus quam at elementum consectetur. Cras ornare felis porta odio porta, in bibendum ipsum dictum. Cras ornare felis porta odio porta, in bibendum ipsum dictum."
        ],
        [
          "Docker monitoring pomoci Promethea a Alertmanageru",
          "docker-monitoring-pomoci-promethea-a-alertmanageru",
          "31.5.2020",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque lorem vitae fermentum consectetur. Phasellus luctus quam at elementum consectetur."
        ],
        [
          "Prometheus Exportery, ktere pouzivam (Node, DB, Docker, Kubernetes, Proxmox)",
          "prometheus-exportery-ktere-pouzivam",
          "3.5.2020",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque lorem vitae fermentum consectetur."
        ]
      ]}
    />
  </>
);
export default Index;
