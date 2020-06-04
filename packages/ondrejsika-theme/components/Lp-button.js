import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Margin = styled.div`
  padding: 2em 0;
`;

const Button = props => {
  const WrapperButton = styled.a`
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    padding: 0.475rem 2.25rem;
    margin: 2em 0;
    font-weight: bold;

    background: #131480;
    box-shadow: 9px 9px 6px #00000029;
    border-radius: 54px;
    color: white;
    &:hover {
      background: #c8bfb0;
      color: #131480;
      text-decoration: none;
    }
    ${props =>
      props.inverse &&
      css`
        background: #c8bfb0;
        box-shadow: 9px 9px 6px #00000029;
        border-radius: 54px;
        color: #131480;
        &:hover {
          background: #131480;
          color: #c8bfb0;
          text-decoration: none;
          border: 1px solid #c8bfb0;
        }
      `}
    ${props =>
      props.huge &&
      css`
        padding: 0.675rem 3rem;
      `}
  `;

  return (
    <Margin>
      <Link href={props.href}>
        <WrapperButton
          // site={props.site}
          href={props.href}
          inverse={props.inverse}
          huge={props.huge}
        >
          {props.children}
        </WrapperButton>
      </Link>
    </Margin>
  );
};

export default Button;
