import React from "react";
import styled from "styled-components";

import Head from "next/head";
import { Container, Row } from "react-bootstrap";

const SiteMap = styled.div`
  background-color: #098958;
  padding: 2em 0;
`;

const Wrapper = styled.div`
  margin-top: 7em;
`;

const Box = styled.div`
  padding: 3em 1em;
  width: 250px;
  border: 2px solid #7fce91;
  border-radius: 2px;
  margin: 1em;
  &:hover {
    background-color: #7fce91;
    border: 2px solid #7fce91;
  }
`;

const Header = styled.a`
  font-family: "IBM Plex Mono", monospace;
  color: white !important;
  text-align: center;
  font-size: 2em;
  display: block;
  &:hover {
    text-decoration: none;
  }
`;

const TriangleBottomRight = styled.div`
  width: 100%;
  height: 80px;
  background: #088958;
  clip-path: polygon(-1px 100%, 100% -1px, 100% 100%);
  margin-bottom: -1px;
`;

const TriangleTopLeft = styled.div`
  width: 100%;
  height: 80px;
  background: #088958;
  clip-path: polygon(-1px 100%, 100% -1px, -1px -1px);
`;

const Center = styled(Row)`
  justify-content: center;
`;

const H2 = styled.h2`
  /* padding: 1em 0 0 1em; */
  /* color: #088958; */
  color: white;
  text-align: center;
`;

const Index = () => (
  <>
    <Head>
      <title>Trainera.io</title>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Wrapper>
      <TriangleBottomRight />
      <SiteMap>
        <H2>Trainera.io</H2>
        <Container>
          <Center>
            <Box>
              <Header href="https://trainera.cz">Trainera.cz</Header>
            </Box>
            <Box>
              <Header href="https://trainera.cz">Trainera.de</Header>
            </Box>
          </Center>
        </Container>
      </SiteMap>
      <TriangleTopLeft />
    </Wrapper>
  </>
);

export default Index;
