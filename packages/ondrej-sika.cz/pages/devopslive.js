import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import events from "@app/data/devopslive.yml";
import Markdown from "@app/common/components/Markdown";
import Text from "@app/ondrejsika-theme/components/lp/LP-text";
import SectionHeader from "@app/ondrejsika-theme/components/lp/LP-sectionHeader";
import Background from "@app/ondrejsika-theme/components/lp/LP-background";
import Point from "@app/ondrejsika-theme/components/lp/LP-point";
import ondrej_chair from "@app/data/pictures/landing-page/tinipng/ondrej_chair.png";
import Button from "@app/ondrejsika-theme/components/lp/LP-button";
import ondrej_table from "@app/data/pictures/landing-page/tinipng/ondrej_table.png";
import slack from "@app/data/pictures/social-networks/slack.svg";
import Sessions from "@app/ondrejsika-theme/components/devopslive/Sessions";
import ColorBox from "@app/ondrejsika-theme/components/devopslive/ColorBox";

const MainTitle = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  font-weight: bold;
  letter-spacing: 0px;
  opacity: 1;
  color: white;

  font-size: 2.5rem;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
`;

const Section = styled.div`
  margin: 3em 0;
`;
const TextBeige = styled.span`
  color: #c8bfb0 !important;
`;
const Center = styled.div`
  text-align: center;
`;
const RoomyRow = styled(Row)`
  margin-bottom: 4em;
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Page = () => {
  return (
    <>
      <Background blue paddingBottom="0">
        <Container>
          <Row>
            <Col lg={8}>
              <MainTitle className="pt-md-5">
                DevOps <br />
                live
              </MainTitle>
            </Col>
            <Col lg={4}>
              <Img src={ondrej_chair} />
            </Col>
          </Row>
        </Container>
      </Background>
      <Background light_grey>
        <Container>
          <SectionHeader>
            Posuňme spolu firemní DevOps do 21. století
          </SectionHeader>
          <ColorBox white>
            DevOps live je můj zbrusu nový online stream kde si budeme povídat
            na zajímavé témata přibližně jednou za dva týdny. <br />
            Cílem streamu je seznámit Vás s nejnovější open-source DevOps
            architekturou, která šetří Váš čas i peníze. Sdílet s Vámi užitečné
            tipy, které povedou k rychlejšímu vývoji a bezpečnějšímu provozu
            vašeho software. Tyto technologie jsem pomáhal nasazovat a školit ve
            stovce firem, mezi nimi například v globálním startupu 3D tiskárny
            Průša, v korporátech jako o2, ale i na Ministerstvu Obrany ČR.
            Začínám v září a vybral jsem 3 nejpopulárnější témata o které
            projevili zájem mí zákazníci a blízký okruh mých kamarádů
            programátorů. Zahlasujte za další nebo navrhněte svoje. Vybudujeme
            spolu online komunitu programátorů, kteří posunou DevOps ve svých
            firmách na novou úroveň. Skrolujte níže a najdete odkazy na můj
            DevOps Live newsletter & Slack kanál.
          </ColorBox>
          <Section>
            <SectionHeader>příští TERMÍN</SectionHeader>
            <ColorBox blue>
              <TextBeige className="pt-4">
                {events[0].date} od {events[0].time}
              </TextBeige>
              <h3 className="pb-2 bold">{events[0].title}</h3>
              <Row>
                <Col md={6}>
                  <p className="pb-4 pt-3">
                    <Markdown source={events[0].about} />
                  </p>
                </Col>
                <Col
                  md={6}
                  className="pt-3"
                  style={{ borderLeft: "5px solid #c8bfb0" }}
                >
                  <ul>
                    <p className="pb-4">
                      <Markdown source={events[0].points} />
                    </p>
                  </ul>
                </Col>
                <Col md={6}>
                  <Center>
                    <Button inverse huge href="#">
                      Přihlásit
                    </Button>
                  </Center>
                </Col>
                <Col
                  md={6}
                  className="pt-3"
                  style={{ borderLeft: "5px solid #c8bfb0" }}
                >
                  <Center>
                    <h3
                      className="pt-3"
                      style={{
                        color: "#c8bfb0"
                      }}
                    >
                      Zdarma nebo 500 Kč
                    </h3>
                  </Center>
                </Col>
              </Row>
            </ColorBox>
            <SectionHeader>Nadcházející témata</SectionHeader>

            {events.map((event, i) => {
              if (i == 0 && i < 3) return;
              return (
                <div key={i}>
                  <Sessions
                    date={event.date}
                    time={event.time}
                    title={event.title}
                    about={event.about}
                    points={event.points}
                  />
                </div>
              );
            })}
          </Section>

          <Section>
            <RoomyRow style={{ marginRight: "0" }}>
              <Col md={5} sm={12}>
                <Img src={ondrej_table} />
              </Col>
              <Col md={7} sm={12}>
                <ColorBox white>
                  <div className="pl-5">
                    <SectionHeader>Archiv</SectionHeader>
                    {/* {events.map((event, i) => (
                    <Point full point={events.title} text="something" />
                  ))} */}
                    <Point full point="DevOps v praxi" datum="33.3.2020" />
                    <Point full point="Základy Proxmox" datum="33.3.2020" />
                    <Point
                      full
                      point="Rozdíly mezi jednotlivými programy"
                      datum="33.3.2020"
                    />
                    <Text></Text>
                    <Button huge href="/">
                      ZOBRAZIT VŠE
                    </Button>
                  </div>
                </ColorBox>
              </Col>
            </RoomyRow>
          </Section>
          <Section>
            <Row>
              <Col md={6}>
                <ColorBox blue>
                  <div className="p-5 m-2">
                    <Center>
                      <img src={slack} className="p-5" />
                    </Center>
                    <h3>DevOps live community</h3>
                    <p>
                      Zapojte se do života naší komunity prostřednictvím
                      veřejného slack kanálu
                    </p>
                  </div>
                </ColorBox>
              </Col>
              <Col md={6}>
                <ColorBox blue>
                  <div className="p-5">
                    <Center>
                      <img src={slack} className="p-5 m-2" />
                    </Center>

                    <h3>DevOps live newsletter</h3>
                    <p>
                      Zapojte se do života naší komunity prostřednictvím
                      veřejného slack kanálu
                    </p>
                  </div>
                </ColorBox>
              </Col>
            </Row>
          </Section>
        </Container>
      </Background>
    </>
  );
};

export default Page;
