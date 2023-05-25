import BSButton from "react-bootstrap/Button";
const Button = (props) => {
  return <BSButton style={{ color: props.color }}>{props.message}</BSButton>;
};

export default Button;
