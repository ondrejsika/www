import React from "react";
import styled from "styled-components";
import Link from "next/link";
import default_colors from "@app/ondrejsika-theme/config/colors";

const Background = styled.div`
  background: ${default_colors.LIGHT_GREY};
`;
const P = styled.p`
  margin: 0;
  padding: 10px;
`;
const A = styled.a`
  font-weight: 700;
  color: red;
  font-size: 1.2em;
`;

const NewsLine = props => (
  <Background>
    <P className="text-center">
      <Link href={props.href} passHref>
        <A>{props.children}</A>
      </Link>
    </P>
  </Background>
);

export default NewsLine;
