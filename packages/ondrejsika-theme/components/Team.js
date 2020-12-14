import React from "react";
import styled from "styled-components";
import colors from "../config/colors";
import { Row, Col } from "react-bootstrap";

const Img = styled.img`
  width: 100%;
  display: block;
`;
const H4 = styled.h4`
  font-size: 2em;
  font-weight: 700;
  text-transform: capitalize;
  padding-left: 10px;
  margin: -2.2em 0;
  padding-bottom: 2em;
  color: white;
`;

const H5 = styled.h5`
  font-size: 1.5em;
  text-transform: capitalize;
  padding-left: 10px;
  margin: -1em 0;
  padding-bottom: 1.5em;
  color: white;
`;

const GaplesCol = styled(Col)`
  padding-right: 0px;
  padding-left: 0px;
  margin: 0;
`;
const ImgWrapper = styled.div`
  ${H4}:hover & {
    background-color: ${colors.LIGHT_GREY};
  }
`;
const MyRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const Header = styled.h3`
  font-size: 2.5em;
  font-weight: 700;
  padding-top: 1em;
  padding-bottom: 0.5em;
  text-align: center;
`;

const Team = props => (
  <>
    {props.teamMembersHeader && props.teamMembers && (
      <>
        <Header>{props.teamMembersHeader}</Header>
        <MyRow>
          {props.teamMembers.map((teamMember, i) => (
            <GaplesCol xl={4} md={6} sm={6} xs={12} key={i}>
              <ImgWrapper>
                <Img src={teamMember[0]} fluid />
                <H4>{teamMember[1]}</H4>
                <H5>{teamMember[2]}</H5>
              </ImgWrapper>
            </GaplesCol>
          ))}
        </MyRow>
      </>
    )}
    <Header>{props.mentorHeader}</Header>
    <MyRow>
      {props.mentors.map((mentor, i) => (
        <GaplesCol xl={3} md={6} sm={6} xs={12} key={i}>
          <ImgWrapper>
            <Img src={mentor[0]} fluid />
            <H4>{mentor[1]}</H4>
            <H5>{mentor[2]}</H5>
          </ImgWrapper>
        </GaplesCol>
      ))}
    </MyRow>
  </>
);
export default Team;
