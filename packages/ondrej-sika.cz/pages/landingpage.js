import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import ondrej_chair from "@app/data/pictures/landing-page/ondrej_chair.png";
import ondrej_training from "@app/data/pictures/landing-page/ondrej_training.png";

import Button from "@app/ondrejsika-theme/components/Lp-button";
import Text from "@app/ondrejsika-theme/components/Lp-text";
import Box from "@app/ondrejsika-theme/components/Lp-Box";
import SectionHeader from "@app/ondrejsika-theme/components/Lp-sectionHeader";
import Companies from "@app/ondrejsika-theme/components/Lp-companies";

const MainTitle = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  font-weight: bold;
  font-size: 45px;
  letter-spacing: 0px;
  opacity: 1;
  color: white;
`;

const TextBeige = styled.span`
  color: #c8bfb0 !important;
`;

const BackgroundBlue = styled.div`
  background-color: #131480;
  padding-bottom: 2em;
  background-image: url(${ondrej_chair});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 400px;
`;

const HeaderBox = styled.div`
  width: 1078px;
  padding: 5em 0 6em 0;
`;

const Center = styled.div`
  text-align: center;
  margin: 3em 0;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const MarginBottom = styled.div`
  margin-bottom: 6em;
`;
const Page = () => (
  <>
    <BackgroundBlue>
      <Container>
        <HeaderBox>
          <MainTitle>
            Jsem <TextBeige>Ondřej Šika</TextBeige>
            <br /> a pomohu vám s open-source
            <br />
            <TextBeige>DevOps technologiemi</TextBeige>!
          </MainTitle>
          <Text white>
            Snížime spolu náklady na IT, vyřešíme technologický dluh a
            připravíme Vaši IT architekturu na rapidní škálování.
          </Text>
          <Button inverse href="#">
            Zjistit vice
          </Button>
        </HeaderBox>
      </Container>
    </BackgroundBlue>
    <Container>
      <Center>
        <SectionHeader center>S ČÍM VÁM POMOHU</SectionHeader>
      </Center>

      <MarginBottom>
        <Row>
          <Col md={4}>
            <Box
              text="Zavedu open-source DevOps do Vaší firmy. Nastavím nástroje a procesy
          tak, abyste automaticky, spolehlivě a rychle doručovali novou
          funkcionalitu Vašim zákazníkům."
            />
          </Col>
          <Col md={4}>
            <Box text="Vyřeším Váš konkrétní problém formou konzultací, čímž se vyvarujete zbytečných a drahých chyb. Já a můj team Vám budeme oporou při provozu Vaší DevOps infrastruktury formou jednoho z našich support plánů." />
          </Col>
          <Col md={4}>
            <Box text="Vyškolím Váš team tak, aby mohl sám a efektivně vytvořit DevOps pipeline a pracovat s ním. Vše si vyzkoušíme na hands-on workshopech po jejichž absolvování budete schopni bezpečně spravovat a rychle rozvíjet Vase DevOps prostředí." />
          </Col>
        </Row>
      </MarginBottom>

      <Row>
        <Col md={6}>
          <Img src={ondrej_training} />
        </Col>
        <Col md={6}>
          <Center>
            <SectionHeader center>moji klienti</SectionHeader>
          </Center>
          <Companies />
        </Col>
      </Row>
    </Container>
  </>
);

export default Page;
