import React from "react";
import Head from "next/head";

import { Col, Row, Container } from "react-bootstrap";

import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrejsika-theme/components/Header";
import TwoCol from "@app/ondrejsika-theme/components/TwoCol";
import References from "@app/ondrejsika-theme/components/References";
import Price from "@app/ondrejsika-theme/components/Price";
import "@app/course-landing/components/TwitterRecommendations";
import Translate from "@app/common/components/Translate";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";
import StatisticBar from "@app/ondrejsika-theme/components/StatisticBar";
import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";
import AboutLecturer from "@app/ondrejsika-theme/components/AboutLecturer";
import CourseInquiryForm from "@app/ondrejsika-theme/layouts/CourseInquiryForm";
import ConvinceYourBoss from "@app/ondrejsika-theme/components/ConvinceYourBoss";

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
            site={props.site}
            hide_add_to_google_calendar={props.hide_add_to_google_calendar}
            lang={props.lang}
            site_name={props.site && props.site.name}
            location={props.location}
            course_id={props.course_id}
            limit={3}
            show_session_link={true}
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
          <AboutLecturer lang={props.lang} />
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
          <div className="m-3" id="form">
            <CourseInquiryForm
              site={props.site}
              course_slug={props.course_id}
            />
          </div>
        </Col>
      </Row>
    </div>

    <ConvinceYourBoss site={props.site} lang={props.site.lang} />
    <StatisticBar
      site={props.site}
      showDiagonalBackground={true}
      showBothDiagonalBackground={true}
      NumberOfPeople="150+"
      NumberOfPeopleHeader={
        <Translate
          lang={props.lang}
          cs="Počet odškolených lidí"
          en="Training attendees"
          de="Training attendees"
        />
      }
      NumberOfCompanies="15+"
      NumberOfCompaniesHeader={
        <Translate
          lang={props.lang}
          cs="Počet firem ve spolupráci"
          en="Companies trained"
          de="Companies trained"
        />
      }
      NumberOfLectures="20+"
      NumberOfLecturesHeader={
        <Translate
          lang={props.lang}
          cs="Počet uskutečněných školení"
          en="Training sessions"
          de="Training sessions"
        />
      }
    />
    <Container>
      {props.recommendations && (
        <References ids={props.recommendations} lang={props.lang} />
      )}
      {props.twitter_recommendations &&
        props.twitter_recommendations.length > 0 && (
          <>
            <h3>Ohlasy z Twitteru</h3>
            <TwitterRecommendations ids={props.twitter_recommendations} />
          </>
        )}
    </Container>
  </div>
);

export default Course;
