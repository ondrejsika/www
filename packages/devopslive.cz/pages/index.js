import React from "react";
// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import H1 from "../components/H1";
import CourseBar from "../components/CourseBar";

const Index = () => (
  <>
    <Container>
      <H1>DEVOPSLIVE</H1>
    </Container>

    <CourseBar
      courses={[
        [
          "Sprava Gitlabu a Githubu pomoci Terraformu",
          "sprava-gitlabu-a-githubu-pomoci-terraformu",
          "31.5.2020"
        ],
        [
          "Persistentni Ceph storage pro Kuberneretes pomoci Rooku",
          "persistentni-ceph-storage-pro-kuberneretes-pomoci-rooku",
          "31.5.2020"
        ],
        [
          "Bare metal Kubernetes pomoci RKE",
          "bare-metal-kubernetes-pomoci-rke",
          "31.5.2020"
        ],
        [
          "Docker monitoring pomoci Promethea a Alertmanageru",
          "docker-monitoring-pomoci-promethea-a-alertmanageru",
          "31.5.2020"
        ],
        [
          "Prometheus Exportery, ktere pouzivam (Node, DB, Docker, Kubernetes, Proxmox)",
          "prometheus-exportery-ktere-pouzivam",
          "3.5.2020"
        ]
      ]}
    />
  </>
);
export default Index;
