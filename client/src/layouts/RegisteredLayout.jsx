import "./Layout.scss";
import Topbar from "../components/Topbar/Topbar";

const RegisteredLayout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div>{children}</div>
    </div>
  );
};

export default RegisteredLayout;
