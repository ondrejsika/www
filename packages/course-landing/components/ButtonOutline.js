import Link from "next/link";

const ButtonOutline = (props) => (
  <>
    <Link href={props.btnUrl} className="btn btn-large mybutton-outline m-1">
      {props.children}
    </Link>
  </>
);
export default ButtonOutline;
