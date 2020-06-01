import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
// import ondrejsika_chair from "@app/data/pictures/landing-page/ondrejsika4x_chair.png";
import ondrej_chair from "@app/data/pictures/landing-page/ondrejsika4x_chair.png";

import Button from "@app/ondrejsika-theme/components/Lp-button";
import Text from "@app/ondrejsika-theme/components/Lp-text";
import Box from "@app/ondrejsika-theme/components/Lp-Box";
import SectionHeader from "@app/ondrejsika-theme/components/Lp-sectionHeader";

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
`;
const HeaderBgImg = styled.img`
  left: 1172px;
  width: 453px;
  height: 533px;
  background: transparent url() 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const MyContainer = styled(Container)`
  padding-top: 4em;
  padding-left: 100px;
  padding-right: 75px;
  margin: 0;
`;

const Center = styled.div`
  text-align: center;
  margin: 3em 0;
`;
const Layout = styled.div`
  padding-left: 100px;
  padding-right: 75px;
  margin-bottom: 16em;
`;
const Page = () => (
  <>
    <BackgroundBlue>
      <MyContainer>
        <Row>
          <Col md={8}>
            <MainTitle>
              Jsem <TextBeige>Ondřej Šika</TextBeige> a pomohu vám s open-source{" "}
              <TextBeige>DevOps technologiemi</TextBeige>!
            </MainTitle>
            <Text white>
              Snížime spolu náklady na IT, vyřešíme technologický dluh a
              připravíme Vaši IT architekturu na rapidní škálování.
            </Text>
            <Button inverse href="#">
              Zjistit vice
            </Button>
          </Col>
          <Col md={4}>
            <HeaderBgImg src={ondrej_chair} />
          </Col>
        </Row>
      </MyContainer>
    </BackgroundBlue>
    <Layout>
      <Center>
        <SectionHeader center>S ČÍM VÁM POMOHU</SectionHeader>
      </Center>
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
    </Layout>
  </>
);

export default Page;
