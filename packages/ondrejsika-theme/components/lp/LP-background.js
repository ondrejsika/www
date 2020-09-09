import styled, { css } from "styled-components";

const Background = styled.div`
    border-bottom: 1px solid #ffffff;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 400px;
    overflow: visible;
    /* height: 100%; */
    width: 100%;
    @media only screen and (max-width: 1319px) {
      background-image: none;
    }
    ${props =>
      props.paddingBottom &&
      css`
        padding-bottom: ${props.paddingBottom};
      `}
    ${props =>
      props.blue &&
      css`
        background-color: #131480;
      `}
    ${props =>
      props.light_grey &&
      css`
        background-color: #ececec;
      `}
  `;

export default Background;
