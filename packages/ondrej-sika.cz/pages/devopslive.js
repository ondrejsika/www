import React from "react";
import styled, { css } from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import events from "@app/data/devopslive.yml";
// import Article from "@app/ondrejsika-theme/layouts/Article";
import Markdown from "@app/common/components/Markdown";
// import Text from "@app/ondrejsika-theme/components/lp/LP-text";
// import Box from "@app/ondrejsika-theme/components/lp/LP-box";
import SectionHeader from "@app/ondrejsika-theme/components/lp/LP-sectionHeader";
// import Companies from "@app/ondrejsika-theme/components/lp/LP-companies";
import Background from "@app/ondrejsika-theme/components/lp/LP-background";
// import Point from "@app/ondrejsika-theme/components/lp/LP-point";
import ondrej_chair from "@app/data/pictures/landing-page/tinipng/ondrej_chair.png";
// import Button from "@app/ondrejsika-theme/components/lp/LP-button";
// import arrow from "@app/data/pictures/landing-page/arrow.svg";

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
// const TextBeige = styled.span`
//   color: #c8bfb0 !important;
// `;
// const Center = styled.div`
//   text-align: center;
// `;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const TextBox = styled.div`
  padding: 1em;
  ${props =>
    props.white &&
    css`
      background-color: white;
    `}
  ${props =>
    props.blue &&
    css`
      background-color: #131480;
      color: white !important;
    `}
`;

const Page = () => {
  // const IconBtn = styled.img`
  //   margin-bottom: 2px;
  //   vertical-align: center;
  //   height: 20px;
  //   ${props =>
  //     props.padding_right &&
  //     css`
  //       padding-right: 10px;
  //     `}
  //   ${props =>
  //     props.padding_left &&
  //     css`
  //       padding-left: 10px;
  //     `}
  // `;
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
              {/* <Text white>Livestreamy na popularni temata z DevOps</Text> */}
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
          <TextBox white>
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
          </TextBox>
          <Section>
            <SectionHeader>AKTUÁLNÍ TERMÍN</SectionHeader>
            <TextBox blue>
              {events.map((event, i) => {
                return (
                  <div key={i}>
                    <>
                      <p className="pt-4">
                        {event.date} od {event.time}
                      </p>
                      <h3 className="pb-4 bold">{event.title}</h3>
                      <Row>
                        <Col md={6}>
                          <p className="pb-4">
                            <Markdown source={event.about} />
                          </p>
                        </Col>
                        <Col md={6} style={{ borderLeft: "5px solid #c8bfb0" }}>
                          <ul>
                            <p className="pb-4">
                              <Markdown source={event.points} />
                            </p>
                          </ul>
                        </Col>
                      </Row>

                      {/* <Point>Seznámení s DevOps</Point>
                      <Point>Seznámení s DevOps vv</Point>
                      <Point>Seznámení s </Point>
                      <Point>Seznámení s DevOps</Point> */}
                    </>
                  </div>
                );
              })}
            </TextBox>
            {events.map((event, i) => {
              return (
                <div key={i}>
                  {(() => {
                    if (i > 0) {
                      return <hr className="hr-black" />;
                    }
                  })()}
                  <h3 className="pt-4 pb-4 bold">{event.title}</h3>
                  <p className="pb-4">
                    {event.date} od {event.time}
                  </p>
                  <p className="pb-4">
                    <Markdown source={event.about} />
                  </p>
                  <ul>
                    {/* {event.points.map((point, p) => {
                      <Point key={p}>{point}</Point>;
                    })} */}
                    {/* <Markdown source={event.points} /> */}
                  </ul>
                </div>
              );
            })}
          </Section>
        </Container>
      </Background>
    </>
  );
};

export default Page;
