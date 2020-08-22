import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
// import Button from "@app/ondrejsika-theme/components/lp/LP-button";
import ColorBox from "@app/ondrejsika-theme/components/devopslive/ColorBox";

const FlexBox = styled.a`
  display: flex;
  align-items: stretch;
  height: 600px;
`;
const Center = styled.div`
  text-align: center;
`;

const SocialBox = props => (
  <>
    <Col md={6}>
      <FlexBox href={props.href} style={{ textDecoration: "none" }}>
        <ColorBox blue>
          <div className="p-5 m-2">
            <Center>
              <img src={props.icon} className="p-5" width="183" />
            </Center>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
          </div>
        </ColorBox>
      </FlexBox>
    </Col>
  </>
);

export default SocialBox;
