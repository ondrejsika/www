import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  font-size: 18px;
  &:before {
    content: "⬡";
    margin-right: 10px;
    margin-left: -27px;
  }
`;

export default Li;
