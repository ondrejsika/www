import React from "react";
import styled from "styled-components";
import OurTeam from "@app/skoleni.io/components/OurTeam";
import ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import janpospisil from "@app/data/pictures/lecturers/janpospisil.jpg";
import { Container } from "react-bootstrap";
import Header from "@app/skoleni.io/components/Header";

const Margin = styled.div`
  margin: 22em;
`;

const lektori = () => (
  <>
    <Header header="Nasi lektori" underline="- vybirame z tech nejlepsich" />

    <Container>
      <OurTeam
        lecturers={[
          [ondrejsika, "Ondřej Šika", "ondrejsika", "DevOps"],
          [janpospisil, "Honza Pospíšil", "janpospisil", "xxxxxxx"],
          [ondrejsika, "Ondřej Šika", "ondrejsika", "xxxxxxx"],
          [janpospisil, "Honza Pospíšil", "janpospisil", "xxxxxxx"],
          [ondrejsika, "Ondřej Šika", "ondrejsika"],
          [ondrejsika, "Ondřej Šika", "ondrejsika"],
          [janpospisil, "Honza Pospíšil", "janpospisil"]
        ]}
      />
      <Margin />
    </Container>
  </>
);
export default lektori;
