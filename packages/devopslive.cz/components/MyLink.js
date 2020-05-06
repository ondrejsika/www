import React from "react";
import Link from "next/link";

const MyLink = props => (
  <Link href={props.href}>
    <a href={props.href}>{props.children}</a>
  </Link>
);

export default MyLink;
