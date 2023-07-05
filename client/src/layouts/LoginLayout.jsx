import "./Layout.scss";

const LoginLayout = ({ children }) => {
  return (
    <div className="login-container">
      <h2>Welcome to forum app!</h2>
      {children}
    </div>
  );
};

export default LoginLayout;
