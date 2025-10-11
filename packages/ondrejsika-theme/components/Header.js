import styled from "styled-components";
import default_colors from "@app/ondrejsika-theme/config/colors";
import { Container as BootstrapContainer } from "react-bootstrap";
import Button from "@app/ondrejsika-theme/components/Button";

const Container = styled(BootstrapContainer)`
  padding: 1em 0.8em;
`;
const Header = (props) => {
  const Background = styled.div`
    background: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
    default_colors.BLUE};
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at 20% 50%,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 50%
      );
    }
  `;

  return (
    <Background>
      <Container>
        {props.websiteHeaderCenter && (
          <div className="pt-3 pb-3">
            <h1
              className="text-white pt-2 pb-2 text-center"
              style={{ position: "relative", zIndex: 1 }}
            >
              {props.websiteHeaderCenter}
            </h1>
          </div>
        )}
        {!props.websiteHeaderCenter && (
          <div className="row" style={{ position: "relative", zIndex: 1 }}>
            <div className="col-lg-10 col-md-9 col-sm-8 col-8">
              <div className="pt-3 pb-3">
                <h1 className="text-white pt-2 pb-2">{props.websiteHeader}</h1>
                <Button site={props.site} type="outline-secondary" href="#form">
                  {props.text}
                </Button>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 p-3">
              <img
                src={props.logo && props.logo.src}
                alt="Logo"
                className="img-fluid align-right"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
              />
            </div>
          </div>
        )}
      </Container>
    </Background>
  );
};

export default Header;
