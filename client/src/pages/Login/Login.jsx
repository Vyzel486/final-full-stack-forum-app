import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import { REGISTER_ROUTE, FORUM_ROUTE } from "../../routes/const";
import "./Login.scss";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      await handleLogin(user, setError);
      navigate(FORUM_ROUTE);
    } catch (error) {
      setError("User email or password is incorrect.");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <FormItem
          label="Email"
          containerClassname="form-item"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormItem
          label="Password"
          containerClassname="form-item"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <div className="button-container">
          <Button type="submit">Login</Button>
          <Link to={REGISTER_ROUTE}>
            <Button>Register</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
