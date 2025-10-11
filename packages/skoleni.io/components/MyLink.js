import Link from "next/link";

const MyLink = (props) => (
  <Link href={props.href} legacyBehavior>
    {props.children}
  </Link>
);

export default MyLink;
