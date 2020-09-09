import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const FlexBox = styled.a`
  display: flex;
  align-items: stretch;
  height: 500px;
`;
const Center = styled.div`
  text-align: center;
`;
const Background = styled.div`
  padding: 1.5em 1em;
  background-color: #131480;
  color: white !important;
`;
const SocialBox = props => (
  <>
    <Col md={6}>
      <FlexBox href={props.href} style={{ textDecoration: "none" }}>
        <Background>
          <div className="p-5 m-2">
            <Center>
              <img src={props.icon} className="p-5" width="183" />
            </Center>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
          </div>
        </Background>
      </FlexBox>
    </Col>
  </>
);

export default SocialBox;
