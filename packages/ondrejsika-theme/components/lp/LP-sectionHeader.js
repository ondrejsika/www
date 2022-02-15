import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  padding: 4em 0;
  ${(props) =>
    props.tight &&
    css`
      padding: 3em 0 2em 0;
    `}
`;
const Header = styled.h3`
  font-family: "IBM Plex Mono", monospace;
  font-size: 2.5em;
  line-height: 1.5em;
  color: #131480;
  border-bottom: 5px solid #c8bfb0;
  box-sizing: border-box;
  display: inline;
  text-transform: uppercase;
  ${(props) =>
    props.white &&
    css`
      color: white;
    `}
`;

const SectionHeader = (props) => (
  <>
    <Wrapper tight={props.tight}>
      <Header white={props.white}>{props.children}</Header>
    </Wrapper>
  </>
);

export default SectionHeader;
