import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import default_colors from "@app/ondrejsika-theme/config/colors";

const Button = props => {
  const WrapperButton = styled.a`
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5;

    ${props =>
      props.size == "small" &&
      css`
        padding: 0.375rem 0.55rem;
      `}
      
    ${props =>
      props.size == "medium" &&
      css`
        padding: 0.375rem 0.75rem;
      `}

    ${props =>
      props.size == "big" &&
      css`
        padding: 0.475rem 0.95rem;
      `}

    ${props =>
      props.type == "outline-primary" &&
      css`
        border: 1px solid
          ${(props.site && props.site.colors && props.site.colors.PRIMARY) ||
            default_colors.BLUE};

        color: ${(props.site &&
          props.site.colors &&
          props.site.colors.PRIMARY) ||
          default_colors.BLUE};
        &:hover {
          border: 1px solid
            ${(props.site &&
              props.site.colors &&
              props.site.colors.SECONDARY_LIGHT) ||
              default_colors.WHITE};
          color: ${(props.site &&
            props.site.colors &&
            props.site.colors.SECONDARY_LIGHT) ||
            default_colors.WHITE};
          background: ${(props.site &&
            props.site.colors &&
            props.site.colors.PRIMARY) ||
            default_colors.BLUE};
          text-decoration: none;
        }
      `}

    ${props =>
      props.type == "outline-secondary" &&
      css`
        border: 1px solid
          ${(props.site &&
            props.site.colors &&
            props.site.colors.SECONDARY_LIGHT) ||
            default_colors.WHITE};

        color: ${(props.site &&
          props.site.colors &&
          props.site.colors.SECONDARY_LIGHT) ||
          default_colors.WHITE};

        &:hover {
          border: 1px solid
            ${(props.site && props.site.colors && props.site.colors.PRIMARY) ||
              default_colors.BLUE};
          color: ${(props.site &&
            props.site.colors &&
            props.site.colors.PRIMARY) ||
            default_colors.BLUE};
          background: ${(props.site &&
            props.site.colors &&
            props.site.colors.SECONDARY_LIGHT) ||
            default_colors.WHITE};
          text-decoration: none;
        }
      `}
  `;
  return (
    <>
      <Link href={props.href}>
        <WrapperButton
          site={props.site}
          href={props.href}
          type={props.type || "outline-primary"}
          size={props.size || "medium"}
        >
          {props.children}
        </WrapperButton>
      </Link>
    </>
  );
};

export default Button;
