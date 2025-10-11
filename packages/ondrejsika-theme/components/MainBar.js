import default_colors from "@app/ondrejsika-theme/config/colors";
import styled from "styled-components";
import { Container as BootstrapContainer } from "react-bootstrap";

const Container = styled(BootstrapContainer)``;

const MainBar = (props) => {
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
        circle at 80% 20%,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 50%
      );
    }
  `;
  return (
    <Background>
      <Container>
        <div className="pt-4 pb-4" style={{ position: "relative", zIndex: 1 }}>
          <h1 className="text-white pt-4 pb-3">{props.header}</h1>
          <p
            className="text-white"
            style={{ fontSize: "1.125rem", lineHeight: "1.7", fontWeight: 300 }}
          >
            {props.text}
          </p>
        </div>
      </Container>
    </Background>
  );
};

export default MainBar;
