import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};

export const createUser = async (newUser) => {
  const response = await axios.post("http://localhost:3000/users", newUser);
  return response.data;
};

export const updateUser = async (_id, updatingUser) => {
  const response = await axios.put(
    `http://localhost:3000/users/${_id}`,
    updatingUser
  );
  return response.data;
};

export const getQuestion = async () => {
  const response = await axios.get("http://localhost:3000/questions");
  return response.data;
};

export const createQuestion = async (newQuestion) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/add-question",
      newQuestion
    );
    return response.data;
  } catch (error) {
    throw new Error("Error adding query to MongoDB");
  }
};

export const updateQuestion = async (_id, updateQuestion) => {
  const response = await axios.put(
    `http://localhost:3000/questions/${_id}`,
    updateQuestion
  );
  return response.data;
};

export const deleteQuestion = async (_id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/questions/${_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
