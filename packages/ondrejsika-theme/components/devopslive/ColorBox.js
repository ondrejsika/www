import styled, { css } from "styled-components";

const ColorBox = styled.div`
  padding: 2.5em;
  ${props =>
    props.white &&
    css`
      background-color: white;
    `}
  ${props =>
    props.blue &&
    css`
      background-color: #131480;
      color: white !important;
    `}
`;

export default ColorBox;
