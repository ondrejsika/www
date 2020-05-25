import React from "react";
import Translate from "@app/common/components/Translate";
import styled from "styled-components";

const TriangleBottomRight = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.SECONDARY) || "grey"};
  clip-path: polygon(-1px 100%, 100% -1px, 100% 100%);
  margin-bottom: -1px;
`;

const TriangleTopLeft = styled.div`
  width: 100%;
  height: 80px;
  background: ${props =>
    (props.site && props.site.colors && props.site.colors.SECONDARY) || "grey"};
  clip-path: polygon(-1px 100%, 100% -1px, -1px -1px);
`;

const Background = styled.div`
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.SECONDARY) || "grey"};
  @media (max-width: 600px) {
    display: none;
  }
`;

const StatisticBar = props => (
  <>
    {props.showBothDiagonalBackground && (
      <TriangleBottomRight site={props.site} />
    )}

    <Background site={props.site}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 className="text-center text-white mb-0 text-huge">
              {props.NumberOfPeople}
            </h2>
            <p className="text-white text-center statistic-bottom">
              {!props.NumberOfPeopleHeader ? (
                <Translate
                  lang={props.lang || "cs"}
                  cs="Počet odškolených lidí"
                  en="Training attendees"
                />
              ) : (
                props.NumberOfPeopleHeader
              )}
            </p>
          </div>
          <div className="col-4">
            <h2 className="text-white text-center mb-0 text-huge ">
              {props.NumberOfCompanies}
            </h2>
            <p className="text-white text-center statistic-bottom">
              {!props.NumberOfCompaniesHeader ? (
                <Translate
                  lang={props.lang || "cs"}
                  cs="Počet firem ve spolupráci"
                  en="Companies trained"
                />
              ) : (
                props.NumberOfCompaniesHeader
              )}
            </p>
          </div>
          <div className="col-4">
            <h2 className="text-center text-white mb-0 text-huge">
              {props.NumberOfLectures}
            </h2>
            <p className="text-white text-center statistic-bottom">
              {!props.NumberOfLecturesHeader ? (
                <Translate
                  lang={props.lang || "cs"}
                  cs="Počet uskutečněných školení"
                  en="Training sessions"
                />
              ) : (
                props.NumberOfLecturesHeader
              )}
            </p>
          </div>
        </div>
      </div>
    </Background>
    {props.showDiagonalBackground && <TriangleTopLeft site={props.site} />}
  </>
);

export default StatisticBar;
