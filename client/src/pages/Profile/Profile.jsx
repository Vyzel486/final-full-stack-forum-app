import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import "./Profile.scss";

const Profile = () => {
  const { user, handleUpdateUser, handleDeleteUser, handleLogout } = useContext(
    UserContext
  );
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [date, setDate] = useState(user.date);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, surname, date, email, password };
    handleUpdateUser(user);
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <FormItem
          label="Name"
          containerClassname="form-item"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormItem
          label="Surname"
          containerClassname="form-item"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <FormItem
          label="Birth Date"
          containerClassname="form-item"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
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
        <div className="button-container">
          <Button>Update</Button>
          <Button type="button" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
          <Button color="error" onClick={handleDeleteUser}>
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
