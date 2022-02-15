import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FloatingBtn = (props) => {
  const WrapperButton = styled.a`
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #131480;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    z-index: 5;

    &:hover {
      background: #707070;
      color: #131480;
      text-decoration: none;
    }
  `;

  return (
    <>
      <Link href={props.href}>
        <WrapperButton href={props.href}>{props.children}</WrapperButton>
      </Link>
    </>
  );
};

export default FloatingBtn;
