import React from "react";
import styled, { css } from "styled-components";
import default_colors from "@app/ondrejsika-theme/config/colors";

const FormButton = (props) => {
  const WrapperButton = styled.a`
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 30px;

    ${(props) =>
      props.size == "small" &&
      css`
        padding: 0.375rem 0.55rem;
      `}

    ${(props) =>
      props.size == "medium" &&
      css`
        padding: 0.375rem 0.75rem;
      `}

    ${(props) =>
      props.size == "big" &&
      css`
        padding: 0.5em 2em;
      `}

      ${(props) =>
      props.size == "huge" &&
      css`
        padding: 1.2em 3.3em;
      `}

      ${(props) =>
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
        &:focus {
          box-shadow: 0 0 0 3px #ffffff, 0 0 0px 5px red;
          outline: none;
        }
      `}

/* done focus */
    ${(props) =>
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
        ${
          "" /* &:focus {
          box-shadow: 0 0 0 3px #141480,
            0 0 0px 5px
              ${props.site &&
                props.site.colors &&
                props.site.colors.SECONDARY_LIGHT};
          outline: none;
        } */
        }
      `}
    ${(props) =>
      props.type == "primary" &&
      css`
        border: 1px solid
          ${(props.site && props.site.colors && props.site.colors.PRIMARY) ||
          default_colors.BLUE};
        background: ${(props.site &&
          props.site.colors &&
          props.site.colors.PRIMARY) ||
        default_colors.BLUE};
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
        &:focus {
          box-shadow: 0 0 0 3px white,
            0 0 0px 5px
              ${(props.site &&
                props.site.colors &&
                props.site.colors.PRIMARY) ||
              default_colors.BLUE};
          outline: none;
        }
      `}

    ${(props) =>
      props.type == "secondary" &&
      css`
        border: 1px solid
          ${(props.site && props.site.colors && props.site.colors.SECONDARY) ||
          default_colors.BLUE};
        color: ${(props.site &&
          props.site.colors &&
          props.site.colors.SECONDARY) ||
        default_colors.BLUE};
        background: ${(props.site &&
          props.site.colors &&
          props.site.colors.SECONDARY_LIGHT) ||
        default_colors.WHITE};

        &:hover {
          background: ${(props.site &&
            props.site.colors &&
            props.site.colors.PRIMARY) ||
          default_colors.BLUE};
          color: ${(props.site &&
            props.site.colors &&
            props.site.colors.SECONDARY_LIGHT) ||
          default_colors.WHITE};
          text-decoration: none;
        }
      `}
  `;
  return (
    <>
      <WrapperButton
        site={props.site}
        href={props.href}
        type={props.type || "primary"}
        size={props.size || "medium"}
      >
        {props.children}
      </WrapperButton>
    </>
  );
};

export default FormButton;
