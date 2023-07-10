import PropTypes from "prop-types";
import Topbar from "../components/Topbar/Topbar";
import "./Layout.scss";

const RegisteredLayout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div>{children}</div>
    </div>
  );
};

RegisteredLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RegisteredLayout;
