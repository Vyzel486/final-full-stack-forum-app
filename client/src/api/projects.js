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

export const deleteUser = async (_id) => {
  const response = await axios.delete(`http://localhost:3000/users/${_id}`);
  return response.data;
};

export const getQuestions = async () => {
  const response = await axios.get("http://localhost:3000/questions");
  return response.data;
};

export const getQuestion = async (_id) => {
  const response = await axios.get(`http://localhost:3000/questions/${_id}`);
  return response.data;
};

export const createQuestion = async (question) => {
  const response = await axios.post(
    "http://localhost:3000/add-question",
    question
  );
  return response.data;
};

export const updateQuestion = async (question) => {
  const response = await axios.put(
    `http://localhost:3000/questions/${question._id}`,
    question
  );
  return response.data;
};

export const deleteQuestion = async (_id) => {
  const response = await axios.delete(`http://localhost:3000/questions/${_id}`);
  return response.data;
};

export const getAnswers = async () => {
  const response = await axios.get("http://localhost:3000/answers");
  return response.data;
};

export const getAnswer = async (_id) => {
  const response = await axios.get(`http://localhost:3000/answers/${_id}`);
  return response.data;
};

export const createAnswer = async (newAnswer) => {
  const response = await axios.post(
    "http://localhost:3000/add-answer",
    newAnswer
  );
  return response.data;
};

export const updateAnswer = async (answer) => {
  const response = await axios.put(
    `http://localhost:3000/answers/${answer._id}`,
    answer
  );
  return response.data;
};

export const deleteAnswer = async (_id) => {
  const response = await axios.delete(`http://localhost:3000/answers/${_id}`);
  return response.data;
};
