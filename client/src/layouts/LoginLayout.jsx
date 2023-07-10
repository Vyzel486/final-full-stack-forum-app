import PropTypes from "prop-types";
import "./Layout.scss";

const LoginLayout = ({ children }) => {
  return (
    <div className="login-container">
      <h2>Welcome to FORUM app!</h2>
      {children}
    </div>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
