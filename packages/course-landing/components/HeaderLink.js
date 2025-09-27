import React from "react";
import Link from "next/link";

const HeaderLink = (props) => (
  <Link href={props.url} className="btn mybutton mb-2 mr-3">
    {props.children}
  </Link>
);

export default HeaderLink;
