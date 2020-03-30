import React from "react";
import styled from "styled-components";
import OurTeam from "@app/skoleni.io/components/OurTeam";
import ond from "@app/data/pictures/ondrejsika.jpg";
import JanPospisil from "@app/data/pictures/lecturers/janpospisil.jpg";
import { Container } from "react-bootstrap";

const Margin = styled.div`
  margin: 22em;
`;

const lektori = () => (
  <Container>
    <h1>Nasi lektori</h1>
    <OurTeam
      lecturers={[
        [ond, "Ondřej Šika"],
        [JanPospisil, "Honza Pospíšil"],
        [ond, "Ondřej Šika"],
        [JanPospisil, "Honza Pospíšil"],
        [ond, "Ondřej Šika"],
        [JanPospisil, "Honza Pospíšil"]
      ]}
    />
    <Margin />
  </Container>
);
export default lektori;
