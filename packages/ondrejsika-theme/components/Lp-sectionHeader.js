import styled, { css } from "styled-components";

const SectionHeader = styled.h3`
  font-family: "IBM Plex Mono", monospace;
  font-size: 2.5em;
  color: #131480;
  border-bottom: 5px solid #c8bfb0;
  box-sizing: border-box;
  display: inline;
  text-transform: uppercase;

  ${props =>
    props.white &&
    css`
      color: white !important;
    `}
`;

export default SectionHeader;
