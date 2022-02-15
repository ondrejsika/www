import React from "react";
import styled from "styled-components";
import default_colors from "@app/ondrejsika-theme/config/colors";

const Border = styled.div`
  border: 1px solid ${default_colors.LIGHT_GREY};
  border-radius: 5px;
`;

const Price = (props) => (
  <Border>
    <div className="price bg-grey pb-3">
      <div className="container">
        <h2 className="pt-4 pb-2">{props.PriceHeader}</h2>
        <div className="row">
          <div className="col-12">
            <p className="">{props.children}</p>
          </div>
          {/* <div className="col-sm-3 col-12">
            <div className="btn btn-succes">{props.PriceBtn}</div>
          </div> */}
        </div>
      </div>
    </div>
  </Border>
);

export default Price;
