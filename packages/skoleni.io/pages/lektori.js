import React from "react";
import OurTeam from "@app/skoleni.io/components/OurTeam";
import { Container } from "react-bootstrap";
import H3 from "@app/skoleni.io/components/H3";
import lecturers_yaml from "@app/data/skoleni.io/lecturers.yml";
import StaticDB from "@app/common/staticdb";

let db = new StaticDB();
db.add("lecturers", lecturers_yaml);
db.setCursor("lecturers");
let lecturers = db.get();

const Lektori = () => (
  <>
    <Container>
      <H3>Lektoři</H3>
    </Container>
    <OurTeam lecturers={lecturers} />
  </>
);
export default Lektori;
