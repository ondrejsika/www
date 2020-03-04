import React from "react";
import color from "../config/colors";
import styled from "styled-components";

const TopBar = styled.div`
  background-color: ${color.BLUE};
`;
const MainBarHomepage = props => (
  <div>
    <TopBar>
      <div className="container pt-4 pb-4">
        <h1 className="text-white pt-3 pb-3">{props.MainBarHeader}</h1>
        <h3 className="text-white">{props.MainBarText}</h3>
      </div>
    </TopBar>
  </div>
);

export default MainBarHomepage;
