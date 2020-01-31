import { SInput } from "./style.js";
import PropTypes from "prop-types";

const Input = props => {
  return <SInput {...props} />;
};

export default Input;

Input.defaultProps = {};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string
};
