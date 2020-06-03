import React from "react";
import styled, { css } from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import ondrej_chair from "@app/data/pictures/landing-page/ondrej_chair.png";
import ondrej_mac from "@app/data/pictures/landing-page/ondrej_mac.png";
import ondrej_training from "@app/data/pictures/landing-page/ondrej_training.png";
import ondrej_table from "@app/data/pictures/landing-page/ondrej_table.png";

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

const Section = styled.div`
  margin: 3em 0;
`;

const TextBeige = styled.span`
  color: #c8bfb0 !important;
`;

const HeaderBox = styled.div`
  width: 1078px;
  padding: 5em 0 6em 0;
`;

const Center = styled.div`
  text-align: center;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const RoomyRow = styled(Row)`
  margin-top: 3em;
`;

const MarginBottom = styled.div`
  margin-bottom: 6em;
`;

const OndMac = styled.img`
  height: 700px;
  margin-top: -100px;
  margin-bottom: -508px;
`;

const Li = styled.li`
  font-size: 1.75rem;
  color: #131480;
  list-style: none;
  /* padding-left: 1em; */
  padding: 1em 1em 1em 2em;
  :after {
    content: "";
    height: 0.5em;
    width: 0.5em;
    background: #131480;
    display: block;
    position: absolute;
    transform: rotate(45deg);
    top: 1.45em;
    left: 0;
  }
`;
const Page = () => {
  const Background = styled.div`
    padding: 1em 0 2em 0;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 400px;
    overflow: visible;
    height: 100%;
    width: 100%;
    ${props =>
      props.blue &&
      css`
        background-color: #131480;
      `}
    ${props =>
      props.light_grey &&
      css`
        background-color: #ececec;
      `}
  `;
  return (
    <>
      <Background img={ondrej_chair} blue>
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
      </Background>
      <Container>
        <Section>
          <Center>
            <SectionHeader>S ČÍM VÁM POMOHU</SectionHeader>
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
        </Section>
        <Section>
          <Row>
            <Col md={6}>
              <Img src={ondrej_training} />
            </Col>
            <Col md={6}>
              <Center>
                <SectionHeader>moji klienti</SectionHeader>
              </Center>
              <Companies />
            </Col>
          </Row>
        </Section>
        <Section>
          <SectionHeader>KONTAKTUJTE MĚ</SectionHeader>
          <RoomyRow>
            <Col md={4}>
              <Button href="#">Zavolat</Button>
            </Col>
            <Col md={4}>
              <Button href="#">Poslat email</Button>
            </Col>
            <Col md={4}>
              <OndMac src={ondrej_mac} />
            </Col>
          </RoomyRow>
        </Section>
      </Container>
      <Background blue>
        <Container>
          <Section>
            <SectionHeader white tight>
              MŮJ PŘÍBĚH
            </SectionHeader>
            <RoomyRow>
              <Col md={8}>
                <Text white>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </Text>
              </Col>
            </RoomyRow>
          </Section>
        </Container>
      </Background>
      <Background light_grey>
        <Section>
          <RoomyRow>
            <Col md={5}>
              <Img src={ondrej_table}></Img>
            </Col>
            <Col md={7}>
              {/* <Center> */}
              <SectionHeader>PROČ SE MNOU?</SectionHeader>
              {/* </Center> */}
              <Text>
                <Row>
                  <Col md={6}>
                    <Li>Zkušenosti</Li>
                  </Col>
                  <Col md={6}>
                    <Li>Reference</Li>
                  </Col>
                  <Col md={6}>
                    <Li>Otevřenost</Li>
                  </Col>
                  <Col md={6}>
                    <Li>Komplexní pohled</Li>
                  </Col>
                </Row>
              </Text>
            </Col>
          </RoomyRow>
        </Section>
        {/* </Container> */}
      </Background>
    </>
  );
};

export default Page;
