import React from "react";
import styled from "styled-components";
import default_colors from "@app/ondrejsika-theme/config/colors";
import Link from "next/link";
import { Container as BootstrapContainer } from "react-bootstrap";

const InquiryBtn = styled.a`
  color: white !important;
  background-color: transparent;
  border: 1px solid white;
  padding: 0.375rem 0.75rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  &:hover {
    background-color: green;
    cursor: pointer;
  }
`;
const Container = styled(BootstrapContainer)`
  padding: 1.5em 0.8em;
`;
const Header = props => {
  const Background = styled.div`
    background-color: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      default_colors.BLUE};
  `;

  return (
    <Background>
      <Container>
        {props.websiteHeaderCenter && (
          <div className="pt-4 pb-4">
            <h1 className="text-white pt-3 pb-2 text-center">
              {props.websiteHeaderCenter}
            </h1>
          </div>
        )}
        {!props.websiteHeaderCenter && (
          <div className="row">
            <div className="col-lg-10 col-md-9 col-sm-8 col-8">
              <div className="pt-4 pb-4">
                <h1 className="text-white pt-3 pb-2">{props.websiteHeader}</h1>
                {props.inquiryBtn && (
                  <Link href="#form">
                    <InquiryBtn>{props.inquiryBtn}</InquiryBtn>
                  </Link>
                )}
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 p-4">
              <img src={props.logo} className="img-fluid align-right" />
            </div>
          </div>
        )}
      </Container>
    </Background>
  );
};

export default Header;
