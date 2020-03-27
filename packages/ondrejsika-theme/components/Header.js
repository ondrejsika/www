import React from "react";
import styled from "styled-components";
import default_colors from "@app/ondrejsika-theme/config/colors";
import { Container as BootstrapContainer } from "react-bootstrap";
import Button from "@app/ondrejsika-theme/components/Button";

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
                <Button site={props.site} type="outline" href="#form">
                  {props.text}
                </Button>
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
