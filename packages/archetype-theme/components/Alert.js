const style = {
  padding: 10,
  border: "3px solid red"
};

const Alert = props => <div style={style}>{props.children}</div>;

export default Alert;
