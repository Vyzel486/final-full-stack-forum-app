import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({ className, ...props }) => {
  return <input className={`styled-input ${className}`} {...props} />;
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Input;
