import React from "react";

const StatisticBar = props => (
  <div className="bar-grey-light d-none d-lg-block d-xl-block">
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2 className="text-center text-white mb-0 text-huge">
            {props.NumberOfPeople}
          </h2>
          <p className="text-white text-center statistic-bottom">
            {props.NumberOfPeopleHeader}
          </p>
        </div>
        <div className="col-4">
          <h2 className="text-white text-center mb-0 text-huge ">
            {props.NumberOfCompanies}
          </h2>
          <p className="text-white text-center statistic-bottom">
            {props.NumberOfCompaniesHeader}
          </p>
        </div>
        <div className="col-4">
          <h2 className="text-center text-white mb-0 text-huge">
            {props.NumberOfLectures}
          </h2>
          <p className="text-white text-center statistic-bottom">
            {props.NumberOfLecturesHeader}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default StatisticBar;
