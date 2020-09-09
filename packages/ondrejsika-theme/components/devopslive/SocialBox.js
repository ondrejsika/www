import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import Button from "@app/ondrejsika-theme/components/lp/LP-button";

const FlexBox = styled.a`
  display: flex;
  align-items: stretch;
  height: 500px;
`;
const Center = styled.div`
  text-align: center;
`;
const Background = styled.div`
  padding: 3em 3em;
  background-color: #131480;
  color: white !important;
  :hover {
    background-color: #16178f;
  }
`;
const SocialBox = props => (
  <>
    <Col md={6}>
      <FlexBox href={props.href} style={{ textDecoration: "none" }}>
        <Background>
          {/* <div className="p-5"> */}
          <Center>
            <img src={props.icon} className="p-5" width="183" />
          </Center>
          <h3>{props.header}</h3>
          <p>{props.text}</p>
          <Center>
            <Button inverse huge href={props.button}>
              Přihlásit
            </Button>
          </Center>
          {/* </div> */}
        </Background>
      </FlexBox>
    </Col>
  </>
);

export default SocialBox;
