import Input from "../Input/Input";
import PropTypes from "prop-types";
import "./FormItem.scss";

const FormItem = ({ label, containerClassname, ...rest }) => {
  return (
    <div className={containerClassname}>
      <div>
        <label>{label}</label>
      </div>
      <Input className="form-item-input" {...rest} />
    </div>
  );
};

FormItem.propTypes = {
  label: PropTypes.string,
  containerClassname: PropTypes.string,
};

FormItem.defaultProps = {
  containerClassname: "",
};

export default FormItem;
