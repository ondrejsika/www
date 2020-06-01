import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
// import ondrejsika_chair from "@app/data/pictures/landing-page/ondrejsika4x_chair.png";
import ondrej_chair from "@app/data/pictures/landing-page/ondrejsika4x_chair.png";

import Button from "@app/ondrejsika-theme/components/Lp-button";
import Text from "@app/ondrejsika-theme/components/Lp-text";

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
  padding-top: 158px;
  padding-left: 100px;
  padding-right: 75px;
  margin: 0;
`;

const Page = () => (
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
);

export default Page;
