import React from "react";
import Link from "next/link";

const HeaderLink = (props) => (
  <Link href={props.url}>
    <a className="btn mybutton mb-2 mr-3">{props.children}</a>
  </Link>
);

export default HeaderLink;
