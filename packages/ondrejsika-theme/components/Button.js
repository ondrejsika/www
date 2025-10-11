import styled, { css } from "styled-components";
import Link from "next/link";
import default_colors from "@app/ondrejsika-theme/config/colors";

const Button = (props) => {
  const WrapperButton = styled.a`
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 8px;
    font-weight: 500;
    letter-spacing: 0.01em;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

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
        border: 2px solid
          ${(props.site && props.site.colors && props.site.colors.PRIMARY) ||
          default_colors.BLUE};

        color: ${(props.site &&
          props.site.colors &&
          props.site.colors.PRIMARY) ||
        default_colors.BLUE};
        background: ${default_colors.WHITE};

        &:hover {
          border: 2px solid
            ${(props.site && props.site.colors && props.site.colors.PRIMARY) ||
            default_colors.BLUE};
          color: ${(props.site &&
            props.site.colors &&
            props.site.colors.SECONDARY_LIGHT) ||
          default_colors.WHITE};
          background: ${(props.site &&
            props.site.colors &&
            props.site.colors.PRIMARY) ||
          default_colors.BLUE};
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
          outline: none;
        }
      `}

    ${(props) =>
      props.type == "outline-secondary" &&
      css`
        border: 2px solid
          ${(props.site &&
            props.site.colors &&
            props.site.colors.SECONDARY_LIGHT) ||
          default_colors.WHITE};

        color: ${(props.site &&
          props.site.colors &&
          props.site.colors.SECONDARY_LIGHT) ||
        default_colors.WHITE};
        background: transparent;

        &:hover {
          border: 2px solid
            ${(props.site &&
              props.site.colors &&
              props.site.colors.SECONDARY_LIGHT) ||
            default_colors.WHITE};
          color: ${(props.site &&
            props.site.colors &&
            props.site.colors.PRIMARY) ||
          default_colors.BLUE};
          background: ${(props.site &&
            props.site.colors &&
            props.site.colors.SECONDARY_LIGHT) ||
          default_colors.WHITE};
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
          outline: none;
        }
      `}

    ${(props) =>
      props.type == "primary" &&
      css`
        border: 2px solid
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
          border: 2px solid
            ${(props.site && props.site.colors && props.site.colors.PRIMARY) ||
            default_colors.BLUE};
          color: ${default_colors.WHITE};
          background: ${(props.site &&
            props.site.colors &&
            props.site.colors.PRIMARY) ||
          default_colors.BLUE};
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          opacity: 0.9;
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
          outline: none;
        }
      `}

    ${(props) =>
      props.type == "secondary" &&
      css`
        border: 2px solid
          ${(props.site && props.site.colors && props.site.colors.SECONDARY) ||
          default_colors.LIGHT_GREY};
        color: ${(props.site &&
          props.site.colors &&
          props.site.colors.SECONDARY) ||
        default_colors.DARK_GREY};
        background: ${(props.site &&
          props.site.colors &&
          props.site.colors.SECONDARY_LIGHT) ||
        default_colors.WHITE};

        &:hover {
          background: ${(props.site &&
            props.site.colors &&
            props.site.colors.PRIMARY) ||
          default_colors.BLUE};
          border: 2px solid
            ${(props.site && props.site.colors && props.site.colors.PRIMARY) ||
            default_colors.BLUE};
          color: ${(props.site &&
            props.site.colors &&
            props.site.colors.SECONDARY_LIGHT) ||
          default_colors.WHITE};
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}
      ${(props) =>
      props.type == "landing-page" &&
      css`
        font-weight: 600;
        background: ${default_colors.BROWN};
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border-radius: 8px;
        border: 2px solid ${default_colors.BROWN};
        color: ${default_colors.BLUE};

        &:hover {
          background: ${default_colors.DARK_GREY};
          border: 2px solid ${default_colors.DARK_GREY};
          color: ${default_colors.WHITE};
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `};
  `;
  return (
    <>
      <Link href={props.href} legacyBehavior>
        <WrapperButton
          site={props.site}
          href={props.href}
          type={props.type || "primary"}
          size={props.size || "medium"}
        >
          {props.children}
        </WrapperButton>
      </Link>
    </>
  );
};

export default Button;
