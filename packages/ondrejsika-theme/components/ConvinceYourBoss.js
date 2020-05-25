import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Translate from "@app/common/components/Translate";

const TriangleBottomRight = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.PRIMARY) || "grey"};
  clip-path: polygon(-1px 100%, 100% -1px, 100% 100%);
  margin-bottom: -1px;
`;

const TriangleTopLeft = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: -80px;
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.PRIMARY) || "grey"};
  clip-path: polygon(-1px 100%, 100% -1px, -1px -1px);
`;

const Background = styled.div`
  background-color: ${props =>
    (props.site && props.site.colors && props.site.colors.PRIMARY) || "grey"};
`;
const Text = styled.div`
  padding: 2em 0;
  color: white;
  font-size: 1.5em;
`;
const ConvinceYourBoss = props => (
  <>
    <TriangleBottomRight site={props.site} />
    <Background site={props.site}>
      <Container>
        <Text>
          <Translate
            lang={props.lang || "cs"}
            cs="Nad kurzy jsem strávil desítky hodin příprav a stovky hodin používáním
          a prozkoumáváním technologií. Vy nemusíte. Vše je připraveno tak,
          abyste se naučili a vyzkoušeli vše co je potřeba ke zvládnutí dané
          technologie. Pokud nebudete s kurzem spokojeni, vrátím Vám peníze."
            en="I've put tens of hours to my courses preparation and spent hundreds of hours by using, exploring and distilling the best out of these technologies. I've spent the time so you don't have to. Everything is prepared in such way you will be able to use the technology right away. If for any reason you're not satisfied with the course simply ask for your money back"
          />
        </Text>
      </Container>
    </Background>
    <TriangleTopLeft site={props.site} />
  </>
);
export default ConvinceYourBoss;
