import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import Button from "@app/ondrejsika-theme/components/Button";

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
const Margin = styled.div`
  padding: 2em 0;
`;

const SocialBox = props => (
  <>
    <Col md={6}>
      <FlexBox href={props.href} style={{ textDecoration: "none" }}>
        <Background>
          <Center>
            <img src={props.icon} className="p-5" width="183" />
          </Center>
          <h3>{props.header}</h3>
          <p>{props.text}</p>
          <Center>
            <Margin>
              <Button type="landing-page" size="big" href={props.button}>
                Přihlásit
              </Button>
            </Margin>
          </Center>
        </Background>
      </FlexBox>
    </Col>
  </>
);

export default SocialBox;
