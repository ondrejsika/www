import React from "react";
import styled, { css } from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Head from "next/head";

import ondrej_chair from "@app/data/pictures/landing-page/ondrej_chair.png";
import ondrej_mac from "@app/data/pictures/landing-page/ondrej_mac.png";
import ondrej_training from "@app/data/pictures/landing-page/ondrej_training.png";
import ondrej_table from "@app/data/pictures/landing-page/ondrej_table.png";
// import ondrej_consulting from "@app/data/pictures/landing-page/ondrej_consulting.png";

import mail from "@app/data/pictures/landing-page/mail-blue.svg";
import mail_grey from "@app/data/pictures/landing-page/mail.svg";
import arrow from "@app/data/pictures/landing-page/arrow.svg";
import phone from "@app/data/pictures/landing-page/phone.svg";

import Button from "@app/ondrejsika-theme/components/Lp-button";
import Text from "@app/ondrejsika-theme/components/Lp-text";
import Box from "@app/ondrejsika-theme/components/Lp-Box";
import SectionHeader from "@app/ondrejsika-theme/components/Lp-sectionHeader";
import Companies from "@app/ondrejsika-theme/components/Lp-companies";

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
  margin-top: 3em;
`;

// const PaddingTop = styled.div`
//   padding-top: 6em;
// `;

const Li = styled.li`
  list-style: none;
  padding: 1em 1em 1em 2em;
  :after {
    content: "♦";
    height: 0.5em;
    width: 0.5em;
    color: #131480;
    position: absolute;
    top: 1.35em;
    left: 0;
  }
`;
const H3 = styled.h3`
  font-size: 1.75rem;
  color: #131480;
  ${props =>
    props.white &&
    css`
      color: white !important;
    `}
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
    @media only screen and (max-width: 1319px) {
      background-image: none;
    }
    ${props =>
      props.paddingBottom &&
      css`
        padding-bottom: ${props.paddingBottom};
      `}
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

  const HeaderBox = styled.div`
    padding: 5em 0 6em 0;
    ${props =>
      props.big &&
      css`
        padding: 6em 0 6em 0 !important;
      `}
  `;

  const IconBtn = styled.img`
    vertical-align: text-top;
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
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Background blue paddingBottom="0">
        <Container>
          <Row>
            <Col lg={7}>
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
              <Button inverse href="#help">
                Zjistit vice
                <IconBtn padding_left src={arrow} />
              </Button>
            </Col>
            <Col lg={5}>
              <img src={ondrej_chair} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Background>
      <Background light_grey id="help">
        <Container>
          <Center>
            <SectionHeader>S ČÍM VÁM POMOHU</SectionHeader>
          </Center>

          <Row>
            <Col md={4} sm={12}>
              <Box
                header="IMPLEMENTACE DEVOPS PIPELINE"
                text="Zavedu open-source DevOps do Vaší firmy. Nastavím nástroje a procesy
                    tak, abyste automaticky, spolehlivě a rychle doručovali novou funkcionalitu Vašim zákazníkům."
              />
            </Col>
            <Col md={4} sm={12}>
              <Box
                header={
                  <span>
                    KONZULTACE
                    <br />& SUPPORT
                  </span>
                }
                text="Vyřeším Váš konkrétní problém formou konzultací, čímž se vyvarujete zbytečných a drahých chyb. Já a můj team Vám budeme oporou při provozu Vaší DevOps infrastruktury formou jednoho z našich support plánů."
              />
            </Col>
            <Col md={4} sm={12}>
              <Box
                header={
                  <span>
                    ŠKOLENÍ
                    <br /> VAŠEHO TÝMU
                  </span>
                }
                text="Vyškolím Váš team tak, aby mohl sám a efektivně vytvořit DevOps pipeline a pracovat s ním. Vše si vyzkoušíme na hands-on workshopech po jejichž absolvování budete schopni bezpečně spravovat a rychle rozvíjet Vase DevOps prostředí."
              />
            </Col>
          </Row>
        </Container>
      </Background>
      <Container>
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
              <Button href="tel:+420773452376">
                <IconBtn padding_right src={phone} />
                Zavolat
              </Button>
            </Col>
            <Col md={4}>
              <Button href="mailto:ondrej@sika.io">
                <IconBtn padding_right src={mail_grey} />
                Poslat&nbsp;email
              </Button>
            </Col>
          </RoomyRow>
        </Section>
      </Container>
      <Background blue style={{ position: "relative" }}>
        <Container>
          <Section>
            <SectionHeader white tight>
              MŮJ PŘÍBĚH
            </SectionHeader>
            <RoomyRow>
              <Col lg={8} md={12}>
                <Text white>
                  K projektu prvního a nejúspěšnějšího Bitcoinového těžařského
                  poolu v společnosti Braiins System jsem se přidal v čase jeho
                  kompletního přepisování a škálování na robustnější
                  infrastrukturu. Náročné požadavky na sofistikovanou a
                  distribuovanou IT infrastrukturu stávající z desítek serverů
                  rozmístěných na třech kontinentech nedávaly jinou možnost jako
                  hned od začátku nasadit ty nejnovější DevOps technologie. Měl
                  jsem tedy unikátní možnost osahat si open-source DevOps
                  technologie a 5 let pracovat s týmem skvělých IT architektů a
                  vizionářů - Honzou Čapkem, Pavlem Moravcem a Markem Palatinem.
                </Text>
              </Col>
            </RoomyRow>
          </Section>
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
          <img src={ondrej_mac} style={{ height: "800px" }} />
        </Col>
      </Background>
      <Background light_grey>
        <Section>
          <RoomyRow>
            <Col md={5} sm={12}>
              <Img src={ondrej_table}></Img>
            </Col>
            <Col md={7} sm={12}>
              <SectionHeader>PROČ DO TOHO JÍT SE MNOU?</SectionHeader>
              <Text>
                <Row>
                  <Col md={6}>
                    <Li>
                      <H3>
                        Dlouholeté <br />
                        zkušenosti
                      </H3>
                    </Li>
                  </Col>
                  <Col md={6}>
                    <Li>
                      <H3>
                        Komplexní <br />
                        pohled
                      </H3>
                    </Li>
                  </Col>
                  <Col md={6}>
                    <Li>
                      <H3>
                        Výborné <br />
                        reference
                      </H3>
                    </Li>
                  </Col>
                  <Col md={6}>
                    <Li>
                      <H3>
                        Maximální <br />
                        otevřenost
                      </H3>
                    </Li>
                  </Col>
                </Row>
              </Text>
            </Col>
          </RoomyRow>
        </Section>
      </Background>
      {/* <Container>
        <Section>
          <Center>
            <SectionHeader>IMPLEMENTATION STUDY</SectionHeader>
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
        <Container>
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
                  <img src={mail} /> Napište mi
                </Button>
              </HeaderBox>
            </Col>
          </Row>
        </Container>
      </Background>
    </>
  );
};

export default Page;
