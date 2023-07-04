import "./Layout.scss";
import Topbar from "../components/Topbar/Topbar";

const RegisteredLayout = ({ children }) => {
  return (
    <div className="RegisteredLayout-container">
      <Topbar />
      <div className="Registered-container">{children}</div>
    </div>
  );
};

export default RegisteredLayout;
