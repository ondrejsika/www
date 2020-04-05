import styled from "styled-components";

const H1 = styled.span`
  font-size: 6em;
  padding: 0.05em 0;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 992px) {
    font-size: 4em !important;
  }
  @media (max-width: 600px) {
    font-size: 3em !important;
    display: block;
  }
`;

export default H1;
