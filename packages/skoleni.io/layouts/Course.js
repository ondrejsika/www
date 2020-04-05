import React from "react";
import Header from "@app/skoleni.io/components/Header";
import { Container } from "react-bootstrap";
import Markdown from "@app/common/components/Markdown";
import styled from "styled-components";
import Link from "next/link";

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

const Course = props => (
  <>
    <Header
      site={props.site}
      header={props.header}
      lecturer={props.lecturer}
      lecturerId={props.lecturerId}
      headerImg={props.headerImg}
    />
    <Container>
      <Markdown source={props.description} />
      <Wrapper>
        <PrizeHeader>Cena školení</PrizeHeader>
        <p>
          Otevřený termín: <b>{props.price_open}</b> bez DPH
        </p>
        <p>
          Firemní školení: <b>{props.price_in_house}</b> bez DPH
        </p>
      </Wrapper>
      <Link href="#form">
        <InquiryBtn>Nezávazně poptat školení</InquiryBtn>
      </Link>
    </Container>
  </>
);

export default Course;
