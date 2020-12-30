import React from "react";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import Header from "@app/course-landing/components/Header";
import ButtonOutline from "@app/course-landing/components/ButtonOutline";
import TextFrame from "@app/course-landing/components/TextFrame";
import MyClients from "@app/course-landing/components/MyClients";
import ThreeCol from "@app/course-landing/components/ThreeCol";
import Navigation from "@app/course-landing/components/Navigation";
import Recommendation from "@app/course-landing/components/Recommendation";
import FooterOndrejSika from "@app/course-landing/components/FooterOndrejSika";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";

import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";
import Translate from "@app/common/components/Translate";
import ondrejsika from "@app/data/pictures/ondrejsika.jpg";

import courses_file from "@app/data/training/courses.yml";
import StaticDB from "@app/common/staticdb";
import Button from "@app/ondrejsika-theme/components/Button";

const Center = styled.div`
  text-align: center;
`;

const Page = props => {
  let site = props.site;
  let lang = props.site.lang;
  let location = props.site.location;

  let db = new StaticDB();
  db.add("courses", courses_file);
  db.setCursor("courses");
  db.filter("id", site.x_course);
  let course = db.getOne();

  let course_name = course.name[lang];
  let price_open = course.price.open[location];
  let price_in_house = course.price.in_house[location];
  let twitter_recommendations = course.twitter_recommendations[lang];
  let description = course.description[lang];
  let recommendations = course.recommendations[lang];
  if (!recommendations[2])
    throw new Error(
      `course-landing/component/Page requires more than 3 recommendations`
    );
  return (
    <>
      <Head>
        <title>
          {course_name} - {site.x_site_claim}
        </title>
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation wide={true} location={site.location} />
      <Header
        wide={true}
        websiteHeader={course_name}
        byName="Ondrej Sika"
        byUrl={`https://ondrej-sika.cz/?x_source=${site.name}`}
        logoUrl={site.x_logo}
      >
        <ButtonGroup>
          <Button href={site.x_inquiry_url} type="outline-secondary">
            <Translate
              lang={site.lang}
              cs="Nezávazně poptat školení"
              sk="Nezáväzne popýtať školenie"
              de="Ask for the training"
              en="Ask for the training"
            />
          </Button>
        </ButtonGroup>
        <ButtonGroup className="ml-2">
          <Button href={site.x_contact_link} type="outline-secondary">
            <Translate
              lang={site.lang}
              cs="Kontaktovat"
              sk="Kontaktovať"
              de="Contact me"
              en="Contact me"
            />
          </Button>
        </ButtonGroup>
      </Header>
      <Container>
        <h2 className="mb-0">
          <Translate
            lang={site.lang}
            cs="Otevřené termíny"
            sk="Otvorené termíny"
            de="Public session"
            en="Public session"
          />
        </h2>
        {props.show_session_link ? (
          <UpcomingSessions
            link_site_prefix="https://ondrej-sika.cz"
            limit={3}
            site_name={site.name}
            lang={site.lang}
            course_id={site.x_course}
            location={site.location}
          />
        ) : (
          <p>
            <Translate
              lang={site.lang}
              cs="Žádné veřejné kurzy nebyly vypsány"
              sk="Žádné veřejné kurzy nebyly vypsány"
              de="No public session scheduled yet"
              en="No public session scheduled yet"
            />
          </p>
        )}

        <Row>
          <Col md={7} sm={12}>
            <Markdown source={description} />
          </Col>
          <Col md={5} sm={12}>
            <TextFrame>
              <Center>
                <img
                  src={ondrejsika}
                  className="img-fluid rounded-circle mb-3"
                  width="140"
                />
                <h4>Ondrej Sika</h4>
              </Center>
              <p>
                <Translate
                  lang={site.lang}
                  cs="Jsem freelance DevOps konzultant a lektor. Zlepšuji práci vývojářských týmu zaváděním efektivních procesů ve vývoji. Naučím Vás používat prověřené nástroje a technologie, které povedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software."
                  sk="Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím. Školím prevažne Docker a CI, ktorý spolu s Dockerom veľmi úzko súvisí. Ďalšie školenia nájdete na mojom webe [ondrej-sika.cz](https://ondrej-sika.cz/). Všetky kurzy vediem osobne. S Dockerom mám viac ako štyri roky skúseností v rámci komerčného vývoja softvéru. Docker používam denne vo vývoji, ale aj na produkcii a prácu bez neho si už neviem ani predstaviť."
                  de="My name is Ondrej, I am a software engineer and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have worked for small companies, startups to big corporations. I have four years of experience with training."
                  en="My name is Ondrej, I am a software engineer and DevOps consultant, architect & lecturer. I lead mostly Docker courses and CI; they are both closely interrelated. I have worked for small companies, startups to big corporations. I have four years of experience with training."
                />
              </p>
            </TextFrame>
            <TextFrame>
              <h3>
                <Translate
                  lang={lang}
                  cs="Mám zájem o školení"
                  sk="Mám záujem o školenie"
                  de="I am interested in this training"
                  en="I am interested in this training"
                />
              </h3>
              <p>
                <Translate
                  lang={lang}
                  cs="Pokud máte zájem o školení, vyberte si variantu a pošlete nezávaznou poptávku."
                  sk="Ak máte záujem o školenie, neváhajte ma kontaktovať."
                  de=""
                  en=""
                />
              </p>
              <Row className="text-center mt-4">
                <Col lg={6} md={12}>
                  <h5>
                    <Translate
                      lang={lang}
                      cs="Otevřený termín"
                      sk="Otvorený termín"
                      de="Public session"
                      en="Public session"
                    />
                  </h5>
                  <div className="mb-2" style={{ fontSize: "1.3em" }}>
                    {price_open}
                  </div>
                  <ButtonOutline btnUrl={site.x_inquiry_url}>
                    <Translate
                      lang={lang}
                      cs="Nezávazně poptat"
                      sk="Nezáväzne popýtať"
                      de="Ask for the training"
                      en="Ask for the training"
                    />
                  </ButtonOutline>
                </Col>
                <Col lg={6} md={12}>
                  <h5>
                    <Translate
                      lang={lang}
                      cs="Firemní školení"
                      sk="Firemné školenia"
                      de="Company traning (in-house)"
                      en="Company traning (in-house)"
                    />
                  </h5>
                  <div className="mb-2" style={{ fontSize: "1.3em" }}>
                    {price_in_house}
                  </div>
                  <ButtonOutline btnUrl={site.x_inquiry_url}>
                    <Translate
                      lang={lang}
                      cs="Nezávazně poptat"
                      sk="Nezáväzne popýtať"
                      de="Ask for the training"
                      en="Ask for the training"
                    />
                  </ButtonOutline>
                </Col>
              </Row>
              <Col lg={12}>
                <h3>
                  <Translate
                    lang={lang}
                    cs="Dotazy"
                    sk="Otázky"
                    en="Questions"
                  />
                </h3>
                <Translate
                  lang={lang}
                  cs="Pokud máte jakýkoliv dotaz, naváhejte mi napsat na"
                  sk="Ak máte záujem o školenie, neváhajte ma kontaktovať"
                  de="If you have any question, let me know at"
                  en="If you have any question, let me know at"
                />{" "}
                <a
                  href={`mailto:ondrej@sika.io?subject=[${site.name}] Question about ${course_name}`}
                >
                  ondrej@sika.io
                </a>
              </Col>
            </TextFrame>
            {/* <TextFrame>
              <h3>Kontakt</h3>
              <p>
                <h4>Ondrej Sika</h4>
                <a href="tel:+420773452376">+420 773 452 376</a>
                <br /> <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>
              </p>
              <p>
                <a href="https://ondrej-sika.cz/kontakt">Fakturacni udaje</a>
              </p>
            </TextFrame> */}

            {/* <Contact /> */}
          </Col>
        </Row>
      </Container>
      <StatisticBar
        site={site}
        NumberOfPeople="150+"
        NumberOfPeopleHeader={
          <Translate
            lang={lang}
            cs="Počet odškolených lidí"
            sk="Počet účastníkov"
            de="Training attendees"
            en="Training attendees"
          />
        }
        NumberOfCompanies="15+"
        NumberOfCompaniesHeader={
          <Translate
            lang={lang}
            cs="firem proškoleno"
            sk="firiem preškolených"
            de="Companies trained"
            en="Companies trained"
          />
        }
        NumberOfLectures="20+"
        NumberOfLecturesHeader={
          <Translate
            lang={lang}
            cs="Počet uskutečněných školení"
            sk="školení"
            de="Training sessions"
            en="Training sessions"
          />
        }
      />
      <Container>
        <MyClients
          noBorder={true}
          HeaderClients={
            <Translate
              lang={lang}
              cs="Moji nejvýznamější klienti"
              sk="Moji nejvýznamější klienti"
              de="My Clients"
              en="My Clients"
            />
          }
        />
        {twitter_recommendations && twitter_recommendations.length > 0 && (
          <TwitterRecommendations ids={twitter_recommendations} />
        )}
        <ThreeCol
          header={
            <Translate
              lang={lang}
              cs="Reference"
              de="References"
              en="References"
            />
          }
          col1={<Recommendation id={recommendations[0]} lang={site.lang} />}
          col2={<Recommendation id={recommendations[1]} lang={site.lang} />}
          col3={<Recommendation id={recommendations[2]} lang={site.lang} />}
        />
      </Container>
      <FooterOndrejSika />
    </>
  );
};

export default Page;
