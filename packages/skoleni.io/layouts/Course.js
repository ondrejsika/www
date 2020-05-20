import React from "react";
import StaticDB from "@app/common/staticdb";
import Header from "@app/skoleni.io/components/Header";
import { Container } from "react-bootstrap";
import Markdown from "@app/common/components/Markdown";
import styled from "styled-components";
import Link from "next/link";
import data from "@app/data/training/courses.yml";

const InquiryBtn = styled.a`
  border: 2px solid #1f1f1f;
  padding: 0.475rem 0.85rem;
  margin: 0.5em 0 1em 0;
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  &:hover {
    background-color: #c8bfb0;
    cursor: pointer;
  }
`;

const PrizeHeader = styled.h4``;

const Wrapper = styled.div`
  padding-top: 1em;
`;

const Course = props => {
  let course_id = props.course_id;
  let lang = props.lang;
  let location = props.location;

  let db = new StaticDB();
  db.add("courses", data);
  db.setCursor("courses");
  db.filter("id", course_id);
  db.filterExists("skoleniio");
  let course = db.getOne();

  let price_open = course.price.open[location];
  let price_in_house = course.price.in_house[location];
  let description = course.description[lang];
  let course_name = course.skoleniio.name;
  let lecturer_name = course.skoleniio.lecturer;
  return (
    <>
      <Header
        site={props.site}
        header={course_name}
        lecturer={lecturer_name}
        lecturer_id={lecturer_name}
      />
      <Container>
        <Markdown source={description} />
        <Wrapper>
          <PrizeHeader>Cena školení</PrizeHeader>
          <p>
            Otevřený termín: <b>{price_open}</b> bez DPH
          </p>
          <p>
            Firemní školení: <b>{price_in_house}</b> bez DPH
          </p>
        </Wrapper>
        <Link href="#form">
          <InquiryBtn>Nezávazně poptat školení</InquiryBtn>
        </Link>
      </Container>
    </>
  );
};

export default Course;
