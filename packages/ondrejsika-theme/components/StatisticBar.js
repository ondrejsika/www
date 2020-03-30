import React from "react";
import Translate from "@app/common/components/Translate";
import styled from "styled-components";

const Background = styled.div`
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.SECONDARY) || "grey"};
`;

const StatisticBar = props => (
  <Background site={props.site}>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2 className="text-center text-white mb-0 text-huge">
            {props.NumberOfPeople}
          </h2>
          <p className="text-white text-center statistic-bottom">
            <Translate
              lang={props.lang || "cs"}
              cs="Počet odškolených lidí"
              en="Training attendees"
            />
          </p>
        </div>
        <div className="col-4">
          <h2 className="text-white text-center mb-0 text-huge ">
            {props.NumberOfCompanies}
          </h2>
          <p className="text-white text-center statistic-bottom">
            <Translate
              lang={props.lang || "cs"}
              cs="Počet firem ve spolupráci"
              en="Companies trained"
            />
          </p>
        </div>
        <div className="col-4">
          <h2 className="text-center text-white mb-0 text-huge">
            {props.NumberOfLectures}
          </h2>
          <p className="text-white text-center statistic-bottom">
            <Translate
              lang={props.lang || "cs"}
              cs="Počet uskutečněných školení"
              en="Training sessions"
            />
          </p>
        </div>
      </div>
    </div>
  </Background>
);

export default StatisticBar;
