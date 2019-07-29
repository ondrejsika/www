const ButtonOutline = props => (
  <>
    <a href={"props.btnUrl"} className="btn btn-large mybutton-outline m-1">
      {props.children}
    </a>
  </>
);
export default ButtonOutline;
