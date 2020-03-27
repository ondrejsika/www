import React from "react";
import Head from "next/head";

import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import default_colors from "@app/ondrejsika-theme/config/colors";

import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrejsika-theme/components/Header";
import TwoCol from "@app/ondrejsika-theme/components/TwoCol";
import References from "@app/ondrejsika-theme/components/References";
import Price from "@app/ondrejsika-theme/components/Price";
import "@app/course-landing/components/TwitterRecommendations";
import Translate from "@app/common/components/Translate";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";
import ondrejsika from "@app/data/pictures/ondrejsika.jpg";

import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";
import PipedriveContactForm from "@app/ondrejsika-theme/components/PipedriveContactForm";

const Border = styled.div`
  border: 1px solid ${default_colors.LIGHT_GREY};
  border-radius: 5px;
  margin-bottom: 1em;
`;

const Course = props => (
  <div>
    <Head>
      <title>
        {props.course_title} -{" "}
        {(props.site && props.site.default_title) || "Ondrej Sika"}
      </title>
    </Head>
    <Header
      site={props.site}
      websiteHeader={props.course_title}
      text={
        <Translate
          lang={props.lang}
          cs="Nezávazně poptat školení"
          en="Ask for a training"
          de="Schulung anfragen"
        />
      }
      logo={props.logo}
    />
    <div className="container course-page mt-3">
      {props.show_sessions && (
        <>
          <h2>
            <Translate
              lang={props.lang}
              cs="Vypsané termíny"
              en="Public session"
              de="Termine"
            />
          </h2>
          <UpcomingSessions
            hide_add_to_google_calendar={props.hide_add_to_google_calendar}
            lang={props.lang}
            site_name={props.site && props.site.name}
            location={props.location}
            course_id={props.course_id}
            limit={3}
          />
        </>
      )}
      {props.children}
    </div>
    <div className="container mb-4 mt-4">
      <Row>
        <Col md={7}>
          <Markdown source={props.description} />
          {props.col1 && props.col2 && (
            <TwoCol
              col1={<Markdown source={props.col1} />}
              col2={<Markdown source={props.col2} />}
            />
          )}
        </Col>
        <Col md={5}>
          <Border>
            <div className="text-center p-3">
              <img
                src={ondrejsika}
                className="img-fluid rounded-circle mb-3"
                width="140"
              />
              <h4>Ondřej Šika</h4>
            </div>
            <p className="p-3">
              <Translate
                lang={props.lang}
                cs="Jsem freelance DevOps konzultant a lektor. Zlepšuji práci
                vývojářských týmu zaváděním efektivních procesů ve vývoji.
                Naučím Vás používat prověřené nástroje a technologie, které
                povedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho
                software."
                sk="Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím. Školím prevažne Docker a CI, ktorý spolu s Dockerom veľmi úzko súvisí. Ďalšie školenia nájdete na mojom webe [ondrej-sika.cz](https://ondrej-sika.cz/). Všetky kurzy vediem osobne. S Dockerom mám viac ako štyri roky skúseností v rámci komerčného vývoja softvéru. Docker používam denne vo vývoji, ale aj na produkcii a prácu bez neho si už neviem ani predstaviť."
              />
            </p>
          </Border>

          <Price
            PriceHeader={
              <Translate
                lang={props.lang}
                cs="Cena za školení"
                en="Price"
                de="Preis"
              />
            }
            PriceBtn={
              <Translate
                lang={props.lang}
                cs="Nezávazně poptat školení"
                en="Request Training"
              />
            }
          >
            <Translate
              lang={props.lang}
              cs="Otevřený termín"
              en="Public session"
              de="Öffentlicher Termin"
            />
            : {props.price_self_funded}{" "}
            <Translate
              lang={props.lang}
              cs="bez DPH"
              en="excl. VAT"
              de="zzgl. MwSt"
            />
            <br />
            <Translate
              lang={props.lang}
              cs="Firemní školení"
              en="Company traning (in-house)"
              de="On-Premise Schulung"
            />
            : {props.price_in_house}{" "}
            <Translate
              lang={props.lang}
              cs="bez DPH"
              en="excl. VAT"
              de="zzgl. MwSt"
            />
          </Price>

          <PipedriveContactForm lang={props.lang} />
        </Col>
      </Row>
      <div className="container">
        {props.twitter_recommendations &&
          props.twitter_recommendations.length > 0 && (
            <>
              {props.recommendations && (
                <References ids={props.recommendations} lang={props.lang} />
              )}
              <h3>Ohlasy z Twitteru</h3>
              <TwitterRecommendations ids={props.twitter_recommendations} />
            </>
          )}
      </div>
    </div>

    <div className="container"></div>
  </div>
);

export default Course;
