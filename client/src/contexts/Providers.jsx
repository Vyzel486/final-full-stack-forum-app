import PropTypes from "prop-types";
import { UserProvider } from "./UserContext";

const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
