import "./Layout.scss";

const LoginLayout = ({ children }) => {
  return (
    <div className="login-container">
      <h1>Welcome to Forum!</h1>
      {children}
    </div>
  );
};

export default LoginLayout;
