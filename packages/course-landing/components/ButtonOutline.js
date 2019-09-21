import Link from "next/link";

const ButtonOutline = props => (
  <>
    <Link href={props.btnUrl}>
      <a className="btn btn-large mybutton-outline m-1">{props.children}</a>
    </Link>
  </>
);
export default ButtonOutline;
