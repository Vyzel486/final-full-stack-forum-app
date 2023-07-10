import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { LOGIN_ROUTE } from "../routes/const";
import { checkUserCredentials } from "../utils/user";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  createQuestion,
} from "../api/projects";

const UserContext = createContext({
  user: null,
  question: null,
  isLoggedIn: false,
  handleLogin: () => null,
  handleLogout: () => null,
  handleRegister: () => null,
  handleUpdateUser: () => null,
  handleCreateQuestion: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [question, setQuestion] = useState(
    JSON.parse(localStorage.getItem("question"))
  );

  const isLoggedIn = !!user;

  const navigate = useNavigate();

  const handleLogin = (user, setError) => {
    getUsers()
      .then((response) => {
        const existingUser = checkUserCredentials(response, user);
        if (existingUser) {
          setUser(existingUser);
          localStorage.setItem("user", JSON.stringify(existingUser));
        } else {
          setError("User email or password is incorrect.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("user", null);
    navigate(LOGIN_ROUTE);
  };

  const handleRegister = (newUser) => {
    createUser(newUser)
      .then(() => {
        navigate(LOGIN_ROUTE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUser = (updatingUser) => {
    updateUser(user._id, updatingUser)
      .then((response) => {
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response));
        navigate(LOGIN_ROUTE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteUser = () => {
    deleteUser(user._id);
    setUser(null);
    localStorage.setItem("user", null);
    navigate(LOGIN_ROUTE);
  };

  const handleCreateQuestion = (newQuestion) => {
    createQuestion(newQuestion)
      .then((response) => {
        setQuestion(response);
        localStorage.setItem("question", JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        question,
        isLoggedIn,
        handleLogin,
        handleLogout,
        handleRegister,
        handleUpdateUser,
        handleDeleteUser,
        handleCreateQuestion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserProvider };
