import React from "react";
import OurTeam from "@app/skoleni.io/components/OurTeam";
import { Container } from "react-bootstrap";
import H3 from "@app/skoleni.io/components/H3";

const Lektori = () => (
  <>
    <Container>
      <H3>Lektoři</H3>
    </Container>
    <OurTeam
      lecturers={[
        ["Ondřej Šika", "ondrejsika"],
        ["Michael Kaplan", "michaelkaplan"],
        ["Vojtěch Mareš", "vojtechmares"]
      ]}
    />
  </>
);
export default Lektori;
