import React from "react";
import styled, { css } from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Head from "next/head";
import CourseBar from "@app/ondrejsika-theme/components/CourseBar";

import ondrej_chair from "@app/data/pictures/landing-page/tinipng/ondrej_chair.png";
import ondrej_mac from "@app/data/pictures/landing-page/tinipng/ondrej_mac.png";
import ondrej_training from "@app/data/pictures/landing-page/tinipng/ondrej_training.png";
import ondrej_table from "@app/data/pictures/landing-page/tinipng/ondrej_table.png";
// import ondrej_consulting from "@app/data/pictures/landing-page/ondrej_consulting.png";

import mail_grey from "@app/data/pictures/landing-page/mail.svg";
import arrow from "@app/data/pictures/landing-page/arrow.svg";
import phone from "@app/data/pictures/landing-page/phone.svg";

import Button from "@app/ondrejsika-theme/components/lp/LP-button";
import FloatingBtn from "@app/ondrejsika-theme/components/FloatingBtn";

import Text from "@app/ondrejsika-theme/components/lp/LP-text";
import Box from "@app/ondrejsika-theme/components/lp/LP-box";
import SectionHeader from "@app/ondrejsika-theme/components/lp/LP-sectionHeader";
import Companies from "@app/ondrejsika-theme/components/lp/LP-companies";
import Background from "@app/ondrejsika-theme/components/lp/LP-background";
import Point from "@app/ondrejsika-theme/components/lp/LP-point";

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

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const RoomyRow = styled(Row)`
  margin-bottom: 4em;
`;

// const PaddingTop = styled.div`
//   padding-top: 6em;
// `;

const H3 = styled.h3`
  font-size: 1.75rem;
  color: #131480;
  ${props =>
    props.white &&
    css`
      color: white !important;
    `}
`;
const FloatingSvg = styled.img`
  margin-top: 20px;
  vertical-align: center;
  height: 20px;
`;

const BaseLandingPage = props => {
  const HeaderBox = styled.div`
    padding: 5em 0 6em 0;
    ${props =>
      props.big &&
      css`
        padding: 6em 0 6em 0 !important;
      `}
  `;

  const IconBtn = styled.img`
    margin-bottom: 2px;
    vertical-align: center;
    height: 20px;
    ${props =>
      props.padding_right &&
      css`
        padding-right: 10px;
      `}
    ${props =>
      props.padding_left &&
      css`
        padding-left: 10px;
      `}
  `;

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <FloatingBtn href="mailto:ondrej@sika.io">
        <FloatingSvg src={mail_grey} />
      </FloatingBtn>
      <Background blue paddingBottom="0">
        <Container>
          <Row>
            <Col lg={7}>
              <MainTitle className="pt-md-5">{props.headerText}</MainTitle>
              <Text white>{props.headerAbout}</Text>
              <Button inverse href="#help">
                {props.findOutMore}
                <IconBtn padding_left src={arrow} />
              </Button>
            </Col>
            <Col lg={5}>
              <Img src={ondrej_chair} />
            </Col>
          </Row>
        </Container>
      </Background>
      {/* light_grey */}
      <Background id="help">
        <Container>
          <Center>
            <SectionHeader>{props.sectionBoxesHeader}</SectionHeader>
          </Center>
          <Row>
            <Col md={4} sm={12}>
              <Box header={props.boxHeader1} text={props.boxText1} number="1" />
            </Col>
            <Col md={4} sm={12}>
              <Box header={props.boxHeader2} text={props.boxText2} number="2" />
            </Col>
            <Col md={4} sm={12}>
              <Box header={props.boxHeader3} text={props.boxText3} number="3" />
            </Col>
          </Row>
        </Container>
      </Background>
      {/* light_grey */}
      {!props.hideTrainingSection && (
        <Background id="training">
          <Center>
            <SectionHeader>{props.trainingHeader}</SectionHeader>
          </Center>
          <CourseBar site={props.site} lang={props.site.lang} />
        </Background>
      )}
      <Container>
        <Section>
          <Row>
            <Col md={6}>
              <Img src={ondrej_training} />
            </Col>
            <Col md={6}>
              <Center>
                <SectionHeader>{props.sectionMyClientsHeader}</SectionHeader>
              </Center>
              <Companies />
            </Col>
          </Row>
        </Section>
        <Section>
          <SectionHeader>{props.sectionContactMeHeader}</SectionHeader>
          <RoomyRow>
            <Col lg={4} md={6}>
              <Button href="https://calendly.com/ondrejsika/evening-call">
                <IconBtn padding_right src={phone} />
                {props.call}
              </Button>
            </Col>
            <Col lg={4} md={6}>
              <Button href="mailto:ondrej@sika.io">
                <IconBtn padding_right src={mail_grey} />
                {props.email}
              </Button>
            </Col>
          </RoomyRow>
        </Section>
      </Container>
      <Background blue style={{ position: "relative" }}>
        <Container>
          {/* <Section> */}
          <SectionHeader white tight>
            {props.sectionMyStoryHeader}
          </SectionHeader>
          {/* <RoomyRow> */}
          <Row className="mt-3 mb-5">
            <Col lg={8} md={12}>
              <Text white>{props.MyStoryText}</Text>
            </Col>
          </Row>
          {/* </RoomyRow> */}
          {/* </Section> */}
        </Container>
        <Col
          className="d-none d-lg-block"
          lg={4}
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            overflowX: "hidden"
          }}
        >
          <img src={ondrej_mac} style={{ height: "800px", zIndex: "2" }} />
        </Col>
      </Background>
      <Background light_grey>
        <Section>
          <RoomyRow style={{ marginRight: "0" }}>
            <Col md={5} sm={12}>
              <Img src={ondrej_table} />
            </Col>
            <Col md={7} sm={12}>
              <SectionHeader>{props.sectionWhyMeHeader}</SectionHeader>
              <Point full point={props.point1} text={props.text1} />
              <Point full point={props.point2} text={props.text2} />
              <Point full point={props.point3} text={props.text3} />
              <Point full point={props.point4} text={props.text4} />
              <Text></Text>
            </Col>
          </RoomyRow>
        </Section>
      </Background>
      {/* <Container>
        <Section>
          <Center>
            <SectionHeader>{props.sectionStory}</SectionHeader>
          </Center>
          <Row>
            <Col md={12}>
              <Center>
                {" "}
                <H3>
                  1<br /> text text
                </H3>
                <Text>
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
              </Center>
            </Col>
            <Col md={7}>
              <PaddingTop>
                <Center>
                  <H3>
                    2<br /> text text
                  </H3>
                </Center>
                <Text>
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
              </PaddingTop>
            </Col>
            <Col md={5}>
              <Img src={ondrej_consulting}></Img>
            </Col>
            <Col md={12}>
              <Center>
                <H3>
                  3<br /> text text
                </H3>
              </Center>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </Text>
            </Col>
          </Row>
        </Section>
      </Container> */}
      <Background blue>
        {/* <Container>
          <Row>
            <Col md={6}>
              <HeaderBox>
                <MainTitle>
                  <TextBeige>Ondřej Šika</TextBeige>
                </MainTitle>
                <Text white>ondrej@sika.io</Text>
                <Text white>+420 773 452 376</Text>
              </HeaderBox>
            </Col>
            <Col md={6}>
              <HeaderBox big>
                <H3 white>Máte zájem o moje služby?</H3>
                <Button inverse huge href="mailto:ondrej@sika.io">
                  {false && <img src={mail} />}
                  Napište mi
                </Button>
              </HeaderBox>
            </Col>
          </Row>
        </Container> */}
        <Container>
          <Row>
            <Col md={12}>
              <HeaderBox big className="text-center">
                <H3 white>{props.sectionCooperationText}</H3>
                <Button inverse huge href="mailto:ondrej@sika.io">
                  {props.writeMe}
                </Button>
              </HeaderBox>
            </Col>
          </Row>
        </Container>
      </Background>
    </>
  );
};

BaseLandingPage.TextBeige = TextBeige;
BaseLandingPage.H3 = H3;
export default BaseLandingPage;
