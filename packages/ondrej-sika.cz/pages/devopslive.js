import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import events_yaml from "@app/data/devopslive.yml";
import Markdown from "@app/common/components/Markdown";
import SectionHeader from "@app/ondrejsika-theme/components/lp/LP-sectionHeader";
import Background from "@app/ondrejsika-theme/components/lp/LP-background";
import ondrej_chair from "@app/data/pictures/landing-page/tinipng/ondrej_chair.png";
import Button from "@app/ondrejsika-theme/components/Button";

import devops from "@app/data/pictures/devops.svg";
// import ondrej_table from "@app/data/pictures/landing-page/tinipng/ondrej_table.png";
import slack from "@app/data/pictures/social-networks/slack.svg";
import newsletter from "@app/data/pictures/newsletter.svg";
import SocialBox from "@app/ondrejsika-theme/components/devopslive/SocialBox";
import Sessions from "@app/ondrejsika-theme/components/devopslive/Sessions";
import ColorBox from "@app/ondrejsika-theme/components/devopslive/ColorBox";
import TechnologyIcons from "@app/ondrejsika-theme/components/devopslive/TechnologyIcons";
import MainBar from "@app/ondrejsika-theme/components/MainBar";
import StaticDB from "@app/common/staticdb";

let db = new StaticDB();
db.add("events", events_yaml);
db.setCursor("events");
db.filter("active", true);
let events = db.get();

let db2 = new StaticDB();
db2.add("events", events_yaml);
db2.setCursor("events");
db2.filter("active", false);
let past_events = db2.get();

const MainTitle = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  letter-spacing: 0px;
  opacity: 1;
  color: white;
  font-size: 3.3rem;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
`;
const Header = styled.h1`
  font-size: 5rem;
  font-weight: bold;
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
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
const Underline = styled.span`
  border-bottom: 5px solid #c8bfb0;
  padding-right: 50px;
`;
const Margin = styled.div`
  padding: 2em 0;
`;
const B = styled.span`
  font-weight: bold !important;
`;
const Text = styled.p`
  color: white;
`;
const Page = () => {
  return (
    <>
      <Head>
        <title>DevOps Live by Ondřej Šika</title>
      </Head>
      <div className="d-block d-lg-none">
        <MainBar header="DevOps Live" />
      </div>
      <Background blue paddingBottom="0" className="d-none d-lg-block">
        <Container>
          <Row>
            <Col md={2}>
              <img
                src={devops.src}
                className="pt-md-5 img-fluid"
                style={{ height: "280px" }}
              />
            </Col>
            <Col lg={6} style={{ marginLeft: "-50px" }}>
              <MainTitle className="pt-md-5">
                <Header>DevOps </Header>
                <TextBeige>live</TextBeige>
                <br />
                by <Underline>Ondřej Šika</Underline>
              </MainTitle>
            </Col>
            <Col lg={4}>
              <Img src={ondrej_chair.src} />
            </Col>
          </Row>
        </Container>
      </Background>
      <Background light_grey style={{ paddingBottom: "2em" }}>
        <Container>
          <SectionHeader tight>Live coding streamy z DevOps</SectionHeader>
          <p style={{ fontSize: "2.3rem" }}>
            DevOps live jsou streamy live codingu zajímavých témat z DevOps,
            novinky nebo témata, na která se při školeních nedostanu.
          </p>
          {events.length != 0 && (
            <div>
              <ColorBox blue>
                <div style={{ maxWidth: "500px" }}>
                  <TextBeige className="pt-4">
                    {events[0].date} od {events[0].time}
                  </TextBeige>
                  <h3 className="pt-1 bold">{events[0].title}</h3>
                  <Text className="">{events[0].about}</Text>
                </div>
                <Row>
                  <Col md={6} className="pt-3">
                    <p className="pb-4">
                      <Markdown
                        source={events[0].points}
                        styled={{ paddingLeft: "40px", marginTop: "20px" }}
                      />
                    </p>
                  </Col>
                  <Col md={6}>
                    <Center>
                      {events[0].technologies.map((technology, i) => (
                        <TechnologyIcons white key={i} icon={technology} />
                      ))}
                    </Center>
                  </Col>
                  <Col md={6}>
                    <Center>
                      <Margin>
                        <Button
                          type="landing-page"
                          size="huge"
                          href={
                            events[0].eventbrite ||
                            "mailto:ondrej@sika.io?subject=Mam zajem o DevOps Live: " +
                              events[0].title
                          }
                        >
                          <B>Přihlásit</B>
                        </Button>
                      </Margin>
                    </Center>
                  </Col>
                  <Col md={6} className="pt-3">
                    <Center>
                      <h3
                        className="pt-3"
                        style={{
                          color: "#c8bfb0"
                        }}
                      >
                        300 Kč
                      </h3>
                    </Center>
                  </Col>
                </Row>
              </ColorBox>

              {events.length > 1 && (
                <SectionHeader tight>Nadcházející témata</SectionHeader>
              )}

              {events.map((event, i) => {
                if (i == 0 && i < 3) return;
                return (
                  <div key={i}>
                    <Sessions event={event} />
                  </div>
                );
              })}
            </div>
          )}
          <Section className="d-none d-lg-block">
            <Row>
              <SocialBox
                icon={slack}
                href="https://sikapublic.slack.com/archives/C018ULJEJMD"
                header="DevOps live community"
                text="Zapojte se do online komunity programátorů, přes veřejný Slack kanál."
                button="https://sikapublic.slack.com/archives/C018ULJEJMD"
              />

              <SocialBox
                icon={newsletter}
                href="http://eepurl.com/dwRHHP"
                header="DevOps live newsletter"
                text="Zapojte se do života naší komunity prostřednictvím DevOps live newsletteru."
                button="http://eepurl.com/dwRHHP"
              />
            </Row>
          </Section>
          <SectionHeader tight>Proběhlé streamy</SectionHeader>
          {past_events.reverse().map((event, i) => {
            return (
              <div key={i}>
                <Sessions event={event} past={true} />
              </div>
            );
          })}
        </Container>
      </Background>
    </>
  );
};

export default Page;
