import styled, { css } from "styled-components";

const IconBtn = styled.img`
  margin-bottom: 2px;
  vertical-align: center;
  height: 20px;
  ${props =>
    props.padding_right &&
    css`
      padding-right: 10px;
    `}
  ${props =>
    props.padding_left &&
    css`
      padding-left: 10px;
    `}
`;

export default IconBtn;
