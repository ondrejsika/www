import styled, { css } from "styled-components";

const ColorBox = styled.div`
  padding: 3em 4em;
  ${(props) =>
    props.white &&
    css`
      background-color: white;
      color: #707070;
    `}
  ${(props) =>
    props.blue &&
    css`
      background-color: #131480;
      color: white !important;
    `}
`;

export default ColorBox;
