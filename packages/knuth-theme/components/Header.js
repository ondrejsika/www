import React from "react";
import Link from "next/link";

export default props => {
  let site_name = props.site_name;
  let menu_links = props.menu_links;
  return (
    <header className="header">
      <div className="site-name">
        <span style={{ fontSize: "1.1em" }}>
          <strong>{site_name}</strong>
        </span>
      </div>
      <nav className="site-nav">
        <ul>
          {menu_links.map(link => (
            <li
              className="ml-4"
              style={{ display: "inline-block", fontSize: "1.1em" }}
            >
              <Link href={link[1]}>
                <a>{link[0]}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: block;
          list-style-type: disc;
          margin-block-start: 0px;
          margin-block-end: 0px;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 0px;
        }
        .header {
          display: flex;
        }
        .site-nav {
          margin-left: auto;
        }
        li:first-of-type {
          margin-left: 0px !important;
        }
        @media (max-width: 600px) {
          .header {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
