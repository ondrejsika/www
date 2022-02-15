import styled, { css } from "styled-components";

const Text = styled.p`
  color: black;
  font: Regular IBM Plex Sans;
  font-size: 1em;
  letter-spacing: 0px;
  ${(props) =>
    props.white &&
    css`
      color: white;
    `}
`;

export default Text;
