import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Button = props => {
  const WrapperButton = styled.a`
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;

    border: 1px solid
      ${props.site && props.site.colors && props.site.colors.SECONDARY_LIGHT};

    color: ${props.site &&
      props.site.colors &&
      props.site.colors.SECONDARY_LIGHT};

    background: ${props.site && props.site.colors && props.site.colors.PRIMARY};
    &:hover {
      border: 1px solid
        ${props.site && props.site.colors && props.site.colors.PRIMARY};
      color: ${props.site && props.site.colors && props.site.colors.PRIMARY};
      background: ${props.site &&
        props.site.colors &&
        props.site.colors.SECONDARY_LIGHT};
      text-decoration: none;
    }
  `;
  return (
    <>
      <Link href={props.href}>
        <WrapperButton href={props.href}>{props.text}</WrapperButton>
      </Link>
    </>
  );
};

export default Button;
